import { IVideo } from "@/types/components";

export const fetchVideo = async (id: string): Promise<IVideo | null> => {
  try {
    const response = await fetch(
      `https://take-home-assessment-423502.uc.r.appspot.com/api/videos/single?video_id=${id}`
    );
    if (!response.ok) return null;

    const { video } = await response.json();
    return video;
  } catch (error) {
    console.error("Error fetch video:", error);
    throw new Error(error instanceof Error ? error.message : "Unknown Error");
  }
};
