"use client";
import React from "react";
import { Button, Dialog, ButtonLink } from "@kiwicom/orbit-components";

function DialogDemo() {
  const [open, setOpen] = React.useState(false);
  const triggerRef = React.useRef(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ padding: "2rem" }}>
      <Button ref={triggerRef} onClick={handleOpen}>
        Open Dialog
      </Button>

      {open && (
        <Dialog
          id="dialog-id"
          title="Log out"
          description="Are you sure you want to log out now?"
          onClose={handleClose}
          triggerRef={triggerRef}
          primaryAction={
            <Button type="critical" onClick={handleClose}>
              Log out
            </Button>
          }
          secondaryAction={
            <ButtonLink type="secondary" onClick={handleClose}>
              Cancel
            </ButtonLink>
          }
          // illustration={<Illustration name="NoNotification" size="small" />}
        />
      )}
    </div>
  );
}

export default DialogDemo;
