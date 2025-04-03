import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface BentoCardProps {
  icon: string;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  image?: React.ReactNode;
  className?: string;
}

const BentoCard = ({ icon, title, description, image, className }: BentoCardProps) => {
  return (
    <div className={`BentoCard relative border border-border bg-background rounded overflow-hidden ${className || ''}`}>
      {/* Text Section */}
      <div className="relative z-10 p-4 md:p-6 flex flex-col gap-2">
        <div className="pt-1">
          <Icon
            name={icon as any}
            size={24}
            color="#37363A"
            className="text-primary mb-2"
          />
        </div>
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
        <div className="text-muted-foreground text-base">
          {description}
        </div>
      </div>

      {/* Optional Image Section */}
      {image && <>{image}</>}
    </div>
  );
};


export const BentoSection = () => {
  return (
    <section id="features" className="container scroll-mt-20 w-full my-32">
      <div className = "flex gap-3 flex-col items-start">
        <Badge variant="brand" className="">Features</Badge>

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

        <h3 className="md:w-1/2 text-base text-muted-foreground mb-8">
          GrimoAI does not write for you. It writes with you.
        </h3>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* 1 */}
          <div className=" flex gap-4 items-start h-[846px]">
            <div className = "flex flex-col gap-4 h-full w-full">
              
              {/* Edit with AI */}  
                <BentoCard
                  className=" pb-4 md:pb-6 "
                  icon="PencilLine"
                  title="Edit with AI. Anywhere"
                  description="The Strongest AI Text Editor, powered by latest AI models including DeepSeek R1, Claude 3.7 Sonnet, OpenAI GPT4, o3-mini, etc."
                  image={
                    <div className=" translate-x-10 mt-2 md:mt-1 w-full flex justify-end flex-col bottom-6 left-[2.4rem] scale-125 min-w-[30rem] max-w-[40rem]">
                      <Image
                        width={0}
                        height={200}
                        className="h-auto w-full"
                        src="/bento/bento_models.svg"
                        alt="speechToText"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  }
                />
              
              {/* Say it. Sometimes. */}
              <BentoCard 
                className=" h-[300px]"
                icon="Mic"
                title="Say it. Sometimes."
                description="Voice input that goes exactly like keyboard input, but LOUDER."
                image={
                  <div className=" absolute w-full flex justify-end flex-col bottom-0">
                    <Image
                      width={0}
                      height={200}
                      className="h-auto w-full opacity-75"
                      src="/bento/bento_speechToText.svg"
                      alt="speechToText"
                      style={{ maxWidth: "100%" }}
                    />
                  </div>
                }
              />

              {/* Collaborate. Simple. */}
                <BentoCard
                  className="flex-1"
                  icon="Handshake"
                  title={<>Collaborate. <span className="px-1 bg-[#4DA764]/20 rounded-sm">Simple.</span><span className=" absolute ml-1"><Image
                    width={0}
                    height={0}
                    className="h-auto w-full"
                    src="/bento/bento_user1.svg"
                    alt="speechToText"
                    style={{ maxWidth: "100%",height:"28px" }}
                  /></span></>}
                  description={<>Real-time or Async collaboration in one place. <span className=" py-[2px] px-1 bg-brand/20 rounded-sm">Don&apos;t send files again.</span><span className=" absolute ml-1"><Image
                    width={0}
                    height={0}
                    className="h-auto w-full"
                    src="/bento/bento_user2.svg"
                    alt="speechToText"
                    style={{ maxWidth: "100%",height:"28px" }}
                  /></span></>}
                  image={
                    <div className=" absolute w-full flex justify-end flex-col bottom-0 opacity-70">
                      <Image
                        width={0}
                        height={200}
                        className="h-auto w-full filter grayscale"
                        src="/bento/bento_world.svg"
                        alt="speechToText"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                }
              />

            </div>
          </div>

          {/* 2 */}
          <div className=" flex gap-4 items-start">
            <div className = "flex flex-col gap-4 w-full">
              
              {/* Web Search, File, Reddit. Just Here. */}  
              <BentoCard
                className=" h-[440px]"
                icon="Cable"
                title="Web Search, File, Reddit. Just Here."
                description="Access credible sources, and write with confidence. Let's see what you can do with MCP in a text editor."
                image={
                  <div className=" absolute w-full flex justify-end flex-col bottom-0">
                    <Image
                      width={0}
                      height={200}
                      className="h-auto w-full bottom-1"
                      src="/bento/bento_web.svg"
                      alt="speechToText"
                      style={{ maxWidth: "100%" }}
                    />
                  </div>
                }
              />
              
              {/* Better Prompts. Less Effort. */}
              <BentoCard
                className=" h-[390px]"
                icon="Brain"
                title="Better Prompts. Less Effort."
                description="Let Grimo generate & improve the prompts for you, or directly get production-level templates from the community."
                image={
                  <div className=" w-full mt-2 translate-x-4 md:translate-x-6 flex justify-end flex-col min-w-[500px] ">
                    <Image
                      width={0}
                      height={200}
                      className="h-auto w-full bottom-1 border border-sidebar-border rounded shadow-sm"
                      src="/bento/bento_marketplace.svg"
                      alt="speechToText"
                      style={{ maxWidth: "100%" }}
                    />
                </div>
                }
              />

            </div>
          </div>


      </div>
    </section>
  );
};
