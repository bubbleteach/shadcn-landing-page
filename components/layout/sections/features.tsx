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
    icon: "PencilLine",
    title: "Customized Writing Style",
    description:
      "Say goodbye to AI slops and seamlessly switch between various writing styles that you can customize.",
  },
  {
    icon: "Brain",
    title: "Personalized Rewriting",
    description:
      "By learning what you like, GrimoAI rewrites as you expect, probably better than anywhere else.",
  },
  {
    icon: "Handshake",
    title: "Version Control of Prompts",
    description:
      "Bring Traceability to collaborative AI writing, making it easier for teams to manage their prompt asset.",
  },
  {
    icon: "Search",
    title: "Web Search anywhere",
    description:
      "Ensure that all generated content is grounded with reliable, up-to-date sources",
  },
  {
    icon: "BookText",
    title: "Knowledge Base",
    description:
      "Leverage your own data to enhance accuracy and consistency.",
  },
  {
    icon: "Users",
    title: "Real-time Collaboration",
    description:
      "Allow your whole team and AI to write, edit or comment in one doc.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-semibold mb-4">
        What Makes Us Different
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        GrimoAI does not write for you. It writes with you.
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
