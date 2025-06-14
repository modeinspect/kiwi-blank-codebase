"use client";
import React from "react";

import {
  AirportIllustration,
  Alert,
  Badge,
  BadgeList,
  BadgeListItem,
  Breadcrumbs,
  BreadcrumbsItem,
  Button,
  ButtonGroup,
  ButtonLink,
  ButtonMobileStore,
  CallOutBanner,
  CarrierLogo,
  Checkbox,
  ChoiceGroup,
  Collapse,
  CountryFlag,
  Coupon,
  Illustration,
  InputField,
  InputFile,
  InputGroup,
  InputSelect,
  List,
  ListItem,
  Loading,
  Pagination,
  Radio,
  Seat,
  SegmentedSwitch,
  Select,
  Separator,
  Skeleton,
  Slider,
  SocialButton,
  Stepper,
  Switch,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Textarea,
  Tile,
  TileGroup,
  Timeline,
  TimelineStep,
  Tooltip,
} from "@kiwicom/orbit-components";

import {
  Airplane,
  Check,
  ChevronDown,
  NewWindow,
  AlertCircle,
  BaggageCabin,
} from "@kiwicom/orbit-components/icons";

const containerStyle = {
  border: "1px solid #e2e2e2",
  borderRadius: 8,
  padding: 24,
  marginBottom: 24,
};

export default function Components() {
  return (
    <div style={{ maxWidth: 800, margin: "auto", padding: 32 }}>
      <div style={containerStyle}>
        <AirportIllustration
          alt="Airport illustration"
          name="BGYFastTrack"
          size="medium"
          spaceAfter="small"
        />
      </div>
      <div style={containerStyle}>
        <Alert type="info" title="Alert" />
      </div>
      <div style={containerStyle}>
        <Badge type="info">Badge</Badge>
      </div>
      <div style={containerStyle}>
        <BadgeList>
          <BadgeListItem icon={<AlertCircle />}>
            You're departing from a different place
          </BadgeListItem>
          <BadgeListItem icon={<BaggageCabin />}>
            You must collect and recheck your baggage
          </BadgeListItem>
        </BadgeList>
      </div>
      <div style={containerStyle}>
        <Breadcrumbs>
          <BreadcrumbsItem href="#">Home</BreadcrumbsItem>
          <BreadcrumbsItem href="#">Library</BreadcrumbsItem>
        </Breadcrumbs>
      </div>
      <div style={containerStyle}>
        <Button>Button</Button>
      </div>
      <div style={containerStyle}>
        <ButtonGroup>
          <Button iconLeft={<Airplane />}>Button</Button>
          <Button iconLeft={<ChevronDown />} title="Show more" />
        </ButtonGroup>
      </div>
      <div style={containerStyle}>
        <ButtonLink href="#">ButtonLink</ButtonLink>
      </div>
      <div style={containerStyle}>
        <ButtonMobileStore
          alt="Download on the App Store"
          href="#"
          lang="EN"
          onClick={() => {}}
          type="appStore"
        />
        <ButtonMobileStore
          alt="Download on the Google Play"
          href="#"
          lang="EN"
          onClick={() => {}}
          type="googlePlay"
        />
      </div>
      <div>
        <CallOutBanner
          actions={
            <Button
              iconRight={<NewWindow />}
              onClick={() => {}}
              size="small"
              type="secondary"
            >
              Find a Room
            </Button>
          }
          description="Select your hotel, hostel, apartment, or B&B from more than a million properties worldwide."
          illustration={<Illustration name="Accommodation" size="small" />}
          title="Rooms in Warsaw"
          tabIndex={0}
        >
          <List type="secondary">
            <ListItem icon={<Check color="success" />}>Up to 50% off.</ListItem>
            <ListItem icon={<Check color="success" />}>
              From 3-star budget to 5-star luxury.
            </ListItem>
          </List>
        </CallOutBanner>
      </div>
      <div style={containerStyle}>
        <CarrierLogo
          carriers={[
            {
              code: "FR",
              name: "Ryanair",
            },
          ]}
          size="large"
        />
      </div>
      <div style={containerStyle}>
        <Checkbox label="Checkbox" />
      </div>
      <div style={containerStyle}>
        <ChoiceGroup
          label="What was the reason for your cancellation?"
          labelSize="normal"
          onChange={() => {}}
          onOnlySelection={() => {}}
        >
          <Radio label="Reason one" name="reason" value="one" />
          <Radio label="Reason two" name="reason" value="two" />
          <Radio label="Reason three" name="reason" value="three" />
        </ChoiceGroup>
      </div>
      <div style={containerStyle}>
        <Collapse
          expanded
          label="Collapse"
          collapseButtonLabel="Collapse button lable"
          expandButtonLabel="Expanded button label"
        >
          Collapsible content
        </Collapse>
      </div>
      <div style={containerStyle}>
        <CountryFlag code="anywhere" size="small" />
      </div>
      <div style={containerStyle}>
        <Coupon>COUPON2025</Coupon>
      </div>
      <div style={containerStyle}>
        <InputField label="InputField" placeholder="Type here" />
      </div>
      <div style={containerStyle}>
        <InputFile
          label="Label"
          labelRemove="Remove"
          onBlur={() => {}}
          onChange={() => {}}
          onFocus={() => {}}
          onRemoveFile={() => {}}
        />
      </div>
      <div style={containerStyle}>
        <InputGroup
          flex={["0 0 60px", "1 1 100%", "0 0 90px"]}
          label="Date of birth"
          onBlur={() => {}}
          onBlurGroup={() => {}}
          onChange={() => {}}
          onFocus={() => {}}
        >
          <InputField
            label="Day of birth"
            onBlur={() => {}}
            onChange={() => {}}
            onFocus={() => {}}
            placeholder="DD"
          />
          <Select
            label="Month of birth"
            onChange={() => {}}
            options={[
              {
                label: "January",
                value: "January",
              },
              {
                label: "February",
                value: "February",
              },
              {
                label: "March",
                value: "March",
              },
              {
                label: "April",
                value: "April",
              },
              {
                label: "May",
                value: "May",
              },
              {
                label: "June",
                value: "June",
              },
              {
                label: "July",
                value: "July",
              },
              {
                label: "August",
                value: "August",
              },
              {
                label: "September",
                value: "September",
              },
              {
                label: "October",
                value: "October",
              },
              {
                label: "November",
                value: "November",
              },
              {
                label: "December",
                value: "December",
              },
            ]}
            placeholder="Month"
            value="January"
          />
          <InputField label="Year of birth" placeholder="YYYY" />
        </InputGroup>
      </div>
      <div style={containerStyle}>
        <div className="min-h-[500px]">
          <InputSelect
            emptyState="No results found."
            label="Select currency"
            labelClear="Clear value"
            labelClose="Close"
            maxHeight="400px"
            onBlur={() => {}}
            onChange={() => {}}
            onClose={() => {}}
            onFocus={() => {}}
            onOptionSelect={() => {}}
            onSelect={() => {}}
            options={[
              {
                group: "Popular",
                prefix: <CountryFlag code="eu" role="presentation" />,
                title: "Euro",
                value: "EUR",
              },
              {
                group: "Popular",
                prefix: <CountryFlag code="us" role="presentation" />,
                title: "US Dollar",
                value: "USD",
              },
              {
                group: "Popular",
                prefix: <CountryFlag code="gb" role="presentation" />,
                title: "Pound Sterling",
                value: "GBP",
              },
              {
                prefix: <CountryFlag code="au" role="presentation" />,
                title: "Australian Dollar",
                value: "AUD",
              },
              {
                prefix: <CountryFlag code="br" role="presentation" />,
                title: "Brazilian Real",
                value: "BRL",
              },
              {
                prefix: <CountryFlag code="cz" role="presentation" />,
                title: "Czech Koruna",
                value: "CZK",
              },
            ]}
            placeholder="Start typing to search"
            prevSelectedLabel="Previously selected"
            showAll
          />
        </div>
      </div>
      <div style={containerStyle}>
        <List>
          <ListItem>List item one</ListItem>
          <ListItem>List item two</ListItem>
        </List>
      </div>
      <div style={containerStyle}>
        <Loading />
      </div>
      <div style={containerStyle}>
        <Pagination
          labelNext="next"
          labelPrev="prev"
          labelProgress={<span>Numbers of pages: 6</span>}
          onPageChange={() => {}}
          pageCount={6}
        />
      </div>
      <div style={containerStyle}></div>
      <div style={containerStyle}>
        <Radio
          label="Label"
          name="Name"
          onChange={() => {}}
          tabIndex={0}
          value="value"
        />
      </div>
      <div style={containerStyle}>
        <Seat label="A1" />
      </div>
      <div style={containerStyle}>
        <SegmentedSwitch
          error="Chuck Norris makes onions cry."
          help="When Chuck Norris plays dodgeball, the balls dodge him."
          label="Gender"
          maxWidth="20%"
          onChange={() => {}}
          onFocus={() => {}}
          options={[
            {
              label: "Male",
              value: "Male",
            },
            {
              label: "Female",
              value: "Female",
            },
          ]}
          spaceAfter="normal"
        />
      </div>
      <div style={containerStyle}>
        <Select
          label="Select item"
          onBlur={() => {}}
          onChange={() => {}}
          onFocus={() => {}}
          options={[
            {
              label: "Zero-th item",
              value: 0,
            },
            {
              label: "First item",
              value: 1,
            },
            {
              label: "Second item",
              value: 2,
            },
            {
              label: "Third item",
              value: 3,
            },
          ]}
        />
      </div>
      <div style={containerStyle}>
        <Separator />
      </div>
      <div style={containerStyle}>
        <Skeleton />
      </div>
      <div style={containerStyle}>
        <Slider label="Slider" minValue={0} maxValue={100} />
      </div>
      <div style={containerStyle}>
        <SocialButton>SocialButton</SocialButton>
      </div>
      <div style={containerStyle}>
        <Stepper
          minValue={0}
          ariaLabelValue="Number of children passengers"
          titleIncrement="Add children passenger"
          titleDecrement="Remove children passenger"
        />
      </div>
      <div style={containerStyle}>
        <Switch ariaLabel="Switch" checked onChange={() => {}} />
      </div>
      <div style={containerStyle}>
        <Tabs>
          <TabList>
            <Tab>Tab 1</Tab>
            <Tab type="basic">Tab 2</Tab>
            <Tab type="medium">Tab 3</Tab>
            <Tab type="top">Tab 4</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>Tab 1 content</TabPanel>
            <TabPanel>Tab 2 content</TabPanel>
            <TabPanel>Tab 3 content</TabPanel>
            <TabPanel>Tab 4 content</TabPanel>
          </TabPanels>
        </Tabs>
      </div>
      <div style={containerStyle}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>lorem ipsum</TableCell>
              <TableCell>lorem ipsum</TableCell>
              <TableCell>lorem ipsum</TableCell>
              <TableCell>lorem ipsum</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>lorem ipsum</TableCell>
              <TableCell>lorem ipsum</TableCell>
              <TableCell>lorem ipsum</TableCell>
              <TableCell>lorem ipsum</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>lorem ipsum</TableCell>
              <TableCell>lorem ipsum</TableCell>
              <TableCell>lorem ipsum</TableCell>
              <TableCell>lorem ipsum</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div style={containerStyle}>
        <Textarea label="Textarea" />
      </div>
      <div style={containerStyle}>
        <Tile title="Tile" description="Tile description" />
      </div>
      <div style={containerStyle}>
        <TileGroup>
          <Tile title="Tile 1" />
          <Tile title="Tile 2" />
        </TileGroup>
      </div>
      <div style={containerStyle}>
        <Timeline>
          <TimelineStep label="Waiting for your passport or ID details" />
          <TimelineStep label="Waiting for check-in" />
          <TimelineStep label="Processing check-in" />
          <TimelineStep label="Boarding pass ready" />
        </Timeline>
      </div>
      <div style={containerStyle}>
        <Tooltip content="Tooltip text">
          <Button>Hover me</Button>
        </Tooltip>
      </div>
    </div>
  );
}
