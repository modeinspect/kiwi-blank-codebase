"use client";
import { Wizard, WizardStep } from "@kiwicom/orbit-components";
import React, { useState } from "react";

const steps = [
  "Search",
  "Passenger details",
  "Ticket fare",
  "Customize your trip",
  "Kiwi.com guarantee",
  "Seating",
  "Overview & payment",
];

function WizardDemo() {
  const [activeStep, setActiveStep] = useState(0);

  const goToNext = () =>
    setActiveStep((step) => Math.min(step + 1, steps.length - 1));
  const goToPrev = () => setActiveStep((step) => Math.max(step - 1, 0));

  return (
    <div style={{ padding: 32, maxWidth: 600 }}>
      <Wizard
        id="wizard-demo"
        activeStep={activeStep}
        completedSteps={activeStep}
        onChangeStep={setActiveStep}
        labelClose="Close"
      >
        {steps.map((step) => (
          <WizardStep key={step} title={step} />
        ))}
      </Wizard>

      <div style={{ marginTop: 32, display: "flex", gap: 8 }}>
        <button onClick={goToPrev} disabled={activeStep === 0}>
          Previous
        </button>
        <button onClick={goToNext} disabled={activeStep === steps.length - 1}>
          Next
        </button>
      </div>
      <div style={{ marginTop: 16 }}>
        <strong>Active step:</strong> {steps[activeStep]}
      </div>
    </div>
  );
}

export default WizardDemo;
