"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
  { src: "https://placehold.co/600x800.png", alt: "Elegant bridal makeup", hint: "bridal makeup" },
  { src: "https://placehold.co/600x800.png", alt: "Intricate nail art design", hint: "nail art" },
  { src: "https://placehold.co/600x800.png", alt: "Stylish modern haircut", hint: "woman haircut" },
  { src: "https://placehold.co/600x800.png", alt: "Close-up of a flawless makeup look", hint: "fashion makeup" },
  { src: "https://placehold.co/600x800.png", alt: "Beautiful balayage hair color", hint: "hair coloring" },
  { src: "https://placehold.co/600x800.png", alt: "Creative gel polish on nails", hint: "gel nails" },
  { src: "https://placehold.co/600x800.png", alt: "Bride with a traditional look", hint: "indian bride" },
  { src: "https://placehold.co/600x800.png", alt: "Stunning party makeup", hint: "glamour makeup" },
  { src: "https://placehold.co/600x800.png", alt: "A relaxing spa environment", hint: "spa room" },
  { src: "https://placehold.co/600x800.png", alt: "Client getting a facial treatment", hint: "facial treatment" },
  { src: "https://placehold.co/600x800.png", alt: "A short and chic bob haircut", hint: "bob haircut" },
  { src: "https://placehold.co/600x800.png", alt: "French manicure with a twist", hint: "french manicure" },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Gallery</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the artistry and transformations at Aura Salon & Spa.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={800}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                data-ai-hint={image.hint}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-lg text-center p-2">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-3xl p-0 border-0">
            {selectedImage && (
              <Image
                src={selectedImage}
                alt="Selected gallery image"
                width={800}
                height={1000}
                className="w-full h-auto object-contain rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
