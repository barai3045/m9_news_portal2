import "./globals.css";
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-200">{children}</body>
    </html>
  );
}
