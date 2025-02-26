function makeElement(tagName) {
  for(let n=0; n<tagName.length; n++) {
  tagName[n] = document.createElement(tagName[n]);
}};

export { makeElement };