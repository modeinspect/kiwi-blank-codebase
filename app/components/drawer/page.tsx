"use client";
import { Button, Drawer } from "@kiwicom/orbit-components";
import React, { useRef, useState } from "react";

function DrawerDemo() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ padding: 32 }}>
      <Button onClick={handleOpen}>Open Drawer</Button>

      {open && (
        <Drawer
          shown={open}
          onClose={handleClose}
          title="Minimal Drawer"
          width="320px"
        >
          <div style={{ padding: 24 }}>
            <h2 style={{ marginTop: 0 }}>Hello from the Drawer!</h2>
            <p>This is some minimal content inside the drawer.</p>
            <Button type="secondary" onClick={handleClose}>
              Close Drawer
            </Button>
          </div>
        </Drawer>
      )}
    </div>
  );
}

export default DrawerDemo;
