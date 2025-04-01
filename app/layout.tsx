import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { FooterSection } from "@/components/layout/sections/footer";
const inter = Inter({ subsets: ["latin"] });
import { CookieConsent } from "@/components/cookie-consent/cookie-consent";
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'
// import Image from "next/image";

// export const metadata: Metadata = {
//   title: "Grimo - Reimagine Word Processor",
//   description: "Your All-in-one Writing Interface for Better Writing",
// };

export const metadata: Metadata = {
  metadataBase: new URL("https://grimo.ai"),
  title: {
    template: "%s | Grimo",
    default: "Grimo - Cursor for Writing",
  },
  description: "The most powerful AI text editor. Coherent editing. Customized styling. Collaborate seamlessly.",
};

/**
 * RootLayout component that sets up the main HTML structure for the application.
 *
 * @param {Readonly<{ children: React.ReactNode }>} props - The props object containing children elements.
 * @returns {JSX.Element} The root layout component.
 *
 * @example
 * ```tsx
 * <RootLayout>
 *   <YourComponent />
 * </RootLayout>
 * ```
 *
 * @remarks
 * This component includes:
 * - HTML structure with language set to "pt-br".
 * - A script for tracking SDK.
 * - Google Analytics integration.
 * - ThemeProvider for managing themes.
 * - Navbar and FooterSection components.
 * - CookieConsent component.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        <Script id="track-sdk" strategy="afterInteractive">
          {`(function(siteId){window.__track_sdk__=window.__track_sdk__||{temp:[],report:function(){this.temp.push([].slice.call(arguments))},};(function(doc,tagName){var ele=doc.getElementsByTagName(tagName)[0];function onLoad(){if(window.__track_sdk__){window.__track_sdk__.setDefaultConfig({siteId:siteId,})}}function insert(){var s=document.createElement('script');s.type='text/javascript';s.async=true;s.src='https://vr.leadsnavi.com/track-sdk.js';s.onload=onLoad;ele.parentNode.insertBefore(s,ele)}insert()})(document,'script')})('5296e5ad53b64d5ab1dc705d1985713c')`}
        </Script>
      </head>
      <GoogleAnalytics gaId="G-LSS1NX4GNQ" />
      <body className={cn("min-h-screen bg-sidebar-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="min-h-screen py-8 md:py-16 flex-grow">{children}</div>
          <FooterSection />
        </ThemeProvider>
        <CookieConsent />
      </body>
    </html>
  );
}
