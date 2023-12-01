import React from "react";
import styles from "./page.module.css";
import Card from "@/app/card";
import { getMapping } from "@/activation/mapping";
import Jrebel from "@/app/jrebel";
import Link from "next/link";
import Poetry, { RoselleFu } from "@/app/poetry";
import Code from "@/app/activation/code";

const Page = () => {
  const data = getMapping();
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <p>
          下载&nbsp;
          <Link href={"/activation/plugins/dreams-jetbra.zip"}>jetbra.zip</Link>
          &nbsp;
          并按照自述文件中的说明进行配置.txt！仅用于测试目的，不用于商业用途！
          请注意，这只是一个个人页面，不是官方网站！
        </p>
      </header>
      {/*<Code />*/}
      <div className={styles.grid}>
        <Jrebel />
        {Object.keys(data).map((key) => {
          return <Card key={key} mapping={data[key]} />;
        })}
      </div>
      <Poetry poems={RoselleFu} />
    </main>
  );
};
export default Page;
