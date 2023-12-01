export const splitText = (text: string, maxLength: number) => {
  const textArr: string[] = [];
  let line = "";
  let lineLength = 0;
  let dIndex = -1;
  let gIndex = -1;
  let flag = false;
  let relativeIndex = 0;
  const restart = (idx: number) => {
    const index = idx + 1;
    textArr.push(line.substring(0, index));
    line = line.substring(index);
    lineLength = line.length;
    relativeIndex -= index;
    flag = false;
    gIndex = -1;
  };
  text.split("").forEach((char, index) => {
    lineLength += 1;
    line += char;
    if (char === "，" || char === ",") {
      dIndex = relativeIndex;
    }
    if (char === "。" || char === ".") {
      gIndex = relativeIndex;
    }
    if (lineLength >= maxLength) {
      flag = true;
    }
    if (flag && gIndex !== -1) {
      restart(gIndex);
      dIndex = gIndex > dIndex ? -1 : dIndex - index;
    }
    if (flag && dIndex !== -1) {
      restart(dIndex);
      dIndex = -1;
    }
    if (text.length - 1 === index) {
      line && textArr.push(line);
    }
    relativeIndex++;
  });
  return textArr;
};
