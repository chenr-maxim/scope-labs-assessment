import { IComment } from "@/types/components";

export const fetchVideoComments = async (id: string): Promise<IComment[]> => {
  try {
    const response = await fetch(
      `https://take-home-assessment-423502.uc.r.appspot.com/api/videos/comments?video_id=${id}`
    );
    if (!response.ok) return [] as IComment[];

    const data = await response.json();
    return data.comments ?? [];
  } catch (error) {
    console.error("Error fetching video comments:", error);
    return [] as IComment[];
  }
};
