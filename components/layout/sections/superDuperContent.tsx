"use client";
import { Badge } from "@/components/ui/badge";

interface SuperDuperContentProps {
  id: string;
  image: string;
  tag?: {
    text: string;
    backgroundColor?: string;
    textColor?: string;
  };
  title: string;
  description: string;
}

const superDuperContentList: SuperDuperContentProps[] = [
  {
    id: "1",
    image: "/grimo/1.png",
    title: "1 Build Brand Trust",
    tag: {
      text: "Hello",
      backgroundColor: "#EAE6FF",
      textColor: "#5E4DB2"
    },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur dolores.",
  },
  {
    id: "2",
    image: "/grimo/2.png",
    title: "2 More Leads",
    tag: {
      text: "Hello",
      backgroundColor: "#E8F2D9",
      textColor: "#68A111"
    },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam, natus consectetur.",
  },
];

export const SuperDuperContent = () => {
  return (
      <section className="container w-full my-16 md:my-32 max-w-6xl">
      <div className="flex flex-col h-full">
      {/* {superDuperContentList.map(
              ({ id, image, tag, title, description }, index) => (
                <div
                  key={title}
                  className="flex flex-col my-8 md:my-16 gap-5"
                >
                    <div className="flex flex-col text-center md:text-left shadow-none items-center md:items-start gap-2 bg-none! border-none">
                    {tag && <Badge variant="brand" className="w-fit" style={{ backgroundColor: tag.backgroundColor, color: tag.textColor }}>{tag.text}</Badge>}
                    <h2 className=" text-2xl md:text-3xl font-semibold">{title}</h2>
                    <p className="text-muted-foreground px-0">
                      {description}
                    </p>
                    </div>

                  <div className="relative w-full h-[576px] border border-border bg-accent">
                  </div>
                </div>
              )
            )} */}

          <div className="flex flex-col my-8 md:my-16 gap-5">
              <div className="flex flex-col text-center md:text-left shadow-none items-start gap-2 bg-none! border-none">
            <Badge className="w-fit" style={{ backgroundColor: "#EAE6FF", color: "#5E4DB2" }}>Hello</Badge>
            <h2 className="text-2xl md:text-3xl font-semibold">1 Build Brand Trust</h2>
            <p className="text-muted-foreground px-0 text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur dolores.
            </p>
              </div>
              <div className="relative w-full h-96 md:h-[576px] border border-border bg-accent">
                  <Badge 
                    variant="paper" 
                    className="w-fit absolute top-24 right-[0.85rem] md:right-[-2rem] text-xl shadow" 
                    style={{ transform: 'rotate(10deg)' }}
                  >
                    Better Writing
                  </Badge>
              </div>
          </div>

          <div className="flex flex-col my-8 md:my-16 gap-5">
              <div className="flex flex-col text-center md:text-left shadow-none items-start gap-2 bg-none! border-none">
            <Badge className="w-fit" style={{ backgroundColor: "#E8F2D9", color: "#68A111" }}>Hello</Badge>
            <h2 className="text-2xl md:text-3xl font-semibold">2 More Leads</h2>
            <p className="text-muted-foreground px-0 text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam, natus consectetur.
            </p>
              </div>
              <div className="relative w-full h-96 md:h-[576px] border border-border bg-accent">
                <Badge 
                  variant="paper" 
                  className="w-fit absolute bottom-24 right-[0.85rem] md:right-[-2rem] text-xl shadow" 
                  style={{ transform: 'rotate(-10deg)' }}
                >
                  Better Writing
                </Badge>
              </div>
          </div>
        </div>
      </section>
  );
};
