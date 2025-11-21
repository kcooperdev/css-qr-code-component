import "./globals.css";

export const metadata = {
  title: "Frontend Mentor | QR code component",
  description: "Improve your front-end skills by building projects",
  icons: {
    icon: "/images/favicon-32x32.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
