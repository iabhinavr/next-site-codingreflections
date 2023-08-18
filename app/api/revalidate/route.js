import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET (request) {

    // let slug = request.nextUrl.searchParams.get('slug');
    let path = '';

    if(request.nextUrl.searchParams.get('type') === 'post') {
        path = '/blog/[slug]';
    }
    else if(request.nextUrl.searchParams.get('type') === 'page') {
        path = '/[slug]';
    }
    else if(request.nextUrl.searchParams.get('type') === 'home') {
        path = '/blog';
    }

    if (request.nextUrl.searchParams.get('secret') !== process.env.REVALIDATION_SECRET) {
        return NextResponse.json({ message: 'Invalid token' });
    }

    try {
        revalidatePath(path);
        return NextResponse.json({ revalidated: true, path: path, now: Date.now() });
    }
    catch (err) {
        return NextResponse.json({ revalidated: false, message: err.message, status: 400 });
    }
}