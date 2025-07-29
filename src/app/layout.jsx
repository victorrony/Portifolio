export const metadata = {
   title: {
      default: "Victor Fernandes - Full Stack Developer Portfolio",
      template: "%s | Victor Fernandes"
   },
   description: "Desenvolvedor Full Stack apaixonado por tecnologia, especializado em React, Next.js, Node.js e design responsivo. Explore meus projetos e experiências.",
   keywords: [
      "Victor Fernandes",
      "desenvolvedor full stack",
      "React",
      "Next.js",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "portfolio",
      "web development",
      "frontend",
      "backend"
   ],
   authors: [{ name: "Victor Fernandes", url: "https://github.com/victorrony" }],
   creator: "Victor Fernandes",
   publisher: "Victor Fernandes",
   formatDetection: {
      email: false,
      address: false,
      telephone: false,
   },
   metadataBase: new URL("https://portifolio-victorrony.vercel.app"),
   alternates: {
      canonical: "/",
   },
   openGraph: {
      type: "website",
      locale: "pt_BR",
      url: "https://portifolio-victorrony.vercel.app",
      siteName: "Victor Fernandes Portfolio",
      title: "Victor Fernandes - Full Stack Developer Portfolio",
      description: "Desenvolvedor Full Stack especializado em React, Next.js e Node.js. Veja meus projetos e experiências.",
      images: [
         {
            url: "/og-image.jpg",
            width: 1200,
            height: 630,
            alt: "Victor Fernandes - Full Stack Developer",
         },
      ],
   },
   twitter: {
      card: "summary_large_image",
      title: "Victor Fernandes - Full Stack Developer",
      description: "Desenvolvedor Full Stack especializado em React, Next.js e Node.js",
      images: ["/og-image.jpg"],
   },
   robots: {
      index: true,
      follow: true,
      googleBot: {
         index: true,
         follow: true,
         "max-video-preview": -1,
         "max-image-preview": "large",
         "max-snippet": -1,
      },
   },
   verification: {
      google: "your-google-verification-code",
   },
};

export default function RootLayout({ children }) {
   return (
      <html lang="pt-BR">
         <head>
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="manifest" href="/manifest.json" />
            <meta name="theme-color" content="#050816" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
            
            {/* Structured Data */}
            <script
               type="application/ld+json"
               dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                     "@context": "https://schema.org",
                     "@type": "Person",
                     name: "Victor Fernandes",
                     jobTitle: "Full Stack Developer",
                     url: "https://portifolio-victorrony.vercel.app",
                     sameAs: [
                        "https://github.com/victorrony",
                        "https://www.linkedin.com/in/victorfernandes-a41030262/"
                     ],
                     worksFor: {
                        "@type": "Organization",
                        name: "Freelancer"
                     },
                     knowsAbout: [
                        "JavaScript",
                        "React",
                        "Next.js",
                        "Node.js",
                        "TypeScript",
                        "Full Stack Development"
                     ]
                  })
               }}
            />
         </head>
         <body className="antialiased">
            {children}
         </body>
      </html>
   );
}
