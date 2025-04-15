// 'use client'

import { Badge } from "@/components/ui/badge";
import { getAllPosts } from "../../lib/api"
import Link from "next/link";
// export const metadata: Metadata = {
//     title: "releases - Grimo",
//     // description: "分享学习、笔记相关的思考与方法",
// };

export default function Blog() {

    const posts = getAllPosts("_blog").sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    
    return (
        <main className='container px-4 md:px-16  mt-2 md:mt-14 w-full max-w-2xl text-foreground'>
            <div className=" space-y-6 pb-16">
                <h1 className=" text-4xl font-semibold">Blog</h1>
            </div>
            
            {/* list */}
            <div>
                {posts.map((post) => (
                    <div key={post.slug} className="flex flex-col md:flex-row items-baseline py-8 md:py-16">
                        {/* date */}
                        <div className=" flex flex-col gap-2 md:w-[294px] md:flex-shrink-0">
                            <div className=" text-sm text-muted-foreground">{post.date}</div>
                            <div className="flex flex-wrap gap-2 pr-4">
                                {Array.isArray(post.tag) 
                                    ? post.tag.map((tag) => (
                                        <Badge variant="outline" key={tag} className=" border-foreground w-fit">{tag}</Badge>
                                    ))
                                    : typeof post.tag === 'string'
                                        ? post.tag.split(',').map((tag) => (
                                            <Badge variant="outline" key={tag} className="border-foreground w-fit">{tag}</Badge>
                                        ))
                                        : null
                                }
                            </div>
                        </div>
                        {/* content */}
                        <div className="flex flex-col gap-3 w-fit">
                            <Link href={`/blog/${post.slug}`} className="text-brand">
                                <h2 className=" text-xl font-semibold text-foreground hover:text-brand">{post.title}</h2>
                            </Link>
                            <div className=" text-base line-clamp-3">
                                {post.excerpt}
                            </div>
                            <div>
                            <Link href={`/blog/${post.slug}`} className="text-brand">Read More</Link>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>

    );
}
