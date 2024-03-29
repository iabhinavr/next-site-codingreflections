import { parse } from 'node-html-parser';
import { URL } from 'url';

async function getSitemapData() {
    const timestamp = new Date().getTime();
    const baseUrl = "https://wp.codingreflections.com/post-sitemap.xml";

    const urlObj = new URL(baseUrl);
    urlObj.searchParams.set("timestamp", timestamp);

    const fetchUrl = urlObj.toString();

    console.log(fetchUrl);

    const sitemapData = await fetch(
        fetchUrl, 
        {
            headers: {
                Accept: "application/xml",
            },
            cache: 'no-store'
        },
    );

    if(!sitemapData.ok) {
        throw new Error('Failed to fetch sitemap data.');
    }

    return sitemapData;
}

export default async function sitemap() {

    const sitemapData = await getSitemapData();

    const xmlText = await sitemapData.text();
    const xmlDoc = parse(xmlText);

    const urlElements = xmlDoc.querySelectorAll("url");

    const urls = Array.from(urlElements).map((urlElement) => {
        const locIn = urlElement.querySelector("loc").textContent;
        const urlReplaced = locIn.replace("https://wp.codingreflections.com", "https://codingreflections.com/blog");
        const loc = urlReplaced.slice(0, -1);
        const lastmod = urlElement.querySelector("lastmod").textContent;
        const lastModified = new Date(lastmod);

        return { url: loc, lastModified };
    });

    return urls;
}