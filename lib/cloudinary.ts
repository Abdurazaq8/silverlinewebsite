/**
 * Cloudinary configuration and helpers for Next.js.
 * Used for optimized images/videos and optional server-side upload.
 */

export const cloudinaryConfig = {
  cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? "",
  apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY ?? "",
  apiSecret: process.env.CLOUDINARY_API_SECRET ?? "",
} as const;

/** Hero background video public ID (Media Library) */
export const HERO_VIDEO_ID = "Hero_video_pk3lc1";

/** Base URL for Cloudinary delivery (images/videos) */
export function getCloudinaryUrl(publicId: string, options?: { type?: "image" | "video"; transformations?: string }) {
  const cloudName = cloudinaryConfig.cloudName;
  if (!cloudName) return "";
  const resource = options?.type === "video" ? "video" : "image";
  const trans = options?.transformations ? `/upload/${options.transformations}` : "/upload";
  return `https://res.cloudinary.com/${cloudName}/${resource}${trans}/${publicId}`;
}

/** Lightweight hero MP4 (~3MB): 854px, 24fps, no audio, eco encode */
export function getHeroVideoUrl() {
  return getCloudinaryUrl(HERO_VIDEO_ID, {
    type: "video",
    transformations: "f_mp4,vc_h264:baseline:3.0,q_40,w_854,c_limit,ac_none,fps_24",
  });
}

/** Poster frame from the same hero video (small JPEG) */
export function getHeroPosterUrl() {
  return getCloudinaryUrl(HERO_VIDEO_ID, {
    type: "video",
    transformations: "so_0,w_854,c_limit,q_auto:eco,f_jpg",
  });
}

/** Check if Cloudinary is configured (for conditional features) */
export function isCloudinaryConfigured(): boolean {
  return Boolean(cloudinaryConfig.cloudName);
}
