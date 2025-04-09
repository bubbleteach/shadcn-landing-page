
export type Post = {
    slug: string;
    title: string;
    date: string;
    tag: string;
    excerpt?: string;
    // ogImage: {
    //     url: string;
    // };
    content: string;
    //   preview?: boolean;
};