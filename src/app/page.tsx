
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const services = [
  { name: "Haircut", image: "https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxoYWlyY3V0fGVufDB8fHx8MTc1Mzg3MzA3Mnww&ixlib=rb-4.1.0&q=80&w=1080", hint: "stylish haircut" },
  { name: "Nails", image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxuYWlsc3xlbnwwfHx8fDE3NTM4NzMxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080", hint: "manicure nails" },
  { name: "Bridal", image: "https://placehold.co/800x800.png", hint: "bridal makeup" },
  { name: "Skin", image: "https://placehold.co/800x800.png", hint: "skin care" },
  { name: "Makeup", image: "https://placehold.co/800x800.png", hint: "makeup brushes" },
];

const offers = [
  { title: "20% Off Hair Spa", description: "Rejuvenate your hair with our premium spa treatment.", image: "https://placehold.co/600x400.png", hint: "hair spa" },
  { title: "Bridal Combo @ INR 25,000", description: "Complete bridal package for your special day.", image: "https://placehold.co/600x400.png", hint: "bride" },
  { title: "Flat 15% Off on Facials", description: "Get a glowing skin with our range of facials.", image: "https://placehold.co/600x400.png", hint: "facial treatment" },
];

const testimonials = [
  { name: "Priya Sharma", role: "Happy Customer", avatar: "https://placehold.co/100x100.png", hint: "woman portrait", text: "Aura Salon is my go-to place for all things beauty. The staff is incredibly talented and professional. I always leave feeling amazing!" },
  { name: "Anjali Mehta", role: "Loyal Client", avatar: "https://placehold.co/100x100.png", hint: "woman face", text: "The bridal makeup I got done here was flawless. It lasted the whole day and I got so many compliments. Highly recommend them!" },
  { name: "Rina Das", role: "Regular Visitor", avatar: "https://placehold.co/100x100.png", hint: "portrait smiling", text: "I love the calming atmosphere at Aura. It's a perfect escape from the city buzz. Their nail art is simply the best in town." },
  { name: "Sunita Rao", role: "New Customer", avatar: "https://placehold.co/100x100.png", hint: "person smiling", text: "First time at Aura and it was a fantastic experience. The haircut was exactly what I wanted. The stylist really listened to me." },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        <Image src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop" alt="Modern and stylish salon interior" layout="fill" objectFit="cover" className="absolute z-0" data-ai-hint="salon interior" />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white drop-shadow-lg">
            Your Beauty, Our Passion.
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-white/90 drop-shadow-md">
            Step into a world of relaxation and rejuvenation. We are dedicated to making you look and feel your absolute best.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/book-appointment">Book Now</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/salon-finder">Find Salon</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Highlights Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline text-center font-bold">Our Services</h2>
          <p className="mt-4 text-center text-muted-foreground max-w-xl mx-auto">Explore our wide range of services designed to pamper you from head to toe.</p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
            {services.map((service) => (
              <div key={service.name} className="group text-center">
                <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden shadow-lg transform transition-transform duration-300 group-hover:scale-105">
                  <Image src={service.image} alt={service.name} layout="fill" objectFit="cover" data-ai-hint={service.hint} />
                </div>
                <h3 className="mt-4 text-lg font-headline font-semibold">{service.name}</h3>
              </div>
            ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild variant="link" className="text-primary">
              <Link href="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Offers Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline text-center font-bold">Featured Offers</h2>
          <p className="mt-4 text-center text-muted-foreground max-w-xl mx-auto">Don't miss out on our special deals and packages to get more value.</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {offers.map((offer) => (
              <Card key={offer.title} className="overflow-hidden group">
                <Image src={offer.image} alt={offer.title} width={600} height={400} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={offer.hint} />
                <CardHeader>
                  <CardTitle className="font-headline">{offer.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{offer.description}</p>
                  <Button asChild variant="outline">
                    <Link href="/offers">Grab Offer</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline text-center font-bold">What Our Clients Say</h2>
          <p className="mt-4 text-center text-muted-foreground max-w-xl mx-auto">We are proud of our happy clients and their kind words.</p>
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full max-w-4xl mx-auto mt-12"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
                        <Avatar className="w-20 h-20">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                        <div className="font-semibold">
                          <p className="font-headline">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </div>
  );
}
