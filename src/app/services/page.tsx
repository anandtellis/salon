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
      { name: "Hair Cut", price: "INR 1,000", description: "Precision haircut to suit your style.", image: "https://images.unsplash.com/photo-1595152772252-454817169007?q=80&w=80&h=80&fit=crop", hint: "woman haircut" },
      { name: "Ironing", price: "INR 800", description: "Sleek and straight hair styling.", image: "https://placehold.co/80x80.png", hint: "hair ironing" },
      { name: "Global Colouring", price: "INR 4,000", description: "Full hair coloring from root to tip.", image: "https://placehold.co/80x80.png", hint: "hair coloring" },
      { name: "Blow Dry", price: "INR 500", description: "Professional blowout for voluminous hair.", image: "https://placehold.co/80x80.png", hint: "hair blowdry" },
      { name: "Root Touch Up", price: "INR 1,500", description: "Cover your roots with a touch-up.", image: "https://placehold.co/80x80.png", hint: "hair roots" },
      { name: "Shampoo & Conditioning", price: "INR 600", description: "A relaxing hair wash and conditioning.", image: "https://placehold.co/80x80.png", hint: "hair wash" },
      { name: "Head Massage", price: "INR 1,000", description: "A relaxing head massage to de-stress.", image: "https://placehold.co/80x80.png", hint: "head massage" },
      { name: "Roller Setting", price: "INR 1,200", description: "Get bouncy curls with roller setting.", image: "https://placehold.co/80x80.png", hint: "hair rollers" },
      { name: "Oiling", price: "INR 700", description: "Nourishing oil massage for your hair.", image: "https://placehold.co/80x80.png", hint: "hair oiling" },
    ],
  },
  'hair-colour': {
    icon: <Paintbrush className="h-8 w-8 text-primary" />,
    title: "Hair Colour",
    services: [
        { name: "Hair Colour (Ammonia & Ammonia Free)", price: "INR 4,500", description: "Vibrant colors, gentle on your hair.", image: "https://placehold.co/80x80.png", hint: "hair color" },
        { name: "Hi-Lites", price: "INR 3,000", description: "Add dimension with beautiful highlights.", image: "https://placehold.co/80x80.png", hint: "hair highlights" },
        { name: "Beard Colour", price: "INR 1,000", description: "Color your beard to match your hair.", image: "https://placehold.co/80x80.png", hint: "beard color" },
    ],
  },
  'hair-texture': {
    icon: <Layers className="h-8 w-8 text-primary" />,
    title: "Hair Texture",
    services: [
        { name: "Rebonding", price: "INR 6,000", description: "For straight, sleek hair.", image: "https://placehold.co/80x80.png", hint: "hair rebonding" },
        { name: "Perming", price: "INR 5,000", description: "Get natural-looking curls.", image: "https://placehold.co/80x80.png", hint: "hair perming" },
        { name: "Keratin", price: "INR 7,000", description: "Smooth and frizz-free hair treatment.", image: "https://placehold.co/80x80.png", hint: "keratin treatment" },
        { name: "Smoothening", price: "INR 5,500", description: "For manageable, smooth hair.", image: "https://placehold.co/80x80.png", hint: "hair smoothening" },
    ],
  },
  'hair-treatments': {
    icon: <FlaskConical className="h-8 w-8 text-primary" />,
    title: "Hair Treatments",
    services: [
        { name: "Spa Treatments", price: "INR 2,500", description: "Nourishing hair spa for revitalization.", image: "https://placehold.co/80x80.png", hint: "hair spa" },
        { name: "Volumizing", price: "INR 2,000", description: "Add volume to limp and fine hair.", image: "https://placehold.co/80x80.png", hint: "hair volume" },
        { name: "Advanced Hair Moisturising", price: "INR 3,000", description: "Intense hydration for dry hair.", image: "https://placehold.co/80x80.png", hint: "hair hydration" },
        { name: "Colour Protection", price: "INR 2,800", description: "Maintain your hair color's vibrancy.", image: "https://placehold.co/80x80.png", hint: "color protection" },
        { name: "Scalp Treatments", price: "INR 2,200", description: "For a healthy, clean scalp.", image: "https://placehold.co/80x80.png", hint: "scalp treatment" },
    ],
  },
  skin: {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: "Skin Care",
    services: [
      { name: "Clean Ups", price: "INR 1,500", description: "Deep cleansing to remove impurities.", image: "https://placehold.co/80x80.png", hint: "face cleaning" },
      { name: "Facials", price: "INR 3,000 onwards", description: "A facial for instant radiance and glow.", image: "https://placehold.co/80x80.png", hint: "glow facial" },
      { name: "Organic Treatments", price: "INR 3,500", description: "Skin care with natural and organic products.", image: "https://placehold.co/80x80.png", hint: "organic skincare" },
      { name: "Detan Treatment", price: "INR 2,000", description: "Removes tanning and evens skin tone.", image: "https://placehold.co/80x80.png", hint: "skin detan" },
    ],
  },
  'hands-feet': {
    icon: <Footprints className="h-8 w-8 text-primary" />,
    title: "Hands & Feet",
    services: [
      { name: "Manicure", price: "INR 800", description: "Nail shaping, cuticle care, and polish.", image: "https://placehold.co/80x80.png", hint: "manicure" },
      { name: "Pedicure", price: "INR 1,000", description: "Relaxing foot soak, scrub, and polish.", image: "https://placehold.co/80x80.png", hint: "pedicure" },
      { name: "Gel Polish", price: "INR 1,200", description: "Long-lasting gel nail polish application.", image: "https://placehold.co/80x80.png", hint: "gel polish" },
      { name: "Nail Art", price: "INR 500 onwards", description: "Creative and custom nail designs.", image: "https://placehold.co/80x80.png", hint: "nail art" },
    ],
  },
  makeup: {
    icon: <Gem className="h-8 w-8 text-primary" />,
    title: "Makeup",
    services: [
      { name: "Party Makeup", price: "INR 3,500", description: "Glamorous look for any occasion.", image: "https://placehold.co/80x80.png", hint: "party makeup" },
      { name: "Bridal Makeup", price: "INR 20,000", description: "Complete bridal makeup with HD finish.", image: "https://placehold.co/80x80.png", hint: "bridal makeup" },
      { name: "Engagement Makeup", price: "INR 10,000", description: "Elegant makeup for your special day.", image: "https://placehold.co/80x80.png", hint: "engagement makeup" },
    ],
  },
  waxing: {
    icon: <Droplet className="h-8 w-8 text-primary" />,
    title: "Waxing",
    services: [
      { name: "Full Arms", price: "INR 500", description: "Smooth and hair-free arms.", image: "https://placehold.co/80x80.png", hint: "arm waxing" },
      { name: "Full Legs", price: "INR 800", description: "Get silky smooth legs.", image: "https://placehold.co/80x80.png", hint: "leg waxing" },
      { name: "Bikini Wax", price: "INR 1,500", description: "Hygienic and professional bikini waxing.", image: "https://placehold.co/80x80.png", hint: "body waxing" },
      { name: "Full Body Wax", price: "INR 3,000", description: "Complete hair removal for the whole body.", image: "https://placehold.co/80x80.png", hint: "woman body" },
    ],
  },
  'beard-grooming': {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary"><path d="M12 2v10"/><path d="M12 12l4 4"/><path d="M12 12l-4 4"/><path d="M12 12H4.5A2.5 2.5 0 0 1 2 9.5V8a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v1.5a2.5 2.5 0 0 1-2.5 2.5H12z"/></svg>,
    title: "Beard Grooming",
    services: [
      { name: "Beard Trim", price: "INR 400", description: "Keep your beard neat and tidy.", image: "https://placehold.co/80x80.png", hint: "beard trimming" },
      { name: "Beard Colour", price: "INR 1,000", description: "Color your beard to match your hair.", image: "https://placehold.co/80x80.png", hint: "beard coloring" },
      { name: "Beard Styling", price: "INR 600", description: "Style your beard to perfection.", image: "https://placehold.co/80x80.png", hint: "beard styling" },
      { name: "Shave", price: "INR 500", description: "A clean and smooth shave.", image: "https://placehold.co/80x80.png", hint: "shaving" },
      { name: "Luxury Shave & Beard Spa", price: "INR 1,800", description: "The ultimate pampering for your beard.", image: "https://placehold.co/80x80.png", hint: "beard spa" },
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
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 lg:grid-cols-10 bg-card p-2 rounded-lg h-auto">
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
