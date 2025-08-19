"use client";

import React, { useState } from "react";
import {
  Button,
  Card,
  Heading,
  InputField,
  InputSelect,
  Select,
  Stack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
  Stepper,
  Separator,
} from "@kiwicom/orbit-components";

import {
  Airplane,
  Location,
  Calendar,
  Passengers,
  FlightDirect,
  FlightReturn,
  Exchange,
} from "@kiwicom/orbit-components/icons";

// Sample destination options
const destinationOptions = [
  {
    title: "London (LHR)",
    value: "LHR",
    description: "London Heathrow Airport",
    group: "Popular",
  },
  {
    title: "Paris (CDG)",
    value: "CDG",
    description: "Charles de Gaulle Airport",
    group: "Popular",
  },
  {
    title: "New York (JFK)",
    value: "JFK",
    description: "John F. Kennedy International Airport",
    group: "Popular",
  },
  {
    title: "Amsterdam (AMS)",
    value: "AMS",
    description: "Amsterdam Airport Schiphol",
    group: "Europe",
  },
  {
    title: "Barcelona (BCN)",
    value: "BCN",
    description: "Barcelona-El Prat Airport",
    group: "Europe",
  },
  {
    title: "Tokyo (NRT)",
    value: "NRT",
    description: "Narita International Airport",
    group: "Asia",
  },
];

// Cabin class options
const cabinClassOptions = [
  { value: "economy", label: "Economy" },
  { value: "premium_economy", label: "Premium Economy" },
  { value: "business", label: "Business" },
  { value: "first", label: "First Class" },
];

export default function FlightBookingHomepage() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [passengers, setPassengers] = useState(1);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [cabinClass, setCabinClass] = useState("economy");

  const handleSearch = () => {
    console.log("Searching flights...", {
      tripType: selectedTab === 0 ? "one-way" : selectedTab === 1 ? "round-trip" : "multi-city",
      from,
      to,
      passengers,
      cabinClass,
    });
  };

  const handleSwapLocations = () => {
    const tempFrom = from;
    setFrom(to);
    setTo(tempFrom);
  };

  const handleTabChange = (idx?: number) => {
    if (idx !== undefined) {
      setSelectedTab(idx);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Heading type="display" spaceAfter="medium">
            Find your perfect flight
          </Heading>
          <Text size="large" type="secondary">
            Search and compare flights from hundreds of airlines and travel sites
          </Text>
        </div>

        {/* Main Search Card */}
        <Card title="Search Flights" spaceAfter="large">
          <Stack spacing="800">
            {/* Trip Type Tabs */}
            <Tabs defaultSelected={0} onChange={handleTabChange}>
              <TabList>
                <Tab>
                  <Stack direction="row" align="center" spacing="100" inline>
                    <FlightDirect size="small" />
                    <span>One way</span>
                  </Stack>
                </Tab>
                <Tab>
                  <Stack direction="row" align="center" spacing="100" inline>
                    <FlightReturn size="small" />
                    <span>Round trip</span>
                  </Stack>
                </Tab>
                <Tab>
                  <Stack direction="row" align="center" spacing="100" inline>
                    <Airplane size="small" />
                    <span>Multi-city</span>
                  </Stack>
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <FlightSearchForm
                    from={from}
                    to={to}
                    setFrom={setFrom}
                    setTo={setTo}
                    passengers={passengers}
                    setPassengers={setPassengers}
                    cabinClass={cabinClass}
                    setCabinClass={setCabinClass}
                    onSwap={handleSwapLocations}
                    onSearch={handleSearch}
                    tripType="one-way"
                  />
                </TabPanel>
                <TabPanel>
                  <FlightSearchForm
                    from={from}
                    to={to}
                    setFrom={setFrom}
                    setTo={setTo}
                    passengers={passengers}
                    setPassengers={setPassengers}
                    cabinClass={cabinClass}
                    setCabinClass={setCabinClass}
                    onSwap={handleSwapLocations}
                    onSearch={handleSearch}
                    tripType="round-trip"
                  />
                </TabPanel>
                <TabPanel>
                  <FlightSearchForm
                    from={from}
                    to={to}
                    setFrom={setFrom}
                    setTo={setTo}
                    passengers={passengers}
                    setPassengers={setPassengers}
                    cabinClass={cabinClass}
                    setCabinClass={setCabinClass}
                    onSwap={handleSwapLocations}
                    onSearch={handleSearch}
                    tripType="multi-city"
                  />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Stack>
        </Card>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <div className="text-center p-4">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Airplane size="large" color="info" />
                </div>
              </div>
              <Heading type="title3" spaceAfter="small">
                Best Prices
              </Heading>
              <Text type="secondary">
                Compare prices from hundreds of airlines and find the best deals
              </Text>
            </div>
          </Card>

          <Card>
            <div className="text-center p-4">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Calendar size="large" color="success" />
                </div>
              </div>
              <Heading type="title3" spaceAfter="small">
                Flexible Dates
              </Heading>
              <Text type="secondary">
                Find cheaper flights by being flexible with your travel dates
              </Text>
            </div>
          </Card>

          <Card>
            <div className="text-center p-4">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <Location size="large" color="warning" />
                </div>
              </div>
              <Heading type="title3" spaceAfter="small">
                Worldwide
              </Heading>
              <Text type="secondary">
                Search destinations worldwide with our global flight network
              </Text>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Flight Search Form Component
function FlightSearchForm({
  from,
  to,
  setFrom,
  setTo,
  passengers,
  setPassengers,
  cabinClass,
  setCabinClass,
  onSwap,
  onSearch,
  tripType,
}: {
  from: string;
  to: string;
  setFrom: (value: string) => void;
  setTo: (value: string) => void;
  passengers: number;
  setPassengers: (value: number) => void;
  cabinClass: string;
  setCabinClass: (value: string) => void;
  onSwap: () => void;
  onSearch: () => void;
  tripType: "one-way" | "round-trip" | "multi-city";
}) {
  return (
    <Stack spacing="600">
      {/* Location Inputs Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
        <div className="relative">
          <InputSelect
            label="From"
            placeholder="Departure city or airport"
            options={destinationOptions}
            labelClear="Clear"
            onOptionSelect={(option) => setFrom(option?.value as string || "")}
          />
        </div>

        <div className="flex justify-center">
          <Button
            type="secondary"
            size="small"
            iconLeft={<Exchange />}
            onClick={onSwap}
            title="Swap locations"
            circled
          />
        </div>

        <div className="relative">
          <InputSelect
            label="To"
            placeholder="Destination city or airport"
            options={destinationOptions}
            labelClear="Clear"
            onOptionSelect={(option) => setTo(option?.value as string || "")}
          />
        </div>
      </div>

      {/* Date Inputs Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <InputField
          label="Departure"
          placeholder="Select departure date"
          prefix={<Calendar />}
          type="text"
        />
        {tripType === "round-trip" && (
          <InputField
            label="Return"
            placeholder="Select return date"
            prefix={<Calendar />}
            type="text"
          />
        )}
      </div>

      {/* Additional Multi-city Fields */}
      {tripType === "multi-city" && (
        <div className="p-4 bg-gray-50 rounded-lg">
          <Stack spacing="300">
            <Text weight="medium">Additional destinations</Text>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <InputSelect
                placeholder="City or airport"
                options={destinationOptions}
                labelClear="Clear"
                onOptionSelect={() => {}}
              />
              <InputField
                placeholder="Select date"
                prefix={<Calendar />}
                type="text"
              />
              <Button type="secondary" size="small">
                Add destination
              </Button>
            </div>
          </Stack>
        </div>
      )}

      {/* Passengers and Class Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
        <div>
          <Text size="small" weight="medium" spaceAfter="small">
            Passengers
          </Text>
          <Stepper
            minValue={1}
            maxValue={9}
            onChange={(value) => setPassengers(value)}
            ariaLabelValue="Number of passengers"
            titleIncrement="Add passenger"
            titleDecrement="Remove passenger"
          />
        </div>

        <Select
          label="Cabin Class"
          options={cabinClassOptions}
          value={cabinClass}
          onChange={(e) => setCabinClass(e.target.value)}
        />

        <Button
          type="primary"
          size="large"
          iconLeft={<Airplane />}
          onClick={onSearch}
          fullWidth
        >
          Search flights
        </Button>
      </div>
    </Stack>
  );
}