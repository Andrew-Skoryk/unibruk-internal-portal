import type { Metadata } from "next";
import { Manrope, Unbounded } from "next/font/google";
import TopNav from "@/components/TopNav";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Unibruk | Внутрішній портал",
  description:
    "Внутрішній портал Unibruk для відділу збуту та реалізації продукції.",
  icons: {
    icon: "/brand/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${unbounded.variable} ${manrope.variable} antialiased`}
      >
        <div className="relative">
          <TopNav />
          {children}
        </div>
      </body>
    </html>
  );
}
