import type { Metadata } from "next";
import { APP_NAME, APP_DESCRIPTION } from "@/lib/constants";
import { AuthProvider } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: `${APP_NAME} — ${APP_DESCRIPTION}`,
  description: "Generate stunning affiliate videos with AI. Create, share, and earn with BrokoLink.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
