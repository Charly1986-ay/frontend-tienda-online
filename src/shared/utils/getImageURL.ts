export const getImageURL = (imageURL?: string | null): string => {
  const IMAGE_URL = import.meta.env.VITE_IMAGE_URL || '';

  if (imageURL) {
    return `${IMAGE_URL}/${imageURL}`;
  }
  return `${IMAGE_URL}/not-photo_512.png`;
}