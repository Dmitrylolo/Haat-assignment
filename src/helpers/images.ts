export const getImageURI = (image?: string | null) => {
  if (!image) return;
  return { uri: process.env.IMAGE_URL! + "/" + image };
};
