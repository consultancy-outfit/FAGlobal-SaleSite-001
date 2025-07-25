import type { Metadata } from "next";
import "@/styles/globals.css";
import RootProvidersLayout from "@/layouts/root-providers-layout";
import { outfitFontFamily } from "@/assets/fonts/outfit";
import { FRONTEND_SALE_SITE_BASE_URL } from "@/configs/env";

export const metadata: Metadata = {
  title: "Identity Gram",
  description: "Powered by Identity Gram",
  icons: {
    icon: [
      { rel: "icon", url: "/favicon.ico", type: "image/x-icon" },
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    apple: {
      rel: "apple-touch-icon.png",
      url: "/apple-touch-icon.png",
      type: "image/png",
      sizes: "180x180",
    },
  },
  openGraph: {
    title: "Identity Gram",
    description: "Powered by Identity Gram",
    type: "website",
    images: [
      {
        url: `${FRONTEND_SALE_SITE_BASE_URL}/og-logo.png`,
        type: "image/png",
        width: 1200,
        height: 630,
        alt: "Powered by Identity Gram",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfitFontFamily.className} subpixel-antialiased`}>
        <RootProvidersLayout>{children}</RootProvidersLayout>
      </body>
    </html>
  );
}
