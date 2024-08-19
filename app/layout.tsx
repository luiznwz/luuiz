import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { VercelToolbar } from "@vercel/toolbar/next";

import "./globals.css";

const inter = Inter({
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
  const shouldInjectToolbar = process.env.NODE_ENV === 'development';
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster richColors />
            {children}
            {shouldInjectToolbar && <VercelToolbar />}
            <SpeedInsights />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
