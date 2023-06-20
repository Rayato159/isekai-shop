import type { IBlog, IBlogDatum } from "../../../lib/blog.interface";

export async function load({ params }: { params: { slug: string } }): Promise<IBlog> {
    const response = await fetch(`http://localhost:1323/posts/${params.slug}`);
    
    if (response.status != 200) {
        const err = await response.json()
        throw new Error(err.message);
    }
    
    const data: IBlogDatum = await response.json();
    
    return {
        post: {
            ...data
        },
    };
}