import "../styles/globals.css";
import "../styles/prism-theme.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-slate-900 text-slate-100 font-brand">{children}</body>
        </html>
    )
}