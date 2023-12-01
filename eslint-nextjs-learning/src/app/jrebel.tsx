"use client";
import React, { useEffect, useState } from "react";
import Card from "@/app/card";
import { createVoid } from "@/service/apis";
import { POST } from "@/service/micro-queues";

const prefix = process.env.NEXT_PUBLIC_GREBEL;
const Jrebel = () => {
  const [activeUri, setActiveUri] = useState<string>("");
  useEffect(() => {
    getGuid();
  }, []);
  const getGuid = async () => {
    try {
      const data = await createVoid<{ Guid: string }>(
        POST,
        "https://www.guidgen.com/generate",
      )(undefined, { reject: true });
      if (!data || !data.Guid) throw new Error();
      const guid = data.Guid.toUpperCase();
      const url = `${window.location.origin}/${prefix}/${guid}`;
      setActiveUri(url);
    } catch (e) {
      console.log("获取guid失败");
    }
  };
  return (
    <Card
      flushCode={getGuid}
      mapping={{
        name: "Jrebel",
        activationCode: activeUri,
        iconStyle: {
          backgroundImage: "url('/activation/icons/jrebel-favicon.ico')",
        },
      }}
    />
  );
};

export default Jrebel;
