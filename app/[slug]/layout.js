export default function SinglePageLayout({ children }) {
    return (
        <>
        <div className="single-page bg-slate-900 text-gray-100 font-brand">
            {children}
        </div>
        </>
    )
}