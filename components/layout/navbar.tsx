"use client";
import { ChevronsDown, Github, Menu } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "./toogle-theme";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/#features",
    label: "Features",
  },
  // {
  //   href: "/#testimonials",
  //   label: "Testimonials",
  // },

  {
    href: "/#pricing",
    label: "Pricing",
  },
  // {
  //   href: "/playground",
  //   label: "Playground",
  // },
  // {
  //   href: "/#faq",
  //   label: "FAQ",
  // },
];

const featureList: FeatureProps[] = [
  {
    title: "Showcase Your Value ",
    description: "Highlight how your product solves user problems.",
  },
  {
    title: "Build Trust",
    description:
      "Leverages social proof elements to establish trust and credibility.",
  },
  {
    title: "Capture Leads",
    description:
      "Make your lead capture form visually appealing and strategically.",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={
      `md:w-full py-0 md:py-2 bg-sidebar-background border-b  border-border sticky top-0 flex justify-center bg-opacity-15 z-40 `}>
        <div 
          className={`
            w-full 
            transition-all duration-500 ease-in-out 
            px-4 md:px-16 py-2 md:py-0
            max-w-6xl
            flex items-center
            justify-between md:justify-center
          `}
        >
        {/* Nav */}
        <div className="flex md:flex-1 items-center gap-4">
          <Link href="/" className="font-bold text-lg flex items-center gap-2">
            {/* <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" /> */}
            <Image
              width={24}
              height={24}
              // className="mx-auto rounded-lg relative rouded-lg leading-none flex items-center  border-secondary  border-t-primary/30"
              src="/grimo/grimo_logo.png"
              alt="grimo"
              loading="eager"
            />
          </Link>

          
          
        </div>

        {/* <!-- Mobile Nav --> */}
        <div className="flex items-center md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Menu
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer md:hidden"
              />
            </SheetTrigger>

            <SheetContent
              side="left"
              className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
            >
              <div>
                <SheetHeader className="mb-4 ml-4">
                  <SheetTitle className="flex items-center">
                    <Link href="/" className="flex items-center">
                      {/* <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" /> */}
                      Grimo
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-2">
                  {routeList.map(({ href, label }) => (
                    <Button
                      key={href}
                      onClick={() => setIsOpen(false)}
                      asChild
                      variant="ghost"
                      className="justify-start text-base"
                    >
                      <Link href={href}>{label}</Link>
                    </Button>
                  ))}
                </div>
              </div>

              <SheetFooter className="flex-col sm:flex-col justify-start items-start">
                {/* <Separator className="mb-2" /> */}

                {/* <ToggleTheme /> */}
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
        {/* Right Button */}
        <div className="hidden md:flex justify-end items-center gap-4">
          {/* <ToggleTheme /> */}

          {/* <Button asChild size="sm" variant="ghost" aria-label="View on GitHub">
          <Link
            aria-label="View on GitHub"
            href="https://github.com/nobruf/shadcn-landing-page.git"
            target="_blank"
          >
            <Github className="size-5" />
          </Link>
        </Button> */}

          {/* <Button asChild variant="ghost" className="w-fit" size="sm">
          <Link aria-label="grimo" href="http://go.grimo.ai" target="_blank">
            About
          </Link>
        </Button> */}

            {/* <!-- Desktop --> */}
            <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                {routeList.map(({ href, label }) => (
                  <NavigationMenuLink key={href} asChild>
                    <Link href={href} className="text-base px-2">
                      {label}
                    </Link>
                  </NavigationMenuLink>
                ))}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button asChild variant="outline" className="w-fit" size="sm">
            <Link aria-label="grimo" href="http://go.grimo.ai" target="_blank">
              Start Writing
            </Link>
          </Button>

          {/* <Button variant="ghost" asChild>
          <Link href="/about">About</Link>
        </Button> */}
        </div>
      </div>
    </header>
  );
};
