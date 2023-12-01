// 使用哈希函数生成函数的唯一值
export async function getFunctionHash(func: Function) {
  const str = func.toString();
  let hash;

  if (typeof window === "undefined") {
    // Node.js 环境
    const crypto = require("crypto");
    hash = crypto.createHash("sha1");
    hash.update(str);
    hash = hash.digest("hex");
  } else {
    // 浏览器环境
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const digest = await window.crypto.subtle.digest("SHA-1", data);
    hash = Array.from(new Uint8Array(digest))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  }

  return hash;
}
// 获取函数的名称
export function getFunctionName(func: Function) {
  return func.name;
}
