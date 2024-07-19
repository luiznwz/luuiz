import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Roboto } from "next/font/google";

import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`${roboto.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="white"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <SpeedInsights />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
