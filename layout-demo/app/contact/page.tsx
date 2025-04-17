import Link from "next/link";

export default function ContactPage() {
    return (
        <div>
            <h1>Contact Page</h1>
            <p>This is the contact page of the application.</p>
            <Link href="/contact"></Link>
        </div>
    );
}