export const createVideoComment = async (
  id: string,
  content: string
): Promise<{ success: boolean; message?: string }> => {
  try {
    const response = await fetch(
      "https://take-home-assessment-423502.uc.r.appspot.com/api/videos/comments",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          video_id: id,
          content: content,
          user_id: "max_chen",
        }),
      }
    );

    if (!response.ok) {
      return { success: false, message: `Error: ${response.statusText}` };
    }

    return { success: true };
  } catch (error) {
    console.error("Error creating comment:", error);
    throw new Error(error instanceof Error ? error.message : "Unknown Error");
  }
};
