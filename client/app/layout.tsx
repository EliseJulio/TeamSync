import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import UserProvider from "@/providers/UserProvider";
import { Inter } from "next/font/google";
import MiniSidebar from "./Components/MiniSidebar/MiniSidebar";
import Header from "./Components/Header/Header";
import MainContentLayout from "@/providers/MainContentLayout";
import SidebarProvider from "@/providers/SidebarProvider";
import MainLayout from "@/providers/MainLayout";
import GTMInitialiser from "@/providers/GTMInitialiser";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TeamSync",
  description: "Manage tasks among Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GTMInitialiser />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={inter.className}>
        <UserProvider>
          <Toaster position="top-center" />

          <div className="h-full flex overflow-hidden">
            <MiniSidebar />
            <div className="flex-1 flex flex-col">
              <Header />
              <MainContentLayout>
                <MainLayout>{children}</MainLayout>
                <SidebarProvider />
              </MainContentLayout>
            </div>
          </div>
        </UserProvider>
      </body>
    </html>
  );
}
