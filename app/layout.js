export const metadata = {
  title: "Hello World Corp | IT Consulting & Web Development",
  description: "Hello World Corp helps businesses build fast, secure, and scalable digital products.",
  openGraph: {
    title: "Hello World Corp",
    description: "IT Consulting & Web Development — From Ideas to the World",
    url: "https://example.com",
    siteName: "Hello World Corp",
    images: ["/og-image.png"],
    type: "website",
  },
};

import "./../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0A192F] text-white">{children}</body>
    </html>
  );
}
