import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Learn by Building, for Real",
    description:
      "You dive straight into real projects and leave with skills that actually mean something, plus a portfolio full of stuff you actually made.",
  },
  {
    icon: "BadgeCheck",
    title: "Meet People Who Get It",
    description:
      "Ever feel like you’re the only one who’s excited about the future of tech? Not here. We connect you with mentors and people who are living and breathing this stuff.",
  },
  {
    icon: "Goal",
    title: "A Club that Is Inclusive",
    description:
      "You’re surrounded by folks who get as hyped as you do about building the future. You’ll find teammates for hackathons, buddies to brainstorm with, and friends who push you to do better.",
  },
  {
    icon: "PictureInPicture",
    title: "The Resources You Need",
    description:
      "We’ve gathered the best resources, tools, and guides so you don’t have to waste time digging through endless online tutorials.",
  },
  {
    icon: "MousePointerClick",
    title: "Jumpstart Your Career",
    description:
      "You’ll work on projects that prove you’re ready for the industry projects that’ll make hiring managers sit up and notice.",
  },
  {
    icon: "Newspaper",
    title: "Grow in Every Way",
    description:
      "We’re not just here to teach you how to code, we’re here to help you grow, make impact.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Why DevSphere Stands Out
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-justify text-muted-foreground mb-8">
        We are dedicated to creating a supportive space where members can grow their skills, take on exciting challenges, and explore the future of Web 3.0 together.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
