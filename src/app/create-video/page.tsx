"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createVideo } from "@/utils/createVideo";

import styles from "./create-video-page.module.scss";

const initialFormState = {
  title: "",
  description: "",
  video_url: "",
};

const CreateVideoPage = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState(initialFormState);
  const [success, setSuccess] = useState(true);
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { title, description, video_url } = formData;
    const newErrors = {
      title: title ? "" : "Title is required",
      description: description ? "" : "Description is required",
      video_url: video_url ? "" : "Video URL is required",
    };

    setErrors(newErrors);
    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    const response = await createVideo(
      "max_chen",
      title,
      description,
      video_url
    );
    if (response.success) {
      setFormData(initialFormState);
      setErrors(initialFormState);
      setSuccess(true);

      setTimeout(() => {
        router.push("/");
      }, 3500);
    }
  };

  return (
    <form className={styles["form-container"]} onSubmit={handleSubmit}>
      <h2>Create a new Video</h2>
      <div className={styles["input-group"]}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <p
          className={`${styles["error-message"]} ${
            errors.title ? styles["visible"] : ""
          }`}>
          {errors.title || ""}
        </p>
      </div>
      <div className={styles["input-group"]}>
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <p
          className={`${styles["error-message"]} ${
            errors.description ? styles["visible"] : ""
          }`}>
          {errors.description || ""}
        </p>
      </div>
      <div className={styles["input-group"]}>
        <input
          type="text"
          name="video_url"
          placeholder="Video URL"
          value={formData.video_url}
          onChange={handleChange}
        />
        <p
          className={`${styles["error-message"]} ${
            errors.video_url ? styles["visible"] : ""
          }`}>
          {errors.video_url || ""}
        </p>
      </div>

      {success && (
        <p className={styles["success-message"]}>
          Video created successfully! Redirecting..
        </p>
      )}

      <div className={styles["button-row"]}>
        <button
          type="button"
          className={styles["back-button"]}
          onClick={() => router.back()}>
          Back
        </button>
        <button type="submit">Create Video</button>
      </div>
    </form>
  );
};

export default CreateVideoPage;
