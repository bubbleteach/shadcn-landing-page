"use client";

import { useRef, useEffect } from 'react';
import { Badge } from "@/components/ui/badge";
import Image from "next/image";


export const OutputExample = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  // 将图片引用添加到数组中
  interface ImageRef {
    current: HTMLImageElement | null;
  }

  const addImageRef = (el: HTMLImageElement | null): void => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current.push(el);
    }
  };
  

  useEffect(() => {
    const container = containerRef.current;
    const images = imagesRef.current;
    
    if (!container || images.length < 2) return;
    
    const imageWidth = images[0].offsetWidth;
    const speed = 0.8; // 每帧移动的像素数，可以调整
    let position = 0;
    
    const animate = () => {
      position -= speed; // 向左移动
      container.style.transform = `translateX(${position}px)`;
      
      // 当第一张图片完全移出视图时
      if (Math.abs(position) >= imageWidth) {
        // 重置位置
        position += imageWidth;
        container.style.transform = `translateX(${position}px)`;
        
        // 将第一张图片移到末尾
        const firstImage = images.shift();
        if (firstImage) {
          images.push(firstImage);
          // 重新排列DOM元素
          container.appendChild(firstImage);
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="w-full  my-16 md:my-32 bg-sidebar-accent pt-1 border-b border-border">

      <div
          className=" container  flex flex-col my-16 gap-4"
      >
          <div className="flex flex-col text-left shadow-none items-start gap-2 bg-none! border-none">
          <Badge variant="outline" badgeColor="green" className="w-fit ">articles</Badge>
          <h2 className=" text-2xl md:text-3xl font-semibold">Write what you want</h2>
          <p className="text-muted-foreground px-0">
              Express your ideas freely without limitations
          </p>
          </div>

          
      </div>
      <div className="relative h-[670px] border border-sidebar-border overflow-hidden">
        {/* <div ref={containerRef}  className="absolute w-full flex animate-slide-left">
          <Image
            width={2400}
            height={0}
            className="  top-0 left-0 h-auto rounded-lg leading-none items-center border-secondary border-t-primary/30"
            src="/articles.png"
            alt="dashboard"
            style={{ maxWidth: "none" }}
          />
          <Image
            width={2400}
            height={0}
            className="   top-0 left-0 h-auto rounded-lg leading-none items-center border-secondary border-t-primary/30"
            src="/articles.png"
            alt="dashboard"
            style={{ maxWidth: "none" }}
          />
        </div> */}

        <div 
          ref={containerRef} 
          className="flex" 
          style={{ width: 'fit-content' }}
        >
          <div ref={addImageRef} className="flex-shrink-0">
            <Image
              width={2400}
              height={0}
              className="h-auto"
              src="/articles.png"
              alt="dashboard"
              style={{ maxWidth: "none" }}
            />
          </div>
          <div ref={addImageRef} className="flex-shrink-0">
            <Image
              width={2400}
              height={0}
              className="h-auto"
              src="/articles.png"
              alt="dashboard"
              style={{ maxWidth: "none" }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};
