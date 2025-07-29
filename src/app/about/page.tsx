import Image from "next/image";
import { Award, Gem, HeartHandshake } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const teamMembers = [
  { name: "Alisha Verma", role: "Lead Stylist & Founder", image: "https://placehold.co/400x400.png", hint: "woman portrait" },
  { name: "Rohan Kapoor", role: "Senior Hairdresser", image: "https://placehold.co/400x400.png", hint: "man portrait" },
  { name: "Priya Singh", role: "Lead Esthetician", image: "https://placehold.co/400x400.png", hint: "woman face" },
  { name: "Sameer Khan", role: "Nail Art Specialist", image: "https://placehold.co/400x400.png", hint: "male model" },
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Introduction Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-6">Welcome to Aura Salon & Spa</h1>
            <p className="text-lg text-muted-foreground mb-4">
              Founded in 2010, Aura Salon & Spa was born from a passion for beauty and wellness. We believe that self-care is not a luxury, but a necessity for a balanced life. Our space is designed to be a sanctuary where you can escape the everyday and indulge in a world of pampering.
            </p>
            <p className="text-lg text-muted-foreground">
              We are a team of dedicated professionals committed to providing you with exceptional service, using only the highest quality products. Our goal is to ensure that every visit leaves you feeling refreshed, confident, and beautiful.
            </p>
          </div>
          <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-lg">
            <Image src="https://placehold.co/600x700.png" alt="Luxurious salon interior" width={600} height={700} className="w-full h-full object-cover" data-ai-hint="salon interior" />
          </div>
        </section>

        {/* Mission and Vision Section */}
        <section className="py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Card>
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  <HeartHandshake className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">To provide an unparalleled salon and spa experience that uplifts our clients' spirits, enhances their natural beauty, and promotes well-being in a welcoming and luxurious environment.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  <Gem className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">To be the most trusted and sought-after destination for beauty and wellness in the region, known for our innovation, expertise, and commitment to client satisfaction.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Passion, Professionalism, Quality, Integrity, and a Client-First approach are the pillars that guide every aspect of our business and services.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-headline text-center font-bold">Meet Our Experts</h2>
          <p className="mt-4 text-center text-muted-foreground max-w-xl mx-auto">Our talented team of stylists and therapists are here to bring your vision to life.</p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center p-4">
                 <Avatar className="w-32 h-32 mx-auto shadow-md">
                    <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.hint} />
                    <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <CardHeader>
                  <CardTitle className="font-headline">{member.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
