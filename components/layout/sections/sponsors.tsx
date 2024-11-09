"use client";

import MicrosoftSVG from "@/public/microsoft-svgrepo-com.svg";
import MozillaSVG from "@/public/firefox-svgrepo-com.svg";
import GithubSVG from "@/public/github_inverted.png";
import TenacityLogo from "@/public/tenacity_community_logo.jpg";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { icons } from "lucide-react";
import  Image from "next/image";
import { StaticImageData } from "next/image";
interface sponsorsProps {
  icon: StaticImageData;
  name: string;
}

const sponsors: sponsorsProps[] = [
  {
    icon: MicrosoftSVG,
    name: "Microsoft",
  },
  {
    icon: MozillaSVG,
    name: "Mozilla",
  },

  {
    icon: GithubSVG,
    name: "Github",
  },
  {
    icon: GithubSVG,
    name: "Tenacity",
  },
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
      <h2 className="text-lg md:text-xl text-center mb-6">
        Our Platinum Sponsors
      </h2>

      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {sponsors.map(({ icon, name }) => (
            <div
              key={name}
              className="flex items-center text-xl md:text-2xl font-medium"
            >
              <Image
                src={icon}
                alt={name}
                width={40}
                height={40}
                className="mr-2"
              />
              {name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
