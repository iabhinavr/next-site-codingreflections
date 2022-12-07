import Image from "next/image";
import Link from "next/link";

export default function FeaturedImage(props) {
    let img = '';
    const defaultFeaturedImage = "https://wp.codingreflections.com/wp-content/uploads/2022/09/code-2.jpg";
    const defaultWidth = "600";
    const defaultHeight = "400";
  
    if(props.post.featuredImage) {
      let size = props.post.featuredImage.node.mediaDetails.sizes[0];
       img = {
        src: size.sourceUrl,
        width: size.width,
        height: size.height,
      }
    }
    else {
      img = {
        src: defaultFeaturedImage,
        width: defaultWidth,
        height: defaultHeight,
      }
    }

    img.src = img.src.replace("https://wp.codingreflections.com/wp-content/uploads", "https://cdn-1.codingreflections.com");
  
    return (
      <Link href={`/blog/${props.post.slug}`}>
        <Image className="rounded-t-xl" width={img.width} height={img.height} src={img.src} alt={props.post.title} />
      </Link>
    );
}