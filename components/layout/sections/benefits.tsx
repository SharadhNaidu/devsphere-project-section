import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Users",
    title: "Build Your Network",
    description:
      "Connect with industry leaders, experienced mentors, and like-minded peers who share your passion for blockchain and open-source development.",
  },
  {
    icon: "LineChart",
    title: "Access More Career Opportunities",
    description:
      "From startups to established tech giants, our network gives you the edge you need to succeed.",
  },
  {
    icon: "Goal",
    title: "Sharpen Your Skills",
    description:
      "Through workshops, hackathons, and group projects, you’ll gain hands-on experience and develop skills that are in high demand.",
  },
  {
    icon: "Sparkle",
    title: "Test and Validate Your Ideas",
    description:
      "DevSphere offers a supportive environment where you can brainstorm, test, and refine your ideas.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Unlock New Opportunities with DevSphere
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our community connects you with valuable resources, hands on experience, and mentorship from industry leaders. Let us help you reach your potential in the decentralized tech space.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
