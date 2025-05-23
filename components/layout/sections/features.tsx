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
    title: "Edit with AI. Anywhere",
    description:
      "The Strongest AI Text Editor, powered by latest AI models including DeepSeek R1, Claude 3.7 Sonnet, OpenAI GPT4, o3-mini, etc.",
    iconColor: "hsla(25, 95%, 63%, 1)", // Added icon color
  },
  {
    icon: "Cable",
    title: "Web Search, File, Reddit. Just Here",
    description:
      "Access credible sources, and write with confidence. P.S. See what you can do with MCP.",
    iconColor: "hsla(250, 40%, 50%, 1)", // Added icon color
  },
  {
    icon: "Brain",
    title: "Better Prompts. Less Effort",
    description:
      "Let Grimo generate & improve the prompts for you, or get production-level templates from the community.",
    iconColor: "hsla(135, 37%, 48%, 1)", // Added icon color
  },
  {
    icon: "Mic",
    title: "Say it. Sometimes",
    description:
      "Voice input that goes exactly like keyboard input, but LOUDER.",
    iconColor: "hsla(299, 72%, 72%, 1)", // Added icon color
  },
  {
    icon: "Handshake",
    title: "Collaborate. Simple",
    description:
      "Real-time or Async collaboration in one place. Don’t send files again.",
    iconColor: "hsla(216, 71%, 51%, 1)", // Added icon color
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container w-full my-32">
      <div className = "flex gap-3 flex-col items-start">
        <Badge className="">Features</Badge>

        <h2 className="text-2xl md:text-3xl font-semibold">
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
