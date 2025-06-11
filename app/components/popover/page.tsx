"use client";
import {
  Button,
  Popover,
  Stack,
  Stepper,
  Text,
} from "@kiwicom/orbit-components";
import { ChevronDown } from "@kiwicom/orbit-components/lib/icons";
import React, { useState } from "react";

const content = (
  <Stack direction="column">
    <Stack flex shrink align="center" justify="between">
      <Stack inline direction="column" spacing="none">
        <Text>Adult</Text>
        <Text type="secondary">11+</Text>
      </Stack>
      <Stepper
        minValue={0}
        ariaLabelValue="Number of adult passengers"
        titleIncrement="Add adult passenger"
        titleDecrement="Remove adult passenger"
      />
    </Stack>
    <Stack flex shrink align="center" justify="between">
      <Stack inline direction="column" spacing="none">
        <Text>Child</Text>
        <Text type="secondary">2-11</Text>
      </Stack>
      <Stepper
        minValue={0}
        ariaLabelValue="Number of children passengers"
        titleIncrement="Add children passenger"
        titleDecrement="Remove children passenger"
      />
    </Stack>
  </Stack>
);

function PopoverDemo() {
  // (Optional) Control open state manually if you want to show programmatic control
  // const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: 32, height: "100vh" }}>
      <Popover
        // opened={open}
        // onOpen={() => setOpen(true)}
        // onClose={() => setOpen(false)}
        ariaLabel="Popover Example"
        role="dialog"
        content={content}
      >
        <Button type="secondary" iconRight={<ChevronDown />}>
          Open popover
        </Button>
      </Popover>
    </div>
  );
}

export default PopoverDemo;
