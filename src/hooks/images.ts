export const useImageSource = (image?: string | null) => {
  return {
    uri: !image ? "data:image/png" : process.env.IMAGE_URL! + "/" + image,
  };
};
