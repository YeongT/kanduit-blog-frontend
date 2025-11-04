'use client';

import { useState, useEffect } from 'react';

interface LikeButtonProps {
  postId: string;
}

export default function LikeButton({ postId }: LikeButtonProps) {
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // 컴포넌트가 마운트될 때 localStorage에서 데이터 불러오기
  useEffect(() => {
    const savedLikeCount = localStorage.getItem(`likeCount_${postId}`);
    const savedIsLiked = localStorage.getItem(`isLiked_${postId}`);
    
    if (savedLikeCount) {
      setLikeCount(parseInt(savedLikeCount));
    }
    if (savedIsLiked) {
      setIsLiked(savedIsLiked === 'true');
    }
  }, [postId]);

  const handleLike = () => {
    if (!isLiked) {
      const newCount = likeCount + 1;
      setLikeCount(newCount);
      setIsLiked(true);
      
      // localStorage에 데이터 저장
      localStorage.setItem(`likeCount_${postId}`, newCount.toString());
      localStorage.setItem(`isLiked_${postId}`, 'true');
    };
  };

  return (
    <button
      onClick={handleLike}
      className="group flex items-center gap-2 rounded-full bg-gray-50 px-4 py-2 transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <svg
        className={`h-5 w-5 transition-colors ${
          isLiked
            ? 'fill-red-500 text-red-500'
            : 'fill-none text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300'
        }`}
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      <span
        className={`font-medium ${
          isLiked
            ? 'text-red-500'
            : 'text-gray-600 group-hover:text-gray-800 dark:text-gray-400 dark:group-hover:text-gray-300'
        }`}
      >
        {likeCount}
      </span>
    </button>
  );
}