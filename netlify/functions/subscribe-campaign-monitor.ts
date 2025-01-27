import { Handler } from '@netlify/functions';
import { createClient } from 'createsend-node';

const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  }

  try {
    const { email, name } = JSON.parse(event.body || '{}');

    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Email is required' }),
      };
    }

    const apiKey = process.env.CAMPAIGN_MONITOR_API_KEY;
    const listId = process.env.CAMPAIGN_MONITOR_LIST_ID;

    if (!apiKey || !listId) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Campaign Monitor configuration is missing' }),
      };
    }

    const client = createClient(apiKey);
    
    await client.subscribers.addSubscriber(listId, {
      EmailAddress: email,
      Name: name || '',
      ConsentToTrack: 'Yes',
      Resubscribe: true
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Successfully subscribed to newsletter' }),
    };
  } catch (error) {
    console.error('Campaign Monitor subscription error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to subscribe to newsletter' }),
    };
  }
};

export { handler };