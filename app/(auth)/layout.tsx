import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";

import "../globals.css";

export const metadata = {
  title: "Threads",
  description: "Threads app copy",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
