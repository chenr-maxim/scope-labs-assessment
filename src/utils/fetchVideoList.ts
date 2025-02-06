import { IVideo } from "../types/components";

export const fetchVideoList = async (userId: string): Promise<IVideo[]> => {
  try {
    const response = await fetch(
      `https://take-home-assessment-423502.uc.r.appspot.com/api/videos?user_id=${userId}`
    );
    if (!response.ok) throw new Error(`Failed to fetch videos`);

    const data = await response.json();
    return data.videos;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Unknown Error");
  }
};
