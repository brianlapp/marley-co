import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Share2, Heart, Users } from "lucide-react";

const GiveawaySuccess = () => {
  useEffect(() => {
    document.title = "Entry Confirmed - Diaper Bag Giveaway | Positive Parenting Solutions";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Your giveaway entry has been confirmed! Thank you for entering our premium diaper bag giveaway.');
    }
  }, []);

  const shareText = "I just entered an amazing diaper bag giveaway! Check it out:";
  const shareUrl = window.location.origin + "/diaper-bag-giveaway";

  const handleShare = (platform: string) => {
    const encodedText = encodeURIComponent(shareText);
    const encodedUrl = encodeURIComponent(shareUrl);
    
    let shareLink = "";
    switch (platform) {
      case "facebook":
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case "twitter":
        shareLink = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
        break;
      case "pinterest":
        shareLink = `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedText}`;
        break;
    }
    
    if (shareLink) {
      window.open(shareLink, "_blank", "width=600,height=400");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
                <h1 className="text-4xl font-bold text-gray-900 mb-2">You're Entered!</h1>
                <p className="text-xl text-gray-600">Your giveaway entry has been confirmed</p>
              </div>

              <div className="bg-green-50 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold text-green-800 mb-3">What Happens Next?</h2>
                <div className="space-y-2 text-green-700">
                  <p>✓ You're officially entered in our premium diaper bag giveaway</p>
                  <p>✓ Winner will be announced on <strong>January 15th, 2025</strong></p>
                  <p>✓ We'll contact you via email if you win</p>
                  <p>✓ No purchase necessary - you're all set!</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  <Share2 className="w-5 h-5 inline mr-2" />
                  Increase Your Chances!
                </h3>
                <p className="text-gray-600 mb-4">Share with friends and family - the more parents who enter, the more we can help!</p>
                
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button
                    onClick={() => handleShare("facebook")}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Share on Facebook
                  </Button>
                  <Button
                    onClick={() => handleShare("twitter")}
                    className="bg-sky-500 hover:bg-sky-600 text-white"
                  >
                    Share on Twitter
                  </Button>
                  <Button
                    onClick={() => handleShare("pinterest")}
                    className="bg-red-600 hover:bg-red-700 text-white"
                  >
                    Share on Pinterest
                  </Button>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/diaper-bag-giveaway">
                    <Button variant="outline" className="w-full sm:w-auto">
                      <Heart className="w-4 h-4 mr-2" />
                      Back to Giveaway
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700">
                      <Users className="w-4 h-4 mr-2" />
                      Explore Our Resources
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="mt-8 text-sm text-gray-500">
                <p>Follow us for parenting tips and updates:</p>
                <p className="mt-2">
                  <a href="#" className="text-blue-600 hover:underline mx-2">Facebook</a>
                  <a href="#" className="text-blue-600 hover:underline mx-2">Instagram</a>
                  <a href="#" className="text-blue-600 hover:underline mx-2">YouTube</a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GiveawaySuccess;