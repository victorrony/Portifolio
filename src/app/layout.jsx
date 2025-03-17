export const metadata = {
   title: "Portfolio",
   description: "A portfolio site built with React and Next.js",
   image: "/images/og-image.jpg",
   url: "https://portfolio.com",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body>{children}</body>
      </html>
   );
}
