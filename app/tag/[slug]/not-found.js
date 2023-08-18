import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <h1>The page you requested does not exist</h1>
            <Link href="/blog">Return to home</Link>
        </div>
    )
}