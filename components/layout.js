import Head from "next/head";
import Link from "next/link";
import SiteHeader from "./SiteHeader";

const name = "Your Name";
export const siteTitle = "Coding Reflections";

export default function Layout(props) {
    return (
        <>
            <div className={props.pageType + " bg-slate-900 font-mono text-gray-100"}>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="description" content="Coding Reflections Blog" />
                    <meta property="og:image" content={`https://og-image.vercel.app/${encodeURI(siteTitle,)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}/>
                    <meta name="og:title" content={siteTitle} />
                    <meta name="twitter:card" content="summary_large_image" />
                </Head>
                <SiteHeader />
                <main className="">
                    {props.children}
                </main>
            </div>
        </>
    );
}