import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Ahmed | Full-Stack Developer",
  description: "MERN & Next.js Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
