"use client";

import { useState, type ChangeEvent } from "react";
import Image from "next/image";
import { Sparkles, Upload, Wand2 } from "lucide-react";
import { getStylingAdvice, GetStylingAdviceOutput } from "@/ai/flows/ai-styling-assistant";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";

export default function AiStylistPage() {
  const [styleDescription, setStyleDescription] = useState("");
  const [styleImage, setStyleImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [advice, setAdvice] = useState<GetStylingAdviceOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setStyleImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const toBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!styleDescription && !styleImage) {
      toast({
        title: "Input required",
        description: "Please describe the style or upload an image.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setAdvice(null);

    try {
      let imageAsDataUrl: string | undefined = undefined;
      if (styleImage) {
        imageAsDataUrl = await toBase64(styleImage);
      }
      
      const result = await getStylingAdvice({
        styleDescription,
        styleImage: imageAsDataUrl,
      });
      setAdvice(result);
    } catch (error) {
      console.error("Error getting styling advice:", error);
      toast({
        title: "An error occurred",
        description: "Failed to get styling advice. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <Wand2 className="h-12 w-12 mx-auto text-primary" />
          <h1 className="text-4xl md:text-5xl font-headline font-bold mt-4">AI Styling Assistant</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Describe your dream look or upload a photo, and our AI will provide personalized styling advice to help you achieve it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Describe Your Style</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="style-description">Style Description</Label>
                  <Textarea
                    id="style-description"
                    placeholder="e.g., 'A chic, wavy bob with honey-blonde highlights' or 'A classic French manicure with a modern twist.'"
                    value={styleDescription}
                    onChange={(e) => setStyleDescription(e.target.value)}
                    className="min-h-[120px] mt-2"
                  />
                </div>
                <div className="text-center text-muted-foreground font-semibold">OR</div>
                <div>
                  <Label htmlFor="style-image">Upload an Image</Label>
                  <div className="mt-2 flex items-center justify-center w-full">
                    <label htmlFor="style-image" className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer bg-card hover:bg-secondary">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        {imagePreview ? (
                          <Image src={imagePreview} alt="Style preview" width={100} height={100} className="object-contain h-24" />
                        ) : (
                          <>
                            <Upload className="w-8 h-8 mb-4 text-muted-foreground" />
                            <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-muted-foreground">PNG, JPG, or WEBP</p>
                          </>
                        )}
                      </div>
                      <Input id="style-image" type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                    </label>
                  </div>
                </div>
                <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                  {isLoading ? (
                    "Generating Advice..."
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-5 w-5" /> Get Styling Advice
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Your Personalised Advice</CardTitle>
              <CardDescription>
                Here are the tailored steps to achieve your desired look.
              </CardDescription>
            </CardHeader>
            <CardContent className="min-h-[400px]">
              {isLoading && (
                <div className="space-y-4">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              )}
              {advice ? (
                <div className="prose prose-sm md:prose-base max-w-none text-foreground whitespace-pre-wrap font-body">
                  {advice.advice}
                </div>
              ) : (
                !isLoading && (
                  <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
                    <Wand2 className="h-16 w-16 mb-4" />
                    <p>Your styling advice will appear here.</p>
                  </div>
                )
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
