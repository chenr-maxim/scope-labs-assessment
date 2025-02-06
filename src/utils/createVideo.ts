export const createVideo = async (
  userId: string,
  title: string,
  description: string,
  videoUrl: string
): Promise<{ success: boolean; data?: string; error?: string }> => {
  try {
    const response = await fetch(
      "https://take-home-assessment-423502.uc.r.appspot.com/api/videos",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: userId,
          title,
          description,
          video_url: videoUrl,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`failed to create video: ${response.statusText}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error("Error creating video:", error);
    throw new Error(error instanceof Error ? error.message : "Unknown Error");
  }
};
