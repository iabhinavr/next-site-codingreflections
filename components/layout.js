import Head from "next/head";
import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

const name = "Your Name";
export const siteTitle = "Coding Reflections";

export default function Layout(props) {
    return (
        <>
            <div className={props.pageType + " bg-slate-900 text-gray-100 font-brand"}>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="description" content="Coding Reflections Blog" />
                    <meta name="og:title" content={siteTitle} />
                    <meta name="twitter:card" content="summary_large_image" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
                    <link rel="manifest" href="/images/site.webmanifest"></link>
                </Head>
                <SiteHeader />
                <main className="">
                    {props.children}
                </main>
                <SiteFooter />
            </div>
        </>
    );
}