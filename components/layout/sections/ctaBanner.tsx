"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const CtaBanner = () => {
    return (

    <section id="ctaBanner" className="container scroll-mt-20 w-full mt-16 md:mt-32 mb-8 md:mb-16 ">

        <div className=" flex flex-col gap-10 items-center bg-primary py-8 md:py-20 rounded overflow-hidden shadow-lg">
            
            {/* Textures */}
            <div className="relative w-full">
                <Image
                    src="/texture2.webp"
                    alt=""
                    width={1200}
                    height={80}
                    className="absolute w-full top-[-1rem] left-[-2rem] h-20 opacity-15 pointer-events-none select-none"
                    style={{
                        objectFit: 'contain',
                        objectPosition: 'left top',
                    }}
                    loading="lazy"
                    aria-hidden="true"
                />
            </div>

            <div>
                <h2 className=" text-primary-foreground text-center text-4xl font-semibold">When words take flight, ears shall follow.</h2>
            </div>
            <div className="space-y-4 md:space-y-0 md:space-x-4 z-10">

                {/* <Button
                    asChild
                    
                    className=" w-40 border border-border"
                >
                    <Link
                    href="https://github.com/nobruf/shadcn-landing-page.git"
                    target="_blank"
                    >
                    Playground
                    </Link>
                </Button> */}

                <Button asChild variant="outline" className=" w-40 font-bold group/arrow">
                    <Link
                    aria-label="Build Your Words"
                    href="https://beta.grimo.ai/"
                    target="_blank"
                    >
                    Build Your Words
                    </Link>
                    {/* <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" /> */}
                </Button>

                </div>
                
                {/* Textures */}
                
                <div className="relative w-full">
                    <Image
                        src="/texture1.webp"
                        alt=""
                        width={1200}
                        height={112}
                        className="absolute bottom-[-2rem] right-[-6rem] w-full h-28 opacity-10 pointer-events-none select-none"
                        style={{
                            objectFit: 'contain',
                            objectPosition: 'right bottom',
                        }}
                        loading="lazy"
                        aria-hidden="true"
                    />
                </div>
            </div>

    </section>
    );
}