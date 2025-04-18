'use client'
import { Button } from "@/components/ui/button";

import { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Check } from "lucide-react";
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';


enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  buttonText: string;
  buttonLink: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Starter",
    popular: 0,
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "For you my friend",
    buttonText: "Get Started",
    buttonLink: "https://beta.grimo.ai",
    benefitList: [
      "Write / Edit with AI",
      "All LLMs from OpenAI, Anthropic, DeepSeek, etc.",
      "Prompt Management",
      "1 Doc"
    ],
  },
  {
    title: "Pro",
    popular: 1,
    monthlyPrice: 20,
    yearlyPrice: 16,
    description: "For 10x professionals",
    buttonText: "Start Free Trial",
    buttonLink: "https://beta.grimo.ai",
    benefitList: [
      "Everything in Starter Plan",
      "Unlimited Docs",
      "Community Templates",
      "[Early Access] MCP Servers",
    ],
  },
  {
    title: "Team",
    popular: 0,
    monthlyPrice: 40,
    yearlyPrice: 32,
    description: "For frictionless collaboration",
    buttonText: "Contact US",
    buttonLink: "https://beta.grimo.ai",
    benefitList: [
      "Everything in Pro Plan",
      "Organization Workspace",
      "Access Control",
      "Advanced Security",
      // "Dedicated Support",
    ],
  },
];

export const PricingSection = () => {


  const [isYearly, setIsYearly] = useState(true);

  return (
    <section id="pricing" className="container scroll-mt-20">
      <div className="">

        <div className="flex flex-col md:flex-row gap-8 pb-8 md:pb-14 md:items-center">
            {/* <h2 className="text-lg text-primary mb-2 tracking-wider">
              Pricing
            </h2> */}
            <div className="flex gap-3 flex-col items-start flex-1">
              <h2 className="text-2xl md:text-3xl font-semibold ">
                Simple Pricing, No Add-ons
              </h2>

              <h3 className=" text-base text-muted-foreground">
                Cancel Anytime
              </h3>
            </div>

            {/* Toggle */}
            <div className="flex items-center p-1 gap-2 h-fit w-fit bg-background border border-sidebar-border rounded">
              <Button
                variant="ghost"
                size={"sm"}
                className={`h-6  ${isYearly ? '' : 'bg-accent'}`}
                onClick={() => setIsYearly(false)}
              >
                Monthly
              </Button>
              <Button
                variant="ghost"
                size={"sm"}
                className={`h-6 flex gap-1 ${isYearly ? 'bg-accent' : ''}`}
                onClick={() => setIsYearly(true)}
              >
                Yearly 
                <span
                  className={` text-xs font-normal ${isYearly? 'text-brand' : 'text-muted-foreground'} `}
                  >
                  Save 20%
                </span>
              </Button>
            </div>
            
        </div>


        
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {plans.map(
          ({
            title,
            popular,
            monthlyPrice,
            yearlyPrice,
            description,
            buttonText,
            buttonLink,
            benefitList,
          }) => (
            <Card
              key={title}
              className={`border border-border bg-background ${popular===1 ? 'bg-[#F3F0FE] border-brand shadow-lg' : ''}`}
              // className={
              //   popular === PopularPlan?.YES
              //     ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
              //     : ""
              // }
            >

                {/* {popular===PopularPlan?.YES && 
                  <div className="relative top-8 md:top-4 left-2">
                    <Badge 
                      variant="paper" 
                      className="w-fit absolute top-[-2rem] right-0 text-xl shadow" 
                      style={{ transform: 'rotate(10deg)' }}
                    >
                      Popular
                    </Badge>
                  </div>
                } */}
              <CardHeader className="">

                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  
                  <div>
                    <span className="text-3xl font-bold">
                    {isYearly
                      ? (yearlyPrice === 0 ? 'Free' : yearlyPrice === -1 ? '--' : null)
                      : (monthlyPrice === 0 ? 'Free' : monthlyPrice === -1 ? '--' : null)
                    }
                    {monthlyPrice!==0 && <><span className=" text-[1.625rem]">$</span><Odometer 
                      duration={500}
                      value={isYearly ? yearlyPrice : monthlyPrice} 
                      format="(.ddd),dd"
                    /></>}
                    
                    </span>
                    {(isYearly ? yearlyPrice : monthlyPrice) > 0 && 
                      <span className="text-muted-foreground">
                        /month
                      </span>
                    }
                  </div>
                  
                 {buttonLink === "" ?<Button
                    variant="outline"
                    disabled={true}
                    className="w-full mt-6"
                  >
                      {buttonText}
                </Button>: <Button
                    asChild
                    variant={
                      popular === PopularPlan?.YES ? "brand" : "outline"
                    }
                    className="w-full mt-6"
                  >
                    <Link target="_blank" href={buttonLink}>
                      {buttonText}
                    </Link>
                </Button>}
                </div>
              </CardHeader>

              <CardContent className="flex py-4">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-primary mr-2 min-w-6" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>



              {/* <CardFooter>
                <Button
                  asChild
                  variant={
                    popular === PopularPlan?.YES ? "default" : "outline"
                  }
                  className="w-full"
                >
                  <Link target="_blank" href={buttonLink}>
                    {buttonText}
                  </Link>
                </Button>
              </CardFooter> */}
            </Card>
          )
        )}
      </div>

      </div>
    </section>
  );
};
