import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hnjfsy.cn"),
  title: "海南金丰石油化工有限公司 | Hainan Jinfeng Petrochemical",
  description:
    "EN590 diesel, crude oil and LNG supply-chain services for international buyers, with resource coordination, trade execution and delivery support.",
  icons: {
    icon: "/images/jinfeng-logo.jpg",
    shortcut: "/images/jinfeng-logo.jpg",
  },
  openGraph: {
    type: "website",
    title: "Hainan Jinfeng Petrochemical",
    description: "Reliable energy flows. Disciplined global delivery.",
    images: [
      {
        url: "/og.png",
        width: 1730,
        height: 909,
        alt: "Hainan Jinfeng Petrochemical — EN590, crude oil and LNG",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hainan Jinfeng Petrochemical",
    description: "Reliable energy flows. Disciplined global delivery.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
