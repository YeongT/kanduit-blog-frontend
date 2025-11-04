'use client';

import { useState, useEffect } from 'react';

interface ReactionButtonsProps {
  postId: string;
}

export default function ReactionButtons({ postId }: ReactionButtonsProps) {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  // 컴포넌트가 마운트될 때 localStorage에서 데이터 불러오기
  useEffect(() => {
    const savedLikeCount = localStorage.getItem(`likeCount_${postId}`);
    const savedDislikeCount = localStorage.getItem(`dislikeCount_${postId}`);
    const savedIsLiked = localStorage.getItem(`isLiked_${postId}`);
    const savedIsDisliked = localStorage.getItem(`isDisliked_${postId}`);
    
    if (savedLikeCount) setLikeCount(parseInt(savedLikeCount));
    if (savedDislikeCount) setDislikeCount(parseInt(savedDislikeCount));
    if (savedIsLiked) setIsLiked(savedIsLiked === 'true');
    if (savedIsDisliked) setIsDisliked(savedIsDisliked === 'true');
  }, [postId]);

  const handleLike = () => {
    setIsDisliked(false);
    setIsLiked(!isLiked);
    
    // 좋아요 토글
    const newLikeCount = isLiked ? likeCount - 1 : likeCount + 1;
    setLikeCount(newLikeCount);
    
    // 싫어요가 활성화되어 있었다면 취소
    if (isDisliked) {
      setDislikeCount(dislikeCount - 1);
      setIsDisliked(false);
      localStorage.setItem(`dislikeCount_${postId}`, (dislikeCount - 1).toString());
      localStorage.setItem(`isDisliked_${postId}`, 'false');
    }
    
    // localStorage에 상태 저장
    localStorage.setItem(`likeCount_${postId}`, newLikeCount.toString());
    localStorage.setItem(`isLiked_${postId}`, (!isLiked).toString());
  };

  const handleDislike = () => {
    setIsLiked(false);
    setIsDisliked(!isDisliked);
    
    // 싫어요 토글
    const newDislikeCount = isDisliked ? dislikeCount - 1 : dislikeCount + 1;
    setDislikeCount(newDislikeCount);
    
    // 좋아요가 활성화되어 있었다면 취소
    if (isLiked) {
      setLikeCount(likeCount - 1);
      setIsLiked(false);
      localStorage.setItem(`likeCount_${postId}`, (likeCount - 1).toString());
      localStorage.setItem(`isLiked_${postId}`, 'false');
    }
    
    // localStorage에 상태 저장
    localStorage.setItem(`dislikeCount_${postId}`, newDislikeCount.toString());
    localStorage.setItem(`isDisliked_${postId}`, (!isDisliked).toString());
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={handleLike}
        className={`group flex items-center gap-2 rounded-full px-4 py-2 transition-colors ${
          isLiked
            ? 'bg-blue-100 dark:bg-blue-900'
            : 'bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700'
        }`}
      >
        <svg
          className={`h-5 w-5 transition-colors ${
            isLiked
              ? 'text-blue-500'
              : 'text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300'
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
          />
        </svg>
        <span
          className={`font-medium ${
            isLiked
              ? 'text-blue-500'
              : 'text-gray-600 group-hover:text-gray-800 dark:text-gray-400 dark:group-hover:text-gray-300'
          }`}
        >
          {likeCount}
        </span>
      </button>

      <button
        onClick={handleDislike}
        className={`group flex items-center gap-2 rounded-full px-4 py-2 transition-colors ${
          isDisliked
            ? 'bg-red-100 dark:bg-red-900'
            : 'bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700'
        }`}
      >
        <svg
          className={`h-5 w-5 transition-colors ${
            isDisliked
              ? 'text-red-500'
              : 'text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300'
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v2a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5 6h2a2 2 0 002-2v-6a2 2 0 00-2-2h-2.5"
          />
        </svg>
        <span
          className={`font-medium ${
            isDisliked
              ? 'text-red-500'
              : 'text-gray-600 group-hover:text-gray-800 dark:text-gray-400 dark:group-hover:text-gray-300'
          }`}
        >
          {dislikeCount}
        </span>
      </button>
    </div>
  );
}