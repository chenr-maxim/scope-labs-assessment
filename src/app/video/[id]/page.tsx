import React from "react";
import { notFound } from "next/navigation";
import CommentList from "@/components/CommentList";
import { fetchVideo } from "@/utils/fetchVideo";
import { fetchVideoComments } from "@/utils/fetchVideoComments";

import styles from "./video-page.module.scss";

const page = async ({ params }: { params: { id: string } }) => {
  const resolvedParams = await params;
  const video = await fetchVideo(resolvedParams.id);
  const comments = await fetchVideoComments(resolvedParams.id);

  if (!video) return notFound();

  return (
    <div className={styles["video-page-container"]}>
      <div className={styles["video-container"]}>
        <h1>{video.title}</h1>
        <video
          width={500}
          className={styles["video"]}
          controls
          preload="metadata">
          <source src={video.video_url} type="video/mp4" />
        </video>
        <div className={styles["video-description-container"]}>
          <label className={styles["video-description-label"]}>
            Description
          </label>
          <p>{video.description}</p>
        </div>
      </div>
      <div className={styles["video-comments"]}>
        <h2>Comments</h2>
        <CommentList comments={comments} id={resolvedParams.id} />
      </div>
    </div>
  );
};

export default page;
