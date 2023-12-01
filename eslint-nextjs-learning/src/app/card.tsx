"use client";
import React from "react";
import styles from "./card.module.css";
import { Mapping } from "@/activation/mapping";

const star = "*".repeat(100);
interface Props {
  mapping: Mapping["key"];
  flushCode?: () => void;
}
const Card = ({ mapping, flushCode }: Props) => {
  const { name, activationCode, iconStyle } = mapping;
  const copy = async (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
  ) => {
    const target = e.currentTarget;
    try {
      await navigator.clipboard.writeText(activationCode);
      target.setAttribute("data-content", "Copied!");
    } catch (e) {
      target.setAttribute("data-content", "Copy failed!");
    }
    flushCode && flushCode();
    await new Promise((resolve) =>
      setTimeout(() => {
        target.setAttribute("data-content", "Copy to clipboard");
        resolve("ok");
      }, 1000),
    );
  };
  return (
    <article className={styles.main}>
      <header className={styles.header}>
        <div className={styles.iconContainer}>
          <div className={styles.icon} style={iconStyle}></div>
        </div>
        <hr />
      </header>
      <center className={styles.center}>
        <h1 className={styles.title}>{name}</h1>
        <p
          className={styles.code}
          onClick={copy}
          data-content="Copy to clipboard"
        >
          {star}
        </p>
      </center>
      <div className={styles.maskC}></div>
      <div className={styles.maskD}></div>
    </article>
  );
};

export default Card;
