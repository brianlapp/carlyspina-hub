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
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <img
                src="https://d.pr/i/J0LM26"
                alt="Owner"
                className="rounded-lg w-full md:w-2/3 object-cover shadow-lg h-[400px]"
              />
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;