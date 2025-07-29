import { Scissors, Sparkles, Paintbrush, Foot, Droplet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";

const serviceCategories = {
  hair: {
    icon: <Scissors className="h-8 w-8 text-primary" />,
    services: [
      { name: "Women's Haircut", price: "₹1,200", description: "Styled cut, wash, and blow-dry.", image: "https://placehold.co/100x100.png", hint: "woman haircut" },
      { name: "Men's Haircut", price: "₹800", description: "Classic cut and styling.", image: "https://placehold.co/100x100.png", hint: "man haircut" },
      { name: "Global Color", price: "₹4,500 onwards", description: "Full hair coloring with premium products.", image: "https://placehold.co/100x100.png", hint: "hair color" },
      { name: "Hair Spa", price: "₹2,500", description: "Deep conditioning treatment for smooth hair.", image: "https://placehold.co/100x100.png", hint: "hair spa" },
    ],
  },
  skin: {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    services: [
      { name: "Glow Facial", price: "₹3,000", description: "A facial for instant radiance and glow.", image: "https://placehold.co/100x100.png", hint: "woman facial" },
      { name: "Anti-Ageing Facial", price: "₹4,000", description: "Targets fine lines and wrinkles.", image: "https://placehold.co/100x100.png", hint: "skincare treatment" },
      { name: "Clean Up", price: "₹1,500", description: "Deep cleansing to remove impurities.", image: "https://placehold.co/100x100.png", hint: "skin cleansing" },
      { name: "Detan Treatment", price: "₹2,000", description: "Removes tanning and evens skin tone.", image: "https://placehold.co/100x100.png", hint: "face mask" },
    ],
  },
  nails: {
    icon: <Foot className="h-8 w-8 text-primary" />,
    services: [
      { name: "Classic Manicure", price: "₹800", description: "Nail shaping, cuticle care, and polish.", image: "https://placehold.co/100x100.png", hint: "manicure nails" },
      { name: "Classic Pedicure", price: "₹1,000", description: "Relaxing foot soak, scrub, and polish.", image: "https://placehold.co/100x100.png", hint: "pedicure spa" },
      { name: "Gel Polish", price: "₹1,200", description: "Long-lasting gel nail polish application.", image: "https://placehold.co/100x100.png", hint: "gel nails" },
      { name: "Nail Art", price: "₹500 onwards", description: "Creative and custom nail designs.", image: "https://placehold.co/100x100.png", hint: "nail art" },
    ],
  },
  makeup: {
    icon: <Paintbrush className="h-8 w-8 text-primary" />,
    services: [
      { name: "Party Makeup", price: "₹3,500", description: "Glamorous look for any occasion.", image: "https://placehold.co/100x100.png", hint: "party makeup" },
      { name: "Bridal Makeup", price: "₹20,000", description: "Complete bridal makeup with HD finish.", image: "https://placehold.co/100x100.png", hint: "bridal makeup" },
      { name: "Engagement Makeup", price: "₹10,000", description: "Elegant makeup for your special day.", image: "https://placehold.co/100x100.png", hint: "fashion makeup" },
    ],
  },
  waxing: {
    icon: <Droplet className="h-8 w-8 text-primary" />,
    services: [
      { name: "Full Arms", price: "₹500", description: "Smooth and hair-free arms.", image: "https://placehold.co/100x100.png", hint: "arm waxing" },
      { name: "Full Legs", price: "₹800", description: "Get silky smooth legs.", image: "https://placehold.co/100x100.png", hint: "leg waxing" },
      { name: "Bikini Wax", price: "₹1,500", description: "Hygienic and professional bikini waxing.", image: "https://placehold.co/100x100.png", hint: "spa treatment" },
      { name: "Full Body Wax", price: "₹3,000", description: "Complete hair removal for the whole body.", image: "https://placehold.co/100x100.png", hint: "beauty treatment" },
    ],
  },
};

type ServiceCategoryKey = keyof typeof serviceCategories;

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Services & Pricing</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive menu of services, tailored to your beauty and wellness needs.
          </p>
        </div>

        <Tabs defaultValue="hair" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-card p-2 rounded-lg">
            {Object.keys(serviceCategories).map((key) => (
              <TabsTrigger key={key} value={key} className="capitalize flex items-center gap-2">
                {serviceCategories[key as ServiceCategoryKey].icon}
                {key}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {Object.keys(serviceCategories).map((key) => (
            <TabsContent key={key} value={key} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceCategories[key as ServiceCategoryKey].services.map((service) => (
                  <Card key={service.name} className="flex flex-col">
                    <CardHeader className="flex-row gap-4 items-start">
                      <Image src={service.image} alt={service.name} width={80} height={80} className="rounded-md" data-ai-hint={service.hint} />
                      <div>
                        <CardTitle className="font-headline text-xl">{service.name}</CardTitle>
                        <CardDescription className="mt-1">{service.description}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="flex justify-between items-center mt-auto pt-0">
                      <p className="text-lg font-semibold text-primary">{service.price}</p>
                      <Button asChild>
                        <Link href="/book-appointment">Book Now</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
