import React from "react";

interface ArticleCardProps {
  title: string;
  author: string;
  onApprove: () => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  author,
  onApprove,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>By {author}</p>

      <button onClick={onApprove}>
        Approve
      </button>
    </div>
  );
};

export default ArticleCard;