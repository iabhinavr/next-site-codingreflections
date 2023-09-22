import { NextResponse } from 'next/server'
import { parse } from 'node-html-parser';

export const dynamic = 'force-dynamic';

async function getSitemapData() {

    const baseUrl = "https://wp.codingreflections.com/post-sitemap.xml";

    const sitemapData = await fetch(
        baseUrl,
        {
            headers: {
                Accept: "application/xml",
            }
        },
    );

    if (!sitemapData.ok) {
        throw new Error('Failed to fetch sitemap data.');
    }

    return sitemapData;
}

export async function GET(request) {

    const sitemapData = await getSitemapData();

    const xmlText = await sitemapData.text();
    const xmlDoc = parse(xmlText);

    const urlElements = xmlDoc.querySelectorAll("url");

    const urls = Array.from(urlElements).map((urlElement) => {
        const locIn = urlElement.querySelector("loc").textContent;
        const urlReplaced = locIn.replace("https://wp.codingreflections.com", "https://codingreflections.com/blog");
        const loc = urlReplaced.slice(0, -1);
        const lastmod = urlElement.querySelector("lastmod").textContent;

        return { loc, lastmod };
    });

    console.log(urls);

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map((url) => `
    <url>
      <loc>${url.loc}</loc>
      <lastmod>${url.lastmod}</lastmod>
    </url>
  `).join('')}
</urlset>`;

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'text/xml'
        }
    })
}