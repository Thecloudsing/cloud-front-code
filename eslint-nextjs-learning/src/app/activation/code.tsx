"use client";
import React, { useEffect } from "react";
import styles from "@/app/activation/page.module.css";
import { createVoid } from "@/service/apis";
import { POST } from "@/service/micro-queues";
import { use, ThemeSelectorType, useTheme } from "@/app/global-theme";

const hide = "*".repeat(65);

export async function getStaticProps() {
  // const res = await getMapping();
  const res = "d";
  console.log("re", res);
  return {
    res,
  };
}

const Code = (props: any) => {
  useEffect(() => {
    console.log(props);
  });
  // use();
  const { theme, themeSelector, toggleTheme } = useTheme();
  // console.log("theme => ", theme);
  const onCopyJrebel = async (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
  ) => {
    const target = e.currentTarget;
    const prefix = process.env.NEXT_PUBLIC_GREBEL;
    try {
      const data = await createVoid<{ Guid: string }>(
        POST,
        "https://www.guidgen.com/generate",
      )(undefined, { reject: true });
      console.log("guid => ", data);
      if (!data || !data.Guid) throw new Error();
      const guid = data.Guid.toUpperCase();
      const url = `${window.location.origin}/${prefix}/${guid}`;
      console.log("url => ", url);
      await navigator.clipboard.writeText(url);
      target.setAttribute("data-content", "Copied!");
    } catch (error) {
      target.setAttribute("data-content", "Copy failed!");
    }

    setTimeout(() => {
      target.setAttribute("data-content", "Copy to clipboard");
    }, 1000);
  };
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        f{theme}
        <select
          value={themeSelector}
          onChange={(event) => {
            console.log(event.target.value);
            toggleTheme(event.target.value as ThemeSelectorType);
          }}
        >
          <option value="light">白昼</option>
          <option value="dark">黑夜</option>
          <option value="follow">跟随</option>
        </select>
        <div className={styles.card}>
          <header className={styles.header}>
            <div>
              <div className={styles.favicon}>
                <img
                  src="/activation/icons/jrebel-favicon.ico"
                  alt="not found img"
                />
              </div>
            </div>
          </header>
          <div className={styles.box}>
            <h2>
              Jrebel激活<span>&nbsp;&lt;</span>
            </h2>
            <p
              className={styles.ph}
              data-content="Copy to clipboard"
              onClick={onCopyJrebel}
            >
              {hide}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Code;
