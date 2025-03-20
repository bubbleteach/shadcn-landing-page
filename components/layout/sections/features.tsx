import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
  iconColor: string; // Added icon color property
}

const featureList: FeaturesProps[] = [
  {
    icon: "PencilLine",
    title: "Customized Writing Style",
    description:
      "Say goodbye to AI slops and seamlessly switch between various writing styles that you can customize.",
    iconColor: "hsla(25, 95%, 63%, 1)", // Added icon color
  },
  {
    icon: "Brain",
    title: "Shared Memory for Writing",
    description:
      "Learn your writing preference from your writing, improving coherence and personalization.",
    iconColor: "hsla(250, 40%, 50%, 1)", // Added icon color
  },
  {
    icon: "Handshake",
    title: "Version Control of Prompts",
    description:
      "Bring Traceability to collaborative AI writing, making it easier for teams to manage their prompt asset.",
    iconColor: "hsla(135, 37%, 48%, 1)", // Added icon color
  },
  {
    icon: "Search",
    title: "Web Search anywhere",
    description:
      "Ensure that all generated content is grounded with reliable, up-to-date sources",
    iconColor: "hsla(299, 72%, 72%, 1)", // Added icon color
  },
  {
    icon: "BookText",
    title: "Knowledge Base",
    description:
      "Leverage your own data to enhance accuracy and consistency.",
    iconColor: "hsla(216, 71%, 51%, 1)", // Added icon color
  },
  {
    icon: "Users",
    title: "Real-time Collaboration",
    description:
      "Allow your whole team and AI to write, edit or comment in one doc.",
    iconColor: "hsla(346, 75%, 53%, 1)", // Added icon color
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container w-full my-32">
      <div className = "flex gap-2 flex-col items-start">
        <Badge variant="brand" className="">Features</Badge>

        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          {`What Makes Us `}
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
            Different
          </span>

        </h2>

        <h3 className="md:w-1/2 text-xl text-muted-foreground mb-8">
          GrimoAI does not write for you. It writes with you.
        </h3>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {featureList.map(({ icon, title, description,iconColor }) => (
          <div key={title} className=" flex gap-4 items-start p-2 md:p-6 border border-border bg-background rounded">
            <div className = "pt-1">
              <Icon
                name={icon as any}
                size={24}
                color={iconColor} // Using the iconColor from the featureList
                className="text-primary"
              />
            </div>
            <div className = "flex flex-col gap-2">
              <h2 className=" text-xl font-semibold text-foreground">{title}</h2>
              <p className="text-muted-foreground text-base">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
