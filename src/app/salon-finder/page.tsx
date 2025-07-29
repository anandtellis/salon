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
    image: "https://images.unsplash.com/photo-1599387877286-6fe185a623f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Aura Spa - Uptown",
    address: "456 Indiranagar 100ft Road, Bangalore, 560038",
    phone: "+91 80 9876 5432",
    hours: "11:00 AM - 10:00 PM",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Aura Express - Suburbs",
    address: "789 Whitefield Main Road, Bangalore, 560066",
    phone: "+91 80 1122 3344",
    hours: "10:00 AM - 8:00 PM",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d884?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.001920338781!2d77.59456267579126!3d12.971598787344515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16708b3a5a7b%3A0x6b3b0bf3a31d6837!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1716969871661!5m2!1sen!2sin" width="100%" height="100%" style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

          {/* Salon List Section */}
          <div className="lg:col-span-1 space-y-6">
            {salons.map((salon, index) => (
              <Card key={index} className="overflow-hidden">
                <Image src={salon.image} alt={salon.name} width={600} height={400} className="w-full h-40 object-cover" />
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
