"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/ui/icon";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Computer } from "@/components/ui/computer";

export const HeroSection = () => {
  const { theme } = useTheme();
  const [scale, setScale] = useState(80);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // 从80%开始，最大到100%，根据滚动距离计算
      const newScale = Math.min(100, 80 + (scrollY / 100) * 30);
      setScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="container w-full my-16 md:my-32">
      
      <div 
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/Grid.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '1000px',
          opacity: 0.1,
          zIndex: -1,
          height:'1300px',
          pointerEvents: 'none'
        }}
      />
      <div className="flex flex-col items-center h-full gap-8 md:gap-0">
        
        
        
        <div className="text-center space-y-4 md:space-y-8 flex-1 flex flex-col gap-4 items-center">
          {/* <Badge variant="brand" className="w-fit rounded-full">
            <p className="text-sm py-2 text-center font-semibold text-brand flex items-center gap-2 justify-center">
            <Icon
              name="Sparkles"
              size={16}
              color="hsla(250, 40%, 50%, 1)"
              className="text-primary"
              />
              Reimagine Word Processor
            </p>
            </Badge> */}
          
          <Computer/>
          
          {/* text */}
          <div className="max-w-screen-lg text-4xl lg:text-6xl font-semibold">
            <h1>
              {/* <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                Reimagine
              </span> */}
              {`Cursor for `}
              <span 
                className="relative"
                style={{
                  backgroundImage: 'url(/handwriting1.png)',
                  backgroundRepeat: 'repeat-x',
                  backgroundPosition: 'left bottom',
                  backgroundSize: '100% 8px', // 调整高度
                  paddingBottom: '8px', // 为下划线留出空间
                }}
              >
                Writing
              </span>
            </h1>
          </div>

          <p className="max-w-screen-sm text-lg lg:text-xl text-muted-foreground">
            {`Welcome to the Thinking Editor`}
          </p>

            <div className="flex  md:flex-row items-center justify-center flex-col-reverse gap-8 md:gap-4">
          {/* <Button
              asChild
              variant="outline"
              className=" w-40"
            >
              <Link
                href="https://github.com/nobruf/shadcn-landing-page.git"
                target="_blank"
              >
                Playground
              </Link>
            </Button> */}

          {/* producthunt badge */}
          <div className="">
            <a href="https://www.producthunt.com/posts/grimo-b-eta?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-grimo&#0045;b&#0045;eta" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=945908&theme=light&t=1742975977640" alt="Grimo&#0032;&#0040;&#0058;b&#0041;eta - Cursor&#0032;for&#0032;Writing | Product Hunt" style={{width: "auto", height: "40px"}} className=" rounded-md" width="250" height="54" /></a>
          </div>

            <Button asChild className=" w-40 font-bold group/arrow">
              <Link
                aria-label="Build Your Words"
                href="http://app.grimo.ai"
                target="_blank"
              >
                Build Your Words
              </Link>
              {/* <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" /> */}
            </Button>

          </div>
        </div>

        {/* Image */}
        <div className=" h-full group md:mt-20 flex flex-1 items-center">
          {/* <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/35 rounded-full blur-3xl"></div> */}
          <div className="2xl:top-32 2xl:right-0">
            <div className="transition-transform duration-100 ease-out">
              <Image
                width={1024}
                height={0}
                className="w-[1024px] border border-border shadow-xl mx-auto rounded-lg rouded-lg leading-none items-center"
                style={{
                  transform: `scale(${scale / 100})`,
                  transition: 'transform 0.3s ease-out'
                }}
                src={theme === "light" ? "/grimo/hero.png" : "/grimo/hero.png"}
                alt="dashboard"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-sidebar-background/0 via-background/50 to-background rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
