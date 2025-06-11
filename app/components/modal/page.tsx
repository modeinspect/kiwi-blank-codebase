"use client";
import {
  Button,
  Modal,
  ModalHeader,
  ModalSection,
  ModalFooter,
} from "@kiwicom/orbit-components";
import React from "react";

function ModalDemo() {
  const [open, setOpen] = React.useState(false);
  const triggerRef = React.useRef(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ padding: 32 }}>
      {open && (
        <Modal triggerRef={triggerRef} onClose={handleClose} labelClose="Close">
          <ModalHeader
            title="Simple Modal Example"
            description="This is a minimal modal with only plain HTML inside."
          />
          <ModalSection>
            <div>
              <p>
                Hello! This is the content of the modal.
                <br />
                You can put any plain HTML here.
              </p>
              <ul>
                <li>List item one</li>
                <li>List item two</li>
              </ul>
            </div>
          </ModalSection>
          <ModalFooter>
            <Button type="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleClose}>Confirm</Button>
          </ModalFooter>
        </Modal>
      )}
      <Button ref={triggerRef} onClick={handleOpen}>
        Open Modal
      </Button>
    </div>
  );
}

export default ModalDemo;
