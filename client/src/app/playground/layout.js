export const metadata = {
  title: 'Oculus Playground',
  description: 'Interactive fluid simulation playground for Oculus, SPIT\'s annual techno-cultural fest',
}

export default function PlaygroundLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-hidden">
        {children}
      </body>
    </html>
  );
} 