import { Scissors, Sparkles, Paintbrush, Footprints, Droplet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";

const serviceCategories = {
  hair: {
    icon: <Scissors className="h-8 w-8 text-primary" />,
    services: [
      { name: "Hair Cut", price: "₹1,200", description: "Styled cut, wash, and blow-dry.", image: "https://placehold.co/600x400.png", hint: "woman haircut" },
      { name: "Ironing", price: "₹800", description: "Get sleek, straight hair.", image: "https://placehold.co/600x400.png", hint: "hair straightening" },
      { name: "Global Colouring", price: "₹4,500 onwards", description: "Full hair coloring with premium products.", image: "https://placehold.co/600x400.png", hint: "hair color" },
      { name: "Blow Dry", price: "₹500", description: "A perfect blowout for any occasion.", image: "https://placehold.co/600x400.png", hint: "hair blowdry" },
      { name: "Root Touch Up", price: "₹1,500", description: "Cover up those roots.", image: "https://placehold.co/600x400.png", hint: "hair roots" },
      { name: "Shampoo & Conditioning", price: "₹600", description: "A relaxing hair wash and conditioning.", image: "https://placehold.co/600x400.png", hint: "hair wash" },
      { name: "Head Massage", price: "₹1,000", description: "A relaxing head massage to de-stress.", image: "https://placehold.co/600x400.png", hint: "head massage" },
      { name: "Roller Setting", price: "₹1,200", description: "Get beautiful curls with roller setting.", image: "https://placehold.co/600x400.png", hint: "hair rollers" },
      { name: "Oiling", price: "₹800", description: "Nourishing oil massage for your hair.", image: "https://placehold.co/600x400.png", hint: "hair oiling" },
    ],
  },
  skin: {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    services: [
      { name: "Glow Facial", price: "₹3,000", description: "A facial for instant radiance and glow.", image: "https://placehold.co/600x400.png", hint: "glow facial" },
      { name: "Anti-Ageing Facial", price: "₹4,000", description: "Targets fine lines and wrinkles.", image: "https://placehold.co/600x400.png", hint: "anti-ageing" },
      { name: "Clean Up", price: "₹1,500", description: "Deep cleansing to remove impurities.", image: "https://placehold.co/600x400.png", hint: "face cleaning" },
      { name: "Detan Treatment", price: "₹2,000", description: "Removes tanning and evens skin tone.", image: "https://placehold.co/600x400.png", hint: "skin detan" },
    ],
  },
  nails: {
    icon: <Footprints className="h-8 w-8 text-primary" />,
    services: [
      { name: "Classic Manicure", price: "₹800", description: "Nail shaping, cuticle care, and polish.", image: "https://placehold.co/600x400.png", hint: "manicure" },
      { name: "Classic Pedicure", price: "₹1,000", description: "Relaxing foot soak, scrub, and polish.", image: "https://placehold.co/600x400.png", hint: "pedicure" },
      { name: "Gel Polish", price: "₹1,200", description: "Long-lasting gel nail polish application.", image: "https://placehold.co/600x400.png", hint: "gel polish" },
      { name: "Nail Art", price: "₹500 onwards", description: "Creative and custom nail designs.", image: "https://placehold.co/600x400.png", hint: "nail art" },
    ],
  },
  makeup: {
    icon: <Paintbrush className="h-8 w-8 text-primary" />,
    services: [
      { name: "Party Makeup", price: "₹3,500", description: "Glamorous look for any occasion.", image: "https://placehold.co/600x400.png", hint: "party makeup" },
      { name: "Bridal Makeup", price: "₹20,000", description: "Complete bridal makeup with HD finish.", image: "https://placehold.co/600x400.png", hint: "bridal makeup" },
      { name: "Engagement Makeup", price: "₹10,000", description: "Elegant makeup for your special day.", image: "https://placehold.co/600x400.png", hint: "engagement makeup" },
    ],
  },
  waxing: {
    icon: <Droplet className="h-8 w-8 text-primary" />,
    services: [
      { name: "Full Arms", price: "₹500", description: "Smooth and hair-free arms.", image: "https://placehold.co/600x400.png", hint: "arm waxing" },
      { name: "Full Legs", price: "₹800", description: "Get silky smooth legs.", image: "https://placehold.co/600x400.png", hint: "leg waxing" },
      { name: "Bikini Wax", price: "₹1,500", description: "Hygienic and professional bikini waxing.", image: "https://placehold.co/600x400.png", hint: "body waxing" },
      { name: "Full Body Wax", price: "₹3,000", description: "Complete hair removal for the whole body.", image: "https://placehold.co/600x400.png", hint: "woman body" },
    ],
  },
  beard: {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8 text-primary"
      >
        <path d="M18 15l-6-6-6 6" />
        <path d="M12 22V9" />
        <path d="M12 9a3 3 0 00-3 3v2" />
        <path d="M15 12v2a3 3 0 01-3 3" />
      </svg>
    ),
    services: [
      { name: "Beard Trim", price: "₹400", description: "Shape and trim your beard.", image: "https://placehold.co/600x400.png", hint: "beard trim" },
      { name: "Beard Colour", price: "₹1,000", description: "Color your beard to match your hair.", image: "https://placehold.co/600x400.png", hint: "beard color" },
      { name: "Beard Styling", price: "₹600", description: "Style your beard to perfection.", image: "https://placehold.co/600x400.png", hint: "beard styling" },
      { name: "Shave", price: "₹300", description: "A clean and smooth shave.", image: "https://placehold.co/600x400.png", hint: "shave" },
      { name: "Luxury Shave & Beard Spa", price: "₹1,500", description: "A complete pampering for your beard.", image: "https://placehold.co/600x400.png", hint: "luxury shave" },
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
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 bg-card p-2 rounded-lg">
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
                      <Image src={service.image} alt={service.name} width={80} height={80} className="rounded-md object-cover" data-ai-hint={service.hint} />
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
