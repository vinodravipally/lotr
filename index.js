module.exports = function lotr(string) {
  if (typeof string !== "string") throw new TypeError("lotr wants a string!");
  return string.replace(/\s/g, "");
};
