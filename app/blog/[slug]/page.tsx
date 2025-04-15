import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "../../../lib/api";
import markdownToHtml from "../../../lib/markdownToHtml";

export default async function Post({ params }: Params) {
    const post = getPostBySlug(params.slug, "_blog");

    if (!post) {
        return notFound();
    }

    const content = await markdownToHtml(post.content || "");

    return (
        // <div className="min-h-screen py-8 md:py-16 flex-grow">
            <main className="container prose dark:prose-invert" style={{ backgroundColor: 'unset' }}>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </main >
        // </div>
    );
}

type Params = {
    params: {
        slug: string;
    };
};

export function generateMetadata({ params }: Params): Metadata {
    const post = getPostBySlug(params.slug, "_blog");

    if (!post) {
        return notFound();
    }

    const title = `${post.title}`;
    const description = `${post.excerpt}`;

    return {
        title,
        description,
        openGraph: {
            title,
            //   images: [post.ogImage.url],
        },
    };
}

export async function generateStaticParams() {
    const posts = getAllPosts("_blog");

    return posts.map((post) => ({
        slug: post.slug,
    }));
}