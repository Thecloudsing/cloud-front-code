"use client";
import React from "react";
import useApi from "@/hooks/useApi";
import { testApi } from "@/service/apis";

const Page = () => {
  const { isLoading, error, send, data, sendHttp } =
    useApi<(string | number | undefined)[]>();
  // const [data, setData] = React.useState<string>("");
  const onRefresh = () => {
    // console.log(process.env.NEXT_PUBLIC_API_PREFIX);
    console.log();
    // testApi.error({ name: "ddd" }).then((r) => {
    //   console.log(r);
    // });
    // console.log(testApi.test.name);
    // console.log(testApi.test.toString());
    // getFunctionHash(testApi.test).then((res) => console.log(res));
    // sendHttp(testApi.error({ name: "42152" }));
    // send(testApi.test, { name: "wnigvoiws" });
    // send(testApi.redirect, { name: "redirect is sd" });
    // send(testApi.test, { name: "dddd" });
    // .then((res) => {
    // setData(res as string);
    // });
    sendHttp(
      Promise.all([
        // testApi.test({ name: "rrr" }),
        testApi.user({ name: "是扶苏呀" }),
      ]),
    );
  };
  if (isLoading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <div>123</div>
      <div>数据 =&gt; {data}</div>
      <div>状态 =&gt; {isLoading}</div>
      <div>错误 =&gt; {JSON.stringify(error)}</div>
      <div>
        <button onClick={onRefresh}>点击刷新</button>
      </div>
    </div>
  );
};

export default Page;
