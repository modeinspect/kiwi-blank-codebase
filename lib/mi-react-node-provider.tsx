"use client";
import React, { useEffect, createElement } from "react";
import * as icons from "@kiwicom/orbit-components/icons"

declare global {
  interface Window {
    MIReactNodes: Record<string, unknown>;
  }
}
export default function MiReactNodeProvider({ children }: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // 2️⃣  Bail out early during SSR
    if (typeof window === "undefined") return;

    // 3️⃣  Safe assignment – TypeScript now knows MIReactNodes exists
    window.MIReactNodes = {};

    Object.entries(icons).forEach(([key, value]) => {
      window.MIReactNodes[key] = createElement(value);
    });
  }, []);

  return (
    <>
      {children}
    </>
  );
}
