type FirstGeneric<T> = T extends (infer U)[]
  ? U
  : T extends (...args: any[]) => infer U
    ? U
    : T extends Promise<infer U>
      ? U
      : T;

// 获取类型的第二个泛型参数
// type SecondGeneric<T> = T extends (infer U, infer V)[]
//   ? V
//   : T extends (...args: any[]) => infer U
//     ? U
//     : T extends Promise<infer U, infer V>
//       ? V
//       : T;

type SecondGeneric<T> = T extends [infer U, infer V]
  ? V
  : T extends (arg1: any, arg2: infer U) => any
    ? U
    : never;
