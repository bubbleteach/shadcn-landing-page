import { Button } from "@/components/ui/button";
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

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  buttonLink: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Starter",
    popular: 0,
    price: 0,
    description: "For you my friend",
    buttonText: "Get Started",
    buttonLink: "http://beta.grimo.ai",
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
    price: 20,
    description: "For 10x professionals",
    buttonText: "Start Free Trial",
    buttonLink: "http://beta.grimo.ai",
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
    price: 40,
    description: "For frictionless collaboration",
    buttonText: "Coming soon",
    buttonLink: "",
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
  return (
    <section id="pricing" className="container ">
      <div className="">

        <div className="flex gap-3 flex-col items-start">
            {/* <h2 className="text-lg text-primary mb-2 tracking-wider">
              Pricing
            </h2> */}

            <h2 className="text-2xl md:text-3xl font-semibold ">
              Simple Pricing, No Add-ons
            </h2>

            <h3 className=" text-base text-muted-foreground pb-14">
              Cancel Anytime
            </h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {plans.map(
          ({
            title,
            popular,
            price,
            description,
            buttonText,
            buttonLink,
            benefitList,
          }) => (
            <Card
              key={title}
              className="border border-border bg-background"
              // className={
              //   popular === PopularPlan?.YES
              //     ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
              //     : ""
              // }
            >

                {popular===PopularPlan?.YES && 
                  <div className="relative top-8 md:top-4 left-2">
                    <Badge 
                      variant="paper" 
                      className="w-fit absolute top-[-2rem] right-0 text-xl shadow" 
                      style={{ transform: 'rotate(10deg)' }}
                    >
                      Popular
                    </Badge>
                  </div>
                }
              <CardHeader className="">

                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  
                  <div>
                    <span className="text-3xl font-bold">{price === 0 ? 'Free' : price === -1 ? '--' : `$${price}`}</span>
                    {price > 0 && <span className="text-muted-foreground"> /month</span>}
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
                      popular === PopularPlan?.YES ? "default" : "outline"
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
