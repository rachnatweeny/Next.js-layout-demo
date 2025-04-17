import Link from "next/link";

export default function DocsPage() {
    return (
        <div>
            <h1>Welcome to the Docs Page</h1>
            <p>This is the documentation section of the application.</p>
            <Link href="/docs"></Link>
        </div>
    );
}