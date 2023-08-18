import Image from "next/image";
import Link from "next/link";

export default function SiteHeader(props) {
    return (
        <header className="border-b-2 border-slate-700 bg-slate-800">
            <div className="container mx-auto lg:max-w-3xl flex justify-between items-stretch">
                <div className="logo-area">
                    <Link className="py-4 block" href="/">
                        <Image src="/images/codingreflections-logo-1.svg" alt="Coding Reflections" width="250" height="40" />
                    </Link>
                </div>
                <nav>
                    <ul className="flex h-full [&>li>a]:flex [&>li>a]:h-full [&>li>a]:px-2 [&>li>a]:items-center [&>li>a:hover]:-translate-y-0.5 [&>li>a:hover]:text-brand-pink [&>li>a]:transition">
                        <li>
                            <Link href="/blog/">Blog</Link>
                        </li>
                        <li>
                            <Link href="/about/">About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            
        </header>
    );
}