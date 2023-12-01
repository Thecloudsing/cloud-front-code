"use client";
import React, { useEffect } from "react";
import { useTheme } from "@/app/global-theme";

export default function Theme({ children }: { children: React.ReactNode }) {
  const { isLoading } = useTheme();
  useEffect(() => {
    console.log("theme", isLoading);
  }, [isLoading]);
  // if (isLoading) return <div>loading</div>;
  return <>{children}</>;
}
