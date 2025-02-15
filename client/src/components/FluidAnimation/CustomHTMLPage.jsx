'use client'

export default function CustomHTMLPage() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-white">
      <iframe
        src="/fluid-animation/index.html"
        className="w-full h-full border-none"
        scrolling="yes"
      />
    </div>
  );
}