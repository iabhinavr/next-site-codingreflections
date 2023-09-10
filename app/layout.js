import "./global.css";

import { Crimson_Pro, Fira_Code } from "next/font/google";

const crimson_pro = Crimson_Pro({
    subsets: ["latin"], 
    display: "swap",
    variable: "--font-crimsonpro"
});

const fira_code = Fira_Code({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-firacode"
});

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${crimson_pro.variable} ${fira_code.variable}`}>
            <body className="bg-slate-900 text-slate-100">{children}</body>
        </html>
    )
}