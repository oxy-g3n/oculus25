export const metadata = {
  title: 'Oculus Playground',
  description: 'Interactive fluid simulation playground for Oculus, SPIT\'s annual techno-cultural fest',
}

export default function PlaygroundLayout({ children }) {
  return (
    <div className="overflow-hidden">
      {children}
    </div>
  );
} 