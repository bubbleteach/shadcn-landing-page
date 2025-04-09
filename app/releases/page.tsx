// 'use client'

import { getAllPosts } from "../../lib/api"
import ReleaseContent  from "../../components/ui/ReleaseContent"
import Link from "next/link";
// export const metadata: Metadata = {
//     title: "releases - Grimo",
//     // description: "分享学习、笔记相关的思考与方法",
// };

export default function Releases() {

    const releases = getAllPosts("_releases").sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return (
        <main className='container px-4 md:px-16  mt-2 md:mt-14 w-full max-w-2xl text-foreground'>
            <div className=" md:pl-[294px] space-y-6 pb-16 border-b border-border">
                <h1 className=" text-4xl font-semibold">Releases</h1>
                <p className=" text-lg">Follow Grimo updates and improvements.</p>
                <div className=" flex flex-row gap-4">
                    {/* <Button className=" text-brand px-0" variant="link">YouTube</Button> 
                    <Button className=" text-brand px-0" variant="link">Twitter</Button>
                    <Button className=" text-brand px-0" variant="link">YouTube</Button> */}

                <Link
                  href="https://www.linkedin.com/company/grimo-ai/"
                  className=" text-brand hover:opacity-90 flex flex-row gap-1"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://x.com/GrimoAI"
                  className=" text-brand hover:opacity-90 flex flex-row gap-1"
                >
                  X/Twitter
                </Link>
                </div>
            </div>
            
            {/* list */}
            <div>
                {releases.map((release) => (
                    <div key={release.slug} className="flex flex-col md:flex-row items-baseline py-8 md:py-16">
                        {/* title */}
                        <div className=" flex flex-col gap-1 md:w-[294px] md:sticky md:top-20">
                            <div className=" text-sm text-muted-foreground">{release.date}</div>
                            <h2 className=" text-xl font-semibold text-foreground">{release.title}</h2>
                        </div>
                        {/* content */}
                        <div className="">
                            <ReleaseContent content={release.content} />
                        </div>
                    </div>
                ))}
            </div>
        </main>

    );
}
