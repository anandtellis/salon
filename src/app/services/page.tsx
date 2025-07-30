import { Scissors, Sparkles, Paintbrush, Footprints, Droplet, Layers, FlaskConical, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";

const serviceCategories = {
  'hair-cut-finish': {
    icon: <Scissors className="h-8 w-8 text-primary" />,
    title: "Hair Cut & Finish",
    services: [
      { name: "Cut and Hair Care", price: "₹1,200", description: "Precision haircut and premium hair care.", image: "https://placehold.co/80x80.png", hint: "woman haircut" },
      { name: "Shampoo & Conditioning", price: "₹600", description: "A relaxing hair wash and conditioning.", image: "https://placehold.co/80x80.png", hint: "hair wash" },
      { name: "Head Massage", price: "₹1,000", description: "A relaxing head massage to de-stress.", image: "https://placehold.co/80x80.png", hint: "head massage" },
      { name: "Beard Styling", price: "₹600", description: "Style your beard to perfection.", image: "https://placehold.co/80x80.png", hint: "beard styling" },
      { name: "Hair/Beard Colouring", price: "₹1,500", description: "Get a new look with our color experts.", image: "https://placehold.co/80x80.png", hint: "hair color" },
    ],
  },
  'hair-colour': {
    icon: <Paintbrush className="h-8 w-8 text-primary" />,
    title: "Hair Colour",
    services: [
        { name: "Hair Colour (Ammonia & Ammonia Free)", price: "₹4,500", description: "Vibrant colors, gentle on your hair.", image: "https://placehold.co/80x80.png", hint: "hair color" },
        { name: "Hi-Lites", price: "₹3,000", description: "Add dimension with beautiful highlights.", image: "https://placehold.co/80x80.png", hint: "hair highlights" },
        { name: "Beard Colour", price: "₹1,000", description: "Color your beard to match your hair.", image: "https://placehold.co/80x80.png", hint: "beard color" },
    ],
  },
  'hair-texture': {
    icon: <Layers className="h-8 w-8 text-primary" />,
    title: "Hair Texture",
    services: [
        { name: "Straightening", price: "₹5,500", description: "For manageable, smooth hair.", image: "https://placehold.co/80x80.png", hint: "hair smoothening" },
        { name: "Smoothening", price: "₹5,500", description: "For manageable, smooth hair.", image: "https://placehold.co/80x80.png", hint: "hair smoothening" },
        { name: "Rebonding", price: "₹6,000", description: "For straight, sleek hair.", image: "https://placehold.co/80x80.png", hint: "hair rebonding" },
        { name: "Perming", price: "₹5,000", description: "Get natural-looking curls.", image: "https://placehold.co/80x80.png", hint: "hair perming" },
    ],
  },
  'hair-treatments': {
    icon: <FlaskConical className="h-8 w-8 text-primary" />,
    title: "Hair Treatments",
    services: [
        { name: "Hair Spa", price: "₹2,500", description: "Nourishing hair spa for revitalization.", image: "https://placehold.co/80x80.png", hint: "hair spa" },
        { name: "Advanced Moisturising", price: "₹3,000", description: "Intense hydration for dry hair.", image: "https://placehold.co/80x80.png", hint: "hair hydration" },
        { name: "Scalp Treatments", price: "₹2,200", description: "For a healthy, clean scalp.", image: "https://placehold.co/80x80.png", hint: "scalp treatment" },
        { name: "Colour Protection", price: "₹2,800", description: "Maintain your hair color's vibrancy.", image: "https://placehold.co/80x80.png", hint: "color protection" },
    ],
  },
  skin: {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: "Skin Care",
    services: [
      { name: "Clean Ups", price: "₹1,500", description: "Deep cleansing to remove impurities.", image: "https://placehold.co/80x80.png", hint: "face cleaning" },
      { name: "Facials", price: "₹3,000 onwards", description: "A facial for instant radiance and glow.", image: "https://placehold.co/80x80.png", hint: "glow facial" },
      { name: "Organic Treatments", price: "₹3,500", description: "Skin care with natural and organic products.", image: "https://placehold.co/80x80.png", hint: "organic skincare" },
      { name: "Detan Treatment", price: "₹2,000", description: "Removes tanning and evens skin tone.", image: "https://placehold.co/80x80.png", hint: "skin detan" },
    ],
  },
  nails: {
    icon: <Footprints className="h-8 w-8 text-primary" />,
    title: "Hands & Feet",
    services: [
      { name: "Manicure", price: "₹800", description: "Nail shaping, cuticle care, and polish.", image: "https://placehold.co/80x80.png", hint: "manicure" },
      { name: "Pedicure", price: "₹1,000", description: "Relaxing foot soak, scrub, and polish.", image: "https://placehold.co/80x80.png", hint: "pedicure" },
      { name: "Gel Polish", price: "₹1,200", description: "Long-lasting gel nail polish application.", image: "https://placehold.co/80x80.png", hint: "gel polish" },
      { name: "Nail Art", price: "₹500 onwards", description: "Creative and custom nail designs.", image: "https://placehold.co/80x80.png", hint: "nail art" },
    ],
  },
  makeup: {
    icon: <Gem className="h-8 w-8 text-primary" />,
    title: "Makeup",
    services: [
      { name: "Party Makeup", price: "₹3,500", description: "Glamorous look for any occasion.", image: "https://placehold.co/80x80.png", hint: "party makeup" },
      { name: "Bridal Makeup", price: "₹20,000", description: "Complete bridal makeup with HD finish.", image: "https://placehold.co/80x80.png", hint: "bridal makeup" },
      { name: "Engagement Makeup", price: "₹10,000", description: "Elegant makeup for your special day.", image: "https://placehold.co/80x80.png", hint: "engagement makeup" },
    ],
  },
  waxing: {
    icon: <Droplet className="h-8 w-8 text-primary" />,
    title: "Waxing",
    services: [
      { name: "Full Arms", price: "₹500", description: "Smooth and hair-free arms.", image: "https://placehold.co/80x80.png", hint: "arm waxing" },
      { name: "Full Legs", price: "₹800", description: "Get silky smooth legs.", image: "https://placehold.co/80x80.png", hint: "leg waxing" },
      { name: "Bikini Wax", price: "₹1,500", description: "Hygienic and professional bikini waxing.", image: "https://placehold.co/80x80.png", hint: "body waxing" },
      { name: "Full Body Wax", price: "₹3,000", description: "Complete hair removal for the whole body.", image: "https://placehold.co/80x80.png", hint: "woman body" },
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

        <Tabs defaultValue="hair-cut-finish" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 bg-card p-2 rounded-lg h-auto">
            {Object.keys(serviceCategories).map((key) => (
              <TabsTrigger key={key} value={key} className="capitalize flex flex-col sm:flex-row items-center gap-2 h-full py-2">
                {serviceCategories[key as ServiceCategoryKey].icon}
                <span className="text-center sm:text-left">{serviceCategories[key as ServiceCategoryKey].title}</span>
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
