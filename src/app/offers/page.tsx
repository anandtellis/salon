import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Ticket } from "lucide-react";

const specialOffers = [
  {
    title: "20% off on Hair Spa",
    description: "Revitalize your hair with our nourishing spa treatments. Offer valid for a limited time.",
    image: "https://placehold.co/600x400.png",
    hint: "hair treatment"
  },
  {
    title: "Bridal Combo @ ₹25,000",
    description: "Look your absolute best on your special day with our all-inclusive bridal package.",
    image: "https://placehold.co/600x400.png",
    hint: "bride makeup"
  },
  {
    title: "Manicure + Pedicure Combo",
    description: "Get a classic manicure and pedicure combo for just ₹1,500. Perfect pampering!",
    image: "https://placehold.co/600x400.png",
    hint: "pedicure manicure"
  },
  {
    title: "Student Discount: 15% Off",
    description: "Show your student ID and get a flat 15% discount on all our services. T&C apply.",
    image: "https://placehold.co/600x400.png",
    hint: "student life"
  },
  {
    title: "Festive Glow Package",
    description: "Get ready for the festive season with our glow package, including facial and detan.",
    image: "https://placehold.co/600x400.png",
    hint: "festival celebration"
  },
  {
    title: "Corporate Wellness Offer",
    description: "Special discounts for corporate clients. Contact us for bulk bookings and packages.",
    image: "https://placehold.co/600x400.png",
    hint: "corporate team"
  },
];

export default function OffersPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Special Offers & Deals</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Indulge in our exclusive offers and enjoy premium services at unbeatable prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialOffers.map((offer, index) => (
            <Card key={index} className="flex flex-col overflow-hidden shadow-lg group">
              <div className="relative">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={offer.hint}
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground p-2 rounded-full shadow-lg">
                  <Ticket className="h-6 w-6" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{offer.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{offer.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/book-appointment">Grab Offer</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
