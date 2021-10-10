export const getUrl = (folderPath='', imgPath) => {
  // console.log(folderPath);
  const modules = import.meta.glob(folderPath)
  return modules[imgPath].default
}
