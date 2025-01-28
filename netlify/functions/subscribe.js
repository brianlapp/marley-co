exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' })
    };
  }

  try {
    // Parse the incoming JSON data
    const data = JSON.parse(event.body);
    const { name, email, joinMailingList } = data;

    // If user didn't opt-in, just return success
    if (!joinMailingList) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Form submitted successfully' })
      };
    }

    // Prepare form data for Campaign Monitor
    const formData = new URLSearchParams();
    formData.append('cm-name', name);
    formData.append('cm-tjdlthk-tjdlthk', email);

    // Send to Campaign Monitor
    try {
      const response = await fetch('https://www.createsend.com/t/subscribe/6B2B751B9AD088DB', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString()
      });

      if (!response.ok) {
        console.error('Campaign Monitor subscription failed:', await response.text());
      }
    } catch (error) {
      // Log error but don't fail the form submission
      console.error('Campaign Monitor error:', error);
    }

    // Return success regardless of Campaign Monitor result
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully' })
    };

  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error' })
    };
  }
};