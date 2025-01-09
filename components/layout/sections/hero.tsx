"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full mt-8 h-[38rem]">
      <div className="flex flex-col items-center lg:pl-8 md:flex-row h-full gap-8 md:gap-0">

        {/* text */}
        <div className="text-center md:text-left space-y-8 flex-1 flex flex-col max-w-lg">
          {/* <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>New</Badge>
            </span>
            <span> Design is out now! </span>
          </Badge> */}

          <div className="max-w-screen-lg lg:text-left text-4xl lg:text-6xl font-semibold text-left">
            <h1>
              {/* <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                Reimagine
              </span> */}
              Writing like Coding
            </h1>
          </div>

          <p className="max-w-screen-sm text-lg lg:text-xl text-muted-foreground">
            {`Your AI Content Pipeline in one place`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button asChild className="w-5/6 md:w-1/4 font-bold group/arrow">
              <Link
                aria-label="Build Your Words"
                href="http://app.grimo.ai"
                target="_blank"
              >
                Build Your Words
              </Link>
              {/* <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" /> */}
            </Button>

            {/* <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link
                href="https://github.com/nobruf/shadcn-landing-page.git"
                target="_blank"
              >
                Github respository
              </Link>
            </Button> */}
          </div>
        </div>

        {/* Image */}
        <div className=" md:w-7/12 max-w-5xl h-full group md:mt-14 right-0 md:overflow-hidden flex flex-1 items-center">
          {/* <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/35 rounded-full blur-3xl"></div> */}
          <div className="  md:absolute overflow-hidden 2xl:top-32">
            <div className="md:translate-x-20">
              <Image
                width={1200}
                height={1200}
                className="w-full mx-auto rounded-lg rouded-lg leading-none items-center  border-secondary  border-t-primary/30"
                src={
                  theme === "light" ? "/grimo/hero.png" : "/grimo/hero.png"
                }
                alt="dashboard"
              />
              </div>
            {/* <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div> */}
          </div>

          
        </div>
      </div>
    </section>
  );
};
