export const getUrl = (prePath, imgPath) => {
  return new URL(prePath + imgPath, import.meta.url).href
}
