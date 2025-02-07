'use client'

export default function CustomHTMLPage() {
  return (
    <div style={{ overflow: "hidden", width: "100%", height: "600px" }}>
      <iframe
        src="/shooting-star/index.html"
        width="100%"
        height="600px"
        style={{
          border: "none",
          overflow: "hidden",
          width: "100%",
          height: "600px",
        }}
        scrolling="no"
      >
      </iframe>
    </div>
  );
}
