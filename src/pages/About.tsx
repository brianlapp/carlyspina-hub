import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-earth-800 mb-8 text-center">About Us</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-earth-700">Meet Our Owner</CardTitle>
            <CardDescription>Dedicated to holistic healing and wellness</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="grid grid-cols-2 gap-4 w-full md:w-2/3">
                  <img
                    src="/brianlapp/carlyspina-hub/images/image_50736641.JPG"
                    alt="Owner Image 1"
                    className="rounded-lg w-full h-[200px] object-cover shadow-lg"
                  />
                  <img
                    src="/brianlapp/carlyspina-hub/images/image_50736641 (1).JPG"
                    alt="Owner Image 2"
                    className="rounded-lg w-full h-[200px] object-cover shadow-lg"
                  />
                  <img
                    src="/brianlapp/carlyspina-hub/images/image_50736641 (2).JPG"
                    alt="Owner Image 3"
                    className="rounded-lg w-full h-[200px] object-cover shadow-lg"
                  />
                  <img
                    src="/brianlapp/carlyspina-hub/images/image_50736641 (3).JPG"
                    alt="Owner Image 4"
                    className="rounded-lg w-full h-[200px] object-cover shadow-lg"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-sage-700 leading-relaxed">
                    With over a decade of experience in holistic healing, our owner brings a wealth of knowledge
                    and expertise to every session. Combining traditional techniques with modern approaches,
                    we create personalized healing experiences for each client.
                  </p>
                  <p className="text-sage-700 leading-relaxed">
                    Our commitment to holistic wellness extends beyond individual sessions. We believe in
                    empowering our clients with knowledge and techniques they can use in their daily lives
                    to maintain balance and well-being.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;