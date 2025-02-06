import React from "react";

import { IVideo } from "../types/components";
import { fetchVideoList } from "@/utils/fetchVideoList";

import VideoCard from "@/components/VideoCard";
import styles from "../styles/VideoList.module.scss";

const VideoListPage = async () => {
  const videoList = await fetchVideoList("max_chen");

  const videoListLinks = videoList.map((video: IVideo) => {
    return (
      <li key={video.id} className={styles["video-list-item"]}>
        <VideoCard video={video} />
      </li>
    );
  });

  return (
    <div className={styles["video-list-page-container"]}>
      <ul className={styles["video-list"]}>{videoListLinks}</ul>
    </div>
  );
};

export default VideoListPage;
