import { parse } from 'node-html-parser';

export default async function sitemap() {

    const sitemapData = await fetch("https://wp.codingreflections.com/post-sitemap.xml", {
        headers: {
            Accept: "application/xml",
        },
    });


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