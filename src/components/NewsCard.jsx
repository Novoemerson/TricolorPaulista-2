import React from "react";

export default function NewsCard({ title, date, author, image }) {
  return (
    <div style={{
      background: "#f5f5f5",
      border: "1px solid #e0e0e0",
      borderRadius: "8px",
      marginBottom: "1rem",
      padding: "0.9rem 1rem",
      display: "flex",
      alignItems: "center",
      gap: "1rem"
    }}>
      {image && (
        <img
          src={image}
          alt={title}
          style={{
            width: 68,
            height: 68,
            borderRadius: 7,
            background: "#da291c",
            objectFit: "cover"
          }}
        />
      )}
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: "bold", color: "#000", fontSize: "1.08rem", marginBottom: "0.3rem" }}>
          {title}
        </div>
        <div style={{ fontSize: "0.94rem", color: "#666" }}>
          {date} &bull; Por {author}
        </div>
      </div>
    </div>
  );
}
