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
            {/* Blog title section */}
            <div className=" space-y-6 pb-16">
                <h1 className=" text-4xl font-semibold">Blog</h1>
            </div>
            
            {/* Blog posts list container */}
            <div>
                {posts.map((post) => (
                    // Individual blog post card
                    <div key={post.slug} className="flex flex-col-reverse md:flex-row items-baseline py-6 md:py-16">
                        {/* Post metadata section - date and author */}
                        <div className=" flex items-center md:items-start mb-2 md:flex-col gap-2 md:w-[294px] md:flex-shrink-0">
                            {/* Post date */}
                            <div className=" text-sm text-muted-foreground">{post.date}</div>
                            {/* Vertical divider for mobile layout */}
                            <span className="h-3 w-[1px] md:hidden bg-foreground/30"></span>
                            {/* Post author */}
                            <div className=" text-sm text-muted-foreground md:text-foreground">{post.author}</div>
                        </div>

                        {/* Post content section */}
                        <div className="flex flex-col gap-4 w-fit">
                            {/* Post title with link */}
                            <div className=" flex flex-col gap-4">
                                <Link href={`/blog/${post.slug}`} className="text-brand">
                                    <h2 className=" text-xl font-semibold text-foreground hover:text-brand">{post.title}</h2>
                                </Link>
                            </div>
                            {/* Post excerpt with 3-line clamp */}
                            <div className=" text-base line-clamp-3">
                                {post.excerpt}
                            </div>
                            {/* Post tags section - only shown if tags exist */}
                            {post.tag.length > 0 && <div className="flex flex-row gap-2 items-center">
                                    {/* Handle both array and comma-separated string tag formats */}
                                    {Array.isArray(post.tag) 
                                        ? post.tag.map((tag) => (
                                            <Badge variant="outline" badgeColor="black" key={tag} className=" w-fit ">{tag}</Badge>
                                        ))
                                        : typeof post.tag === 'string'
                                            ? post.tag.split(',').map((tag) => (
                                                <Badge variant="outline" badgeColor="black" key={tag}  className=" w-fit">{tag}</Badge>
                                            ))
                                            : null
                                    }
                                </div>}  
                        <div>
                            {/* Commented out "Read More" link for future use */}
                            {/* <Link href={`/blog/${post.slug}`} className="text-brand hidden md:block">Read More</Link> */}
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>

    );
}
