export const trimString = (string, maxLength) => {
  if (string.length <= maxLength) return string.slice(0, maxLength) + "...";
};
