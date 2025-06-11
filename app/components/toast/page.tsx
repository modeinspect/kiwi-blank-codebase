"use client";
import { Button, ToastRoot, createToast } from "@kiwicom/orbit-components";
import React from "react";

function ToastDemo() {
  const handleShowToast = () => {
    createToast("Hello from Toast!", {
      // Optionally you can add an icon here
      // icon: <YourIconComponent />,
      ariaProps: {
        role: "alert",
        "aria-live": "assertive",
      },
    });
  };

  return (
    <div style={{ padding: 32 }}>
      <Button onClick={handleShowToast}>Show Toast</Button>
      <ToastRoot />
    </div>
  );
}

export default ToastDemo;
