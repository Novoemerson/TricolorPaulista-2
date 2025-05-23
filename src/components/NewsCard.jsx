import React from "react";

function NewsCard({ title, subtitle, imageUrl }) {
  return (
    <div className="news-card">
      <img src={imageUrl} alt={title} />
      <div className="news-card-content">
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

export default NewsCard;
