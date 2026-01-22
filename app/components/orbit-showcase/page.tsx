"use client";
import React from "react";
import {
  Heading,
  Button,
  Badge,
  Alert,
  Card,
  ButtonGroup,
  Tile,
  TileGroup,
  Stepper,
  Switch,
  Separator,
  Text,
  List,
  ListItem,
  Checkbox,
} from "@kiwicom/orbit-components";
import {
  Airplane,
  Check,
  Heart,
  Location,
  NotificationAdd,
  UserGroup,
  BaggageCabin,
  Calendar,
} from "@kiwicom/orbit-components/icons";

const SectionContainer = ({ children }: { children: React.ReactNode }) => (
  <div
    className="mb-12 md:mb-0"
    style={{
      padding: 32,
      borderRadius: 12,
      backgroundColor: "#ffffff",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
    }}
  >
    {children}
  </div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <Heading as="h2" type="displaySubtitle" spaceAfter="large">
    {children}
  </Heading>
);

const ComponentGrid = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: 16,
      marginTop: 16,
    }}
  >
    {children}
  </div>
);

const ComponentBox = ({ children }: { children: React.ReactNode }) => (
  <div className="items-center justify-center"
    style={{
      padding: 16,
      border: "1px solid #e2e2e2",
      borderRadius: 8,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: 100,
      backgroundColor: "#f7f7f7",
    }}
  >
    {children}
  </div>
);

export default function OrbitShowcase() {
  const [switchOn, setSwitchOn] = React.useState(true);

  return (
    <div className="mx-auto" style={{ maxWidth: 1200, margin: "0 auto", padding: 32 }}>
      {/* Header */}
      <div style={{ marginBottom: 48, textAlign: "center" }}>
        <Heading as="h1" type="display">
          Orbit Elements Showcase
        </Heading>
        <Text spaceAfter="large" type="secondary">
          A comprehensive collection of Orbit UI components
        </Text>
      </div>

      {/* Buttons */}
      <SectionContainer>
        <SectionTitle>Buttons</SectionTitle>
        <ComponentGrid>
          <ComponentBox>
            <Button>Primary</Button>
          </ComponentBox>
          <ComponentBox>
            <Button type="secondary">Secondary</Button>
          </ComponentBox>
          <ComponentBox>
            <Button type="critical">Critical</Button>
          </ComponentBox>
          <ComponentBox>
            <Button iconLeft={<Airplane />}>With Icon</Button>
          </ComponentBox>
          <ComponentBox>
            <Button size="small">Small</Button>
          </ComponentBox>
          <ComponentBox>
            <Button size="large">Large</Button>
          </ComponentBox>
        </ComponentGrid>
      </SectionContainer>

      {/* Badges & Status */}
      <SectionContainer>
        <SectionTitle>Badges & Status</SectionTitle>
        <ComponentGrid>
          <ComponentBox>
            <Badge type="info">Info</Badge>
          </ComponentBox>
          <ComponentBox>
            <Badge type="success">Success</Badge>
          </ComponentBox>
          <ComponentBox>
            <Badge type="warning">Warning</Badge>
          </ComponentBox>
          <ComponentBox>
            <Badge type="critical">Critical</Badge>
          </ComponentBox>
          <ComponentBox>
            <Badge type="dark">Dark</Badge>
          </ComponentBox>
          <ComponentBox>
            <Badge type="neutral">Neutral</Badge>
          </ComponentBox>
        </ComponentGrid>
      </SectionContainer>

      {/* Alerts */}
      <SectionContainer>
        <SectionTitle>Alerts</SectionTitle>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Alert type="info" title="Information Alert" />
          <Alert type="success" title="Success Alert" />
          <Alert type="warning" title="Warning Alert" />
          <Alert type="critical" title="Critical Alert" />
        </div>
      </SectionContainer>

      {/* Cards & Tiles */}
      <SectionContainer>
        <SectionTitle>Cards & Tiles</SectionTitle>
        <ComponentGrid>
          <Card title="Card Title" description="Card description">
            <Text>Card content goes here</Text>
          </Card>
          <Card title="Another Card" description="With more details">
            <Text>More information about this card</Text>
          </Card>
        </ComponentGrid>
        <div style={{ marginTop: 24 }}>
          <TileGroup>
            <Tile
              title="Tile One"
              description="First tile option"
              icon={<Airplane />}
            />
            <Tile
              title="Tile Two"
              description="Second tile option"
              icon={<Location />}
            />
            <Tile
              title="Tile Three"
              description="Third tile option"
              icon={<Calendar />}
            />
          </TileGroup>
        </div>
      </SectionContainer>

      {/* Input Controls */}
      <SectionContainer>
        <SectionTitle>Input Controls</SectionTitle>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div>
            <Text weight="bold" spaceAfter="small">
              Checkbox
            </Text>
            <Checkbox label="Enable notifications" />
          </div>
          <Separator />
          <div>
            <Text weight="bold" spaceAfter="small">
              Switch Toggle
            </Text>
            <Switch
              ariaLabel="Toggle notifications"
              checked={switchOn}
              onChange={() => setSwitchOn(!switchOn)}
            />
          </div>
          <Separator />
          <div>
            <Text weight="bold" spaceAfter="small">
              Stepper
            </Text>
            <Stepper
              minValue={0}
              maxValue={5}
              onChange={() => {}}
              ariaLabelValue="Number of passengers"
              titleIncrement="Add passenger"
              titleDecrement="Remove passenger"
            />
          </div>
        </div>
      </SectionContainer>

      {/* Button Groups */}
      <SectionContainer>
        <SectionTitle>Button Groups & Utilities</SectionTitle>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div>
            <Text weight="bold" spaceAfter="small">
              Button Group
            </Text>
            <ButtonGroup>
              <Button>Option 1</Button>
              <Button>Option 2</Button>
              <Button>Option 3</Button>
            </ButtonGroup>
          </div>
          <Separator />
          <div>
            <Text weight="bold" spaceAfter="small">
              Icon Buttons
            </Text>
            <div style={{ display: "flex", gap: 8 }}>
              <Button iconLeft={<Check />} size="small">
                Accept
              </Button>
              <Button type="secondary" iconLeft={<Heart />} size="small" />
              <Button type="secondary" iconLeft={<Calendar />} size="small" />
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Lists */}
      <SectionContainer>
        <SectionTitle>Lists & Collections</SectionTitle>
        <ComponentGrid>
          <div>
            <Text weight="bold" spaceAfter="small">
              List
            </Text>
            <List>
              <ListItem icon={<Check color="success" />}>Item one</ListItem>
              <ListItem icon={<Check color="success" />}>Item two</ListItem>
              <ListItem icon={<Check color="success" />}>Item three</ListItem>
            </List>
          </div>
        </ComponentGrid>
      </SectionContainer>

      {/* Icons Showcase */}
      <SectionContainer>
        <SectionTitle>Popular Icons</SectionTitle>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: 16,
            marginTop: 16,
          }}
        >
          <ComponentBox>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <Airplane />
              <Text size="small">Travel</Text>
            </div>
          </ComponentBox>
          <ComponentBox>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <Location />
              <Text size="small">Location</Text>
            </div>
          </ComponentBox>
          <ComponentBox>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <Calendar />
              <Text size="small">Schedule</Text>
            </div>
          </ComponentBox>
          <ComponentBox>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <UserGroup />
              <Text size="small">People</Text>
            </div>
          </ComponentBox>
          <ComponentBox>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <NotificationAdd />
              <Text size="small">Notification</Text>
            </div>
          </ComponentBox>
          <ComponentBox>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <BaggageCabin />
              <Text size="small">Baggage</Text>
            </div>
          </ComponentBox>
        </div>
      </SectionContainer>

      {/* Feature Highlights */}
      <SectionContainer>
        <SectionTitle>Feature Highlights</SectionTitle>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 24,
            marginTop: 16,
          }}
        >
          <Card
            title="Flexible Components"
            description="Build with customizable Orbit elements"
          />
          <Card
            title="Responsive Design"
            description="Works perfectly on all screen sizes"
          />
          <Card
            title="Rich Iconography"
            description="Access hundreds of beautiful icons"
          />
        </div>
      </SectionContainer>

      {/* Footer */}
      <div style={{ textAlign: "center", marginTop: 48, paddingTop: 32 }}>
        <Separator />
        <Text type="secondary" spaceAfter="medium">
          Explore more components at{" "}
          <strong>@kiwicom/orbit-components</strong>
        </Text>
      </div>
    </div>
  );
}
