import { useState } from 'react';
import './LikeButton.css';

interface LikeButtonProps {
  initialLikes: number;
}

const LikeButton = ({ initialLikes }: LikeButtonProps) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  return (
    <button 
      className={`like-button ${isLiked ? 'liked' : ''}`}
      onClick={handleLike}
      aria-label="Like"
    >
      <span className="heart-icon">{isLiked ? '❤️' : '🤍'}</span>
      <span className="like-count">{likes}</span>
    </button>
  );
};

export default LikeButton;
