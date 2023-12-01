export const debounce = (fn: (...args: any) => void, delay: number = 500) => {
  let timer: NodeJS.Timeout;
  return function (...args: any) {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      // @ts-ignore
      fn.apply(this, args);
    }, delay);
  };
};
export const throttle = (
  fn: (...args: any) => void,
  delay: number = 500,
  immediately: "timestamp" | "setTimeout" = "timestamp",
) => {
  let timestamp: number;
  let timer: NodeJS.Timeout;
  if (immediately === "timestamp") {
    return function (...args: any) {
      if (timestamp && Date.now() - timestamp < delay) return;
      timestamp = Date.now();
      // @ts-ignore
      fn.apply(this, args);
    };
  } else {
    return function (...args: any) {
      if (timer) return;
      timer = setTimeout(() => {
        // @ts-ignore
        fn.apply(this, args);
      }, delay);
    };
  }
};
