import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "履修候補ピッカー",
  description: "弘前大学理工学部の学生向け履修候補絞り込みプロトタイプ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-gray-50 text-gray-900 antialiased">{children}</body>
    </html>
  );
}
