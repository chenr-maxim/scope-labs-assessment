"use client";

import React, { useState } from "react";
import { IComment } from "@/types/components";

import styles from "../styles/CommentList.module.scss";
import { createVideoComment } from "@/utils/createVideoComment";

interface CommentListProps {
  comments: IComment[];
  id: string;
}

const CommentList = ({ comments: initialComments, id }: CommentListProps) => {
  const [comments, setComments] = useState<IComment[]>(initialComments);
  const [newComment, setNewComment] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newComment.trim()) return;
    setNewComment("");

    const response = await createVideoComment(id, newComment);

    if (response.success) {
      const newCommentObject: IComment = {
        id: Date.now().toString(),
        content: newComment,
        user_id: "max_chen",
        video_id: id,
        created_at: new Date().toISOString(),
      };

      setComments((prevComments) => [...prevComments, newCommentObject]);
      setNewComment("");
    }
  };

  return (
    <div className={styles["comment-list-container"]}>
      {!comments.length ? (
        <p className={styles["no-comments"]}>No comments yet.</p>
      ) : (
        <ul className={styles["comment-list"]}>
          {comments.map((comment) => {
            return (
              <li className={styles["comment-item"]} key={comment.id}>
                <p className={styles["comment-user"]}>{comment.user_id}</p>
                <p className={styles["comment-content"]}>{comment.content}</p>
              </li>
            );
          })}
        </ul>
      )}
      <form className={styles["comment-input-field"]} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write a comment..."
          value={newComment}
          onChange={handleInputChange}
        />
        <button type="submit">send</button>
      </form>
    </div>
  );
};

export default CommentList;
