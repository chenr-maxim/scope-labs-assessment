import React from "react";
import Link from "next/link";
import { IVideo } from "@/types/components";

import styles from "../styles/VideoCard.module.scss";

interface VideoCardProps {
  video: IVideo;
}

const VideoCard = ({ video }: VideoCardProps) => {
  // const handleClick = () => {
  //   router.push(`/video/${video.id}`);
  // };

  return (
    <Link href={`/video/${video.id}`} className={styles["video-card-link"]}>
      <div className={styles["video-card-container"]}>
        <video className={styles["video"]} controls preload="metadata">
          <source src={`${video.video_url}#t=0.1`} type="video/mp4" />
        </video>
        <h2>{video.title}</h2>
        <p>{video.description}</p>
      </div>
    </Link>
  );
};

export default VideoCard;
