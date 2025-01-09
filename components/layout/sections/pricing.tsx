import { Button } from "@/components/ui/button";
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
    title: "Writer",
    popular: 0,
    price: 20,
    description: "For power writers and editors",
    buttonText: "Get Started",
    buttonLink: "http://go.grimo.ai",
    benefitList: [
      "Write/Edit/Comment with AI",
      "Unlimited AI Usage (Claude 3.5 Sonnet)",
      "Unlimited storage",
    ],
  },
  {
    title: "Editor",
    popular: 1,
    price: 40,
    description: "For teams collaborating on content",
    buttonText: "Start Free Trial",
    buttonLink: "http://go.grimo.ai",
    benefitList: [
      "Everything in Pro plus",
      "Real-time Collaboration",
      "Initial Deployment Support",
      "Access Control - Editor (Coming Soon...)",
    ],
  },
  {
    title: "Enterprise",
    popular: 0,
    price: -1,
    description: "For teams with",
    buttonText: "Contact US",
    buttonLink: "mailto:dev@grimo.ai",
    benefitList: [
      "Everything in Team plus",
      "Weekly Deployment Support",
      "Advanced Security & Analytics (Coming Soon...)",
      "Access Control - Memory (Coming Soon...)",
      // "Dedicated Support",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <div className="px-6">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-semibold mb-4">
        Simple Pricing, No Add-ons
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Cancel Anytime
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
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
              className={
                popular === PopularPlan?.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  
                  <div>
                    <span className="text-3xl font-bold">{price > -1?'$'+price:'--'}</span>
                    <span className="text-muted-foreground"> /month</span>
                  </div>
                  
                  <Button
                    asChild
                    variant={
                      popular === PopularPlan?.YES ? "default" : "outline"
                    }
                    className="w-full mt-6"
                  >
                    <Link target="_blank" href={buttonLink}>
                      {buttonText}
                    </Link>
                </Button>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-primary mr-2" />
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
