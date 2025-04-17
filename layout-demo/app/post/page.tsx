import Link from "next/link";

export default function PostPage() {
    return (
        <div>
            <h1>Post Page</h1>
            <p>This is the Post page content.</p>
            <Link href="/post"></Link>
        </div>
    );
}