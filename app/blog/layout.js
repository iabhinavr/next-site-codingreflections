import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export default function BlogLayout({ children }) { 
    return (
        <>
        <SiteHeader />
        <div className="blog">
            { children }
        </div>
        <SiteFooter />
        </>
    )
}