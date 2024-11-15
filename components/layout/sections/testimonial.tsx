"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import Ellipse1 from "@/public/Ellipse1.png"
import Ellipse2 from "@/public/Ellipse2.png"
import Ellipse3 from "@/public/Ellipse3.png"

import { StaticImageData } from 'next/image';

interface ReviewProps {
  image: string | StaticImageData;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: Ellipse1,
    name: "Mehul Goyal",
    userName: "BTech23 - SoCSE",
    comment:
      "Devsphere is the perfect launchpad for anyone—it's where beginners become builders, guided by a community that's as passionate about learning as it is about creating real-world projects together, and ofc the members here will just not guide u but help u get to that level that u can only imagine",
    rating: 4.5,
  },
  {
    image: Ellipse2,
    name: "Thushaar R",
    userName: "BSc23 - SoCSE",
    comment:
      "Thanks to an amazing community that truly encourages your development, I started out as a newbie and am now creating genuine Web3 and open source projects. It's the ideal group for anyone with a strong interest in technology; regardless of skill level, there's always something new to learn and people who support you in realizing your full potential.",
    rating: 4.8,
  },
  {
    image: Ellipse3,
    name: "Aniruddha A",
    userName: "BTech23 - SoCSE",
    comment:
      "Devsphere is a highly desirable club for those passionate about blockchain and Web3 technologies. It has enabled me to explore the  basics of blockchain, Web3, and their applications in real-world projects. The club provides a collaborative environment with workshops and discussions that help develop both technical skills and a deeper understanding of  these modern systems and the tech behind them. It's a great place to learn, innovate, and network with like-minded individuals.",
    rating: 4.8,
  },

  
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Hear What Our Community Members Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src={typeof review.image === 'string' ? review.image : review.image.src}
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
