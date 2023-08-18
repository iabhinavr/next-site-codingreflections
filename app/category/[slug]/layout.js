import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

export default function CategoryRootLayout({ children })  {
    return (
        <>
        <SiteHeader />
        <div className="category-page">
            { children }
        </div>
        <SiteFooter />
        </>
    )
}