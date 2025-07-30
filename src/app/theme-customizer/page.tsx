
"use client";

import { useState, useEffect } from "react";
import { Paintbrush, Type } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

const themes = [
  {
    name: "Aura (Default)",
    id: "aura",
    colors: {
      "--background": "0 100% 98%",
      "--foreground": "316 43% 21%",
      "--card": "0 57% 94%",
      "--card-foreground": "316 43% 21%",
      "--popover": "0 57% 94%",
      "--popover-foreground": "316 43% 21%",
      "--primary": "352 33% 57%",
      "--primary-foreground": "316 43% 11%",
      "--secondary": "240 67% 94%",
      "--muted": "240 67% 94%",
      "--accent": "352 33% 67%",
      "--border": "0 57% 89%",
      "--input": "0 57% 89%",
      "--ring": "352 33% 57%",
    },
  },
  {
    name: "Forest",
    id: "forest",
    colors: {
      "--background": "120 10% 97%",
      "--foreground": "120 25% 15%",
      "--card": "120 10% 92%",
      "--primary": "140 40% 45%",
      "--secondary": "130 20% 85%",
      "--muted": "130 20% 90%",
      "--accent": "140 40% 55%",
      "--border": "120 10% 85%",
      "--input": "120 10% 85%",
      "--ring": "140 40% 45%",
    },
  },
  {
    name: "Ocean",
    id: "ocean",
    colors: {
      "--background": "210 30% 98%",
      "--foreground": "220 40% 20%",
      "--card": "210 30% 94%",
      "--primary": "210 70% 55%",
      "--secondary": "200 50% 90%",
      "--muted": "200 50% 94%",
      "--accent": "210 70% 65%",
      "--border": "210 30% 88%",
      "--input": "210 30% 88%",
      "--ring": "210 70% 55%",
    },
  },
  {
    name: "Sunset",
    id: "sunset",
    colors: {
      "--background": "30 60% 98%",
      "--foreground": "20 40% 20%",
      "--card": "30 60% 94%",
      "--primary": "15 80% 60%",
      "--secondary": "40 70% 90%",
      "--muted": "40 70% 94%",
      "--accent": "15 80% 70%",
      "--border": "30 60% 88%",
      "--input": "30 60% 88%",
      "--ring": "15 80% 60%",
    },
  },
  {
    name: "Lavender",
    id: "lavender",
    colors: {
        "--background": "260 40% 98%",
        "--foreground": "260 30% 25%",
        "--card": "260 40% 94%",
        "--primary": "250 50% 60%",
        "--secondary": "250 30% 92%",
        "--muted": "250 30% 95%",
        "--accent": "250 50% 70%",
        "--border": "260 40% 88%",
        "--input": "260 40% 88%",
        "--ring": "250 50% 60%",
    },
  },
];

const fonts = [
  { name: "Playfair Display & PT Sans", value: "'Playfair Display', serif", body: "'PT Sans', sans-serif", href: "https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" },
  { name: "Lato & Merriweather", value: "'Merriweather', serif", body: "'Lato', sans-serif", href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Merriweather:wght@400;700&display=swap" },
  { name: "Montserrat & Open Sans", value: "'Montserrat', sans-serif", body: "'Open Sans', sans-serif", href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Open+Sans:wght@400;700&display=swap" },
  { name: "Roboto Slab & Roboto", value: "'Roboto Slab', serif", body: "'Roboto', sans-serif", href: "https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&family=Roboto:wght@400;700&display=swap" },
  { name: "Cormorant Garamond & Proza Libre", value: "'Cormorant Garamond', serif", body: "'Proza Libre', sans-serif", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&family=Proza+Libre:wght@400;700&display=swap" },
];

export default function ThemeCustomizerPage() {
  const [activeTheme, setActiveTheme] = useState(themes[0]);
  const [activeFont, setActiveFont] = useState(fonts[0]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // On mount, apply the default theme from state
    applyTheme(themes[0]);
    applyFont(fonts[0]);
  }, []);

  const applyTheme = (theme: typeof themes[0]) => {
    setActiveTheme(theme);
    if (typeof window !== "undefined") {
      const root = document.documentElement;
      Object.entries(theme.colors).forEach(([key, value]) => {
        root.style.setProperty(key, value);
      });
    }
  };

  const applyFont = (font: typeof fonts[0]) => {
      setActiveFont(font);
      if (typeof window !== "undefined") {
          // Remove existing font links
          document.querySelectorAll('link[href*="fonts.googleapis.com"]').forEach(e => e.remove());
          
          // Add new font link
          const link = document.createElement('link');
          link.href = font.href;
          link.rel = 'stylesheet';
          document.head.appendChild(link);
          
          // Apply fonts to body and elements with headline font
          document.body.style.setProperty('--font-body', font.body);
          document.body.style.setProperty('--font-headline', font.value);

          // Update tailwind config (conceptual) - In a real app this would require a build step
          // For live preview, we target elements directly
           document.querySelectorAll('.font-headline').forEach((el: any) => {
               el.style.fontFamily = font.value;
           });
           document.body.style.fontFamily = font.body;
      }
  };
  
  const resetToDefault = () => {
    if (typeof window !== "undefined") {
        window.location.reload();
    }
  }


  if (!isMounted) return null; // Or a loading spinner

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Theme Customizer</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Experiment with different themes and fonts for your website. Changes are applied live for preview.
          </p>
           <p className="mt-2 text-sm text-muted-foreground max-w-2xl mx-auto">
            Note: These changes are for preview only and will reset on page refresh.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline">
                <Paintbrush className="h-6 w-6" /> Color Themes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {themes.map((theme) => (
                <Button
                  key={theme.id}
                  variant={activeTheme.id === theme.id ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => applyTheme(theme)}
                >
                  <span className="flex items-center gap-2">
                    {Object.values(theme.colors).slice(3, 7).map((color, index) => (
                      <span
                        key={index}
                        className="h-5 w-5 rounded-full block border"
                        style={{ backgroundColor: `hsl(${color})` }}
                      />
                    ))}
                    {theme.name}
                  </span>
                </Button>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline">
                <Type className="h-6 w-6" /> Fonts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Select onValueChange={(value) => applyFont(fonts.find(f => f.name === value)!)} defaultValue={activeFont.name}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a font pair" />
                </SelectTrigger>
                <SelectContent>
                  {fonts.map((font) => (
                    <SelectItem key={font.name} value={font.name} style={{fontFamily: font.body}}>
                      <span style={{fontFamily: font.value}}>{font.name.split('&')[0]}</span> 
                       & 
                      <span style={{fontFamily: font.body}}>{font.name.split('&')[1]}</span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="p-4 border rounded-lg">
                <h3 className="font-headline text-2xl" style={{fontFamily: 'var(--font-headline)'}}>Headline Font</h3>
                <p className="text-muted-foreground" style={{fontFamily: 'var(--font-body)'}}>
                  This is the body font. It's used for paragraphs and other text content.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Separator className="my-12"/>

        <div className="text-center">
            <h2 className="font-headline text-2xl">Reset to Defaults</h2>
            <p className="text-muted-foreground mt-2 mb-4">Refresh the page to reset all customizations to the original style.</p>
            <Button onClick={resetToDefault} variant="destructive">Reset Customizations</Button>
        </div>
      </div>
    </div>
  );
}
