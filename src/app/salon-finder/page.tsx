import { MapPin, Phone, Clock, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";

const salons = [
  {
    name: "Aura Salon - Downtown",
    address: "123 MG Road, Bangalore, 560001",
    phone: "+91 80 1234 5678",
    hours: "10:00 AM - 9:00 PM",
    image: "https://placehold.co/600x400.png",
    hint: "modern salon"
  },
  {
    name: "Aura Spa - Uptown",
    address: "456 Indiranagar 100ft Road, Bangalore, 560038",
    phone: "+91 80 9876 5432",
    hours: "11:00 AM - 10:00 PM",
    image: "https://placehold.co/600x400.png",
    hint: "spa interior"
  },
  {
    name: "Aura Express - Suburbs",
    address: "789 Whitefield Main Road, Bangalore, 560066",
    phone: "+91 80 1122 3344",
    hours: "10:00 AM - 8:00 PM",
    image: "https://placehold.co/600x400.png",
    hint: "beauty salon"
  },
];

export default function SalonFinderPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Find an Aura Salon Near You</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Enter your city or pincode to find the nearest Aura Salon & Spa.
          </p>
          <div className="mt-8 max-w-xl mx-auto">
            <form className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by city or pincode..."
                className="w-full pl-12 h-12 text-lg"
              />
              <Button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2">
                Find
              </Button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2 rounded-lg overflow-hidden shadow-lg h-96 lg:h-full">
            <div className="bg-muted w-full h-full flex items-center justify-center">
              <p className="text-muted-foreground">Map Placeholder</p>
            </div>
          </div>

          {/* Salon List Section */}
          <div className="lg:col-span-1 space-y-6">
            {salons.map((salon, index) => (
              <Card key={index} className="overflow-hidden">
                <Image src={salon.image} alt={salon.name} width={600} height={400} className="w-full h-40 object-cover" data-ai-hint={salon.hint} />
                <CardHeader>
                  <CardTitle className="font-headline">{salon.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">{salon.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">{salon.phone}</p>
                  </div>
                   <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">{salon.hours}</p>
                  </div>
                  <Button asChild className="w-full mt-4">
                    <Link href="/book-appointment">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
