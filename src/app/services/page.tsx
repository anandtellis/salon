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
      { name: "Women's Haircut", price: "₹1,200", description: "Styled cut, wash, and blow-dry.", image: "https://images.unsplash.com/photo-1522337360788-818e93aa7e0e?q=80&w=2070&auto=format&fit=crop", hint: "woman haircut" },
      { name: "Men's Haircut", price: "₹800", description: "Classic cut and styling.", image: "https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=1887&auto=format&fit=crop", hint: "man haircut" },
      { name: "Global Color", price: "₹4,500 onwards", description: "Full hair coloring with premium products.", image: "https://images.unsplash.com/photo-1605980442974-6a2f96d274a6?q=80&w=1887&auto=format&fit=crop", hint: "hair color" },
      { name: "Hair Spa", price: "₹2,500", description: "Deep conditioning treatment for smooth hair.", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1887&auto=format&fit=crop", hint: "hair spa" },
    ],
  },
  skin: {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    services: [
      { name: "Glow Facial", price: "₹3,000", description: "A facial for instant radiance and glow.", image: "https://images.unsplash.com/photo-1616394584738-65a5231b696f?q=80&w=1887&auto=format&fit=crop", hint: "glow facial" },
      { name: "Anti-Ageing Facial", price: "₹4,000", description: "Targets fine lines and wrinkles.", image: "https://images.unsplash.com/photo-1512290923902-8a9f31c23675?q=80&w=1887&auto=format&fit=crop", hint: "anti-ageing" },
      { name: "Clean Up", price: "₹1,500", description: "Deep cleansing to remove impurities.", image: "https://images.unsplash.com/photo-1556228852-6d45a337691a?q=80&w=1887&auto=format&fit=crop", hint: "face cleaning" },
      { name: "Detan Treatment", price: "₹2,000", description: "Removes tanning and evens skin tone.", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop", hint: "skin detan" },
    ],
  },
  nails: {
    icon: <Footprints className="h-8 w-8 text-primary" />,
    services: [
      { name: "Classic Manicure", price: "₹800", description: "Nail shaping, cuticle care, and polish.", image: "https://images.unsplash.com/photo-1522338242285-186ba4a3d746?q=80&w=2070&auto=format&fit=crop", hint: "manicure" },
      { name: "Classic Pedicure", price: "₹1,000", description: "Relaxing foot soak, scrub, and polish.", image: "https://images.unsplash.com/photo-1519491016104-e25a7c3d20d4?q=80&w=2070&auto=format&fit=crop", hint: "pedicure" },
      { name: "Gel Polish", price: "₹1,200", description: "Long-lasting gel nail polish application.", image: "https://images.unsplash.com/photo-1615885257924-6d15a513c18b?q=80&w=1887&auto=format&fit=crop", hint: "gel polish" },
      { name: "Nail Art", price: "₹500 onwards", description: "Creative and custom nail designs.", image: "https://images.unsplash.com/photo-1604337438491-3e4b76a77e8a?q=80&w=1887&auto=format&fit=crop", hint: "nail art" },
    ],
  },
  makeup: {
    icon: <Paintbrush className="h-8 w-8 text-primary" />,
    services: [
      { name: "Party Makeup", price: "₹3,500", description: "Glamorous look for any occasion.", image: "https://images.unsplash.com/photo-1596704017254-97c11a05211a?q=80&w=1887&auto=format&fit=crop", hint: "party makeup" },
      { name: "Bridal Makeup", price: "₹20,000", description: "Complete bridal makeup with HD finish.", image: "https://images.unsplash.com/photo-1588051221629-637315582736?q=80&w=1887&auto=format&fit=crop", hint: "bridal makeup" },
      { name: "Engagement Makeup", price: "₹10,000", description: "Elegant makeup for your special day.", image: "https://images.unsplash.com/photo-1595352693833-2ade9b0f1cc8?q=80&w=1887&auto=format&fit=crop", hint: "engagement makeup" },
    ],
  },
  waxing: {
    icon: <Droplet className="h-8 w-8 text-primary" />,
    services: [
      { name: "Full Arms", price: "₹500", description: "Smooth and hair-free arms.", image: "https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=2073&auto=format&fit=crop", hint: "arm waxing" },
      { name: "Full Legs", price: "₹800", description: "Get silky smooth legs.", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1887&auto=format&fit=crop", hint: "leg waxing" },
      { name: "Bikini Wax", price: "₹1,500", description: "Hygienic and professional bikini waxing.", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop", hint: "body waxing" },
      { name: "Full Body Wax", price: "₹3,000", description: "Complete hair removal for the whole body.", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop", hint: "woman body" },
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
      { name: "Beard Trim", price: "₹400", description: "Shape and trim your beard.", image: "https://images.unsplash.com/photo-1622288432454-2415c8a1b6c7?q=80&w=1887&auto=format&fit=crop", hint: "beard trim" },
      { name: "Beard Colour", price: "₹1,000", description: "Color your beard to match your hair.", image: "https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=1887&auto=format&fit=crop", hint: "beard color" },
      { name: "Beard Styling", price: "₹600", description: "Style your beard to perfection.", image: "https://images.unsplash.com/photo-1594751543129-97ae1aa2a3ca?q=80&w=1887&auto=format&fit=crop", hint: "beard styling" },
      { name: "Shave", price: "₹300", description: "A clean and smooth shave.", image: "https://images.unsplash.com/photo-1531261356499-2a96a383e29f?q=80&w=1887&auto=format&fit=crop", hint: "shave" },
      { name: "Luxury Shave & Beard Spa", price: "₹1,500", description: "A complete pampering for your beard.", image: "https://images.unsplash.com/photo-1596728073243-91a5e1a74822?q=80&w=1887&auto=format&fit=crop", hint: "luxury shave" },
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
