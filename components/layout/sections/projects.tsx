import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="container py-24 sm:py-32">
      <div className="text-center mb-16">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          PROJECTS
        </h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Our Featured Projects
        </h2>
      </div>

      <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
        {/* Artify Project */}
        <Card className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-bold">
              <span className="text-transparent bg-gradient-to-r from-[#7e9fd7] to-primary bg-clip-text">
                Artify
              </span>
            </CardTitle>
            <p className="text-lg text-muted-foreground">
              Artify by DevSphere is an AI-powered web application that transforms ordinary photos into stunning works of art. Users can choose from over 30 artistic styles to create personalized masterpieces in seconds.
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Artify Logo Display */}
            <div className="w-full h-80 bg-muted/50 dark:bg-card/50 flex items-center justify-center rounded-lg border border-border relative overflow-hidden group/image">
              {/* Subtle Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-background/5 via-transparent to-primary/5"></div>
              
              {/* Main Content Container */}
              <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
                {/* Logo Container with DevSphere styling */}
                <div className="relative flex items-center justify-center w-40 h-40 bg-background/90 dark:bg-card/90 rounded-2xl shadow-lg border border-border/50 backdrop-blur-sm transition-all duration-300 group-hover/image:scale-105 group-hover/image:shadow-xl">
                  {/* Inner glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl"></div>
                  
                  <Image
                    src="/artify-screenshot.png"
                    alt="Artify - AI Photo Art Generator"
                    width={150}
                    height={150}
                    className="w-36 h-36 object-contain transition-all duration-300 group-hover/image:scale-110"
                    priority
                  />
                </div>
                
                {/* Project Label */}
                <div className="text-center">
                  <p className="text-sm font-medium text-muted-foreground/80 tracking-wider uppercase">
                    Art Style Generator
                  </p>
                </div>
              </div>
              
              {/* Decorative Elements - matching DevSphere style */}
              <div className="absolute top-6 left-6 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
              <div className="absolute top-10 right-8 w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse delay-500"></div>
              <div className="absolute bottom-8 left-10 w-2.5 h-2.5 bg-primary/25 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute bottom-6 right-6 w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse delay-1500"></div>
              
              {/* Subtle corner accents */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/5 to-transparent rounded-lg"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-primary/5 to-transparent rounded-lg"></div>
            </div>

            {/* Project Description */}
            <div className="space-y-4">
              <p className="text-muted-foreground">
                <strong>Artify by DevSphere</strong> is an AI-powered web application that transforms ordinary photos into stunning works of art. Users can choose from over 30 artistic styles to create personalized masterpieces in seconds.
              </p>
              <p className="text-muted-foreground">
                The application uses Google&apos;s Gemini AI to ensure high-quality transformations while preserving the original subject&apos;s identity. Built with Next.js, Artify offers live previews and instant downloads with a seamless user experience.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild className="flex-1 group/demo">
                <Link href="https://artify-by-dev-sphere.vercel.app/" className="flex items-center justify-center">
                  <ExternalLink className="size-4 mr-2 group-hover/demo:translate-x-1 transition-transform" />
                  View Demo
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="flex-1 group/repo">
                <Link href="https://github.com/SharadhNaidu/Artify-By-DevSphere" className="flex items-center justify-center">
                  <Github className="size-4 mr-2 group-hover/repo:scale-110 transition-transform" />
                  View Repository
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
