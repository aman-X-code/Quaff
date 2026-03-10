import "./globals.css";

export const metadata = {
  title: "Quaff Brewing Co. | Upscale Brewpub in DLF Cyber Hub, Gurgaon",
  description:
    "Quaff Brewing Co. is an upscale brewpub located in DLF Cyber Hub, Gurgaon. Experience the finest craft brews, gourmet food, and vibrant nightlife in the heart of Gurgaon.",
  keywords:
    "Quaff Brewing Co, brewpub, craft beer, DLF Cyber Hub, Gurgaon, bar, restaurant, nightlife",
  openGraph: {
    title: "Quaff Brewing Co. | Finest Craft Brews in Gurgaon",
    description:
      "Experience the finest craft brews and gourmet gastropub cuisine at Quaff Brewing Co., DLF Cyber Hub, Gurgaon.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Outfit:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Boldonse&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
