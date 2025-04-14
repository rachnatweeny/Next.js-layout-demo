export default function BlogPost({ params }: { params: { slug: string } }) {
    return (
        <div>
            <h1>Blog Post: {params.slug}</h1>
            <p>This is the content of the blog post.</p>
        </div>
    );
}