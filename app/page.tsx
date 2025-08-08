"use client";
import NavigationBar from "@kiwicom/orbit-components/lib/NavigationBar"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink"
import Alert from "@kiwicom/orbit-components/lib/Alert"
import Badge from "@kiwicom/orbit-components/lib/Badge"
import Text from "@kiwicom/orbit-components/lib/Text"
import Check from "@kiwicom/orbit-components/lib/icons/Check"
import Share from "@kiwicom/orbit-components/lib/icons/Share"
import { ItinerarySegment, ItinerarySegmentStop, ItinerarySegmentDetail } from "@kiwicom/orbit-components/lib/Itinerary"
import Close from "@kiwicom/orbit-components/lib/icons/Close"
import Plus from "@kiwicom/orbit-components/lib/icons/Plus"
import City from "@kiwicom/orbit-components/lib/icons/City"
import Airplane from "@kiwicom/orbit-components/lib/icons/Airplane"
import Heading from "@kiwicom/orbit-components/lib/Heading"
import Box from "@kiwicom/orbit-components/lib/Box"
import FeatureIcon from "@kiwicom/orbit-components/lib/FeatureIcon"
import Button from "@kiwicom/orbit-components/lib/Button"
import InformationCircle from "@kiwicom/orbit-components/lib/icons/InformationCircle"
import Clock from "@kiwicom/orbit-components/lib/icons/Clock"
import Location from "@kiwicom/orbit-components/lib/icons/Location"
import FlightDirect from "@kiwicom/orbit-components/lib/icons/FlightDirect"
import Itinerary from "@kiwicom/orbit-components/lib/Itinerary"
import Ryanair from "@kiwicom/orbit-components/lib/icons/Ryanair"
import Separator from "@kiwicom/orbit-components/lib/Separator"

export default function TripDetailsPage() {
  return (
    <div className="min-h-screen bg-[#f5f7f9]">
      {/* Navigation Bar */}
      <NavigationBar>
        <div className="flex items-center justify-between w-full px-4 md:px-8">
          {/* Logo and Menu */}
          <div className="flex items-center flex-1 gap-6">
            <div className="flex items-center justify-center h-10 w-20">
              <div className="h-10 w-20 bg-gradient-to-r from-blue-500 to-green-500 rounded"></div>
            </div>
            
            <div className="hidden md:flex items-center gap-4">
              <ButtonLink size="normal">Travel</ButtonLink>
              <ButtonLink size="normal">Cars</ButtonLink>
              <ButtonLink size="normal">Rooms</ButtonLink>
              <ButtonLink size="normal">Stories</ButtonLink>
              <ButtonLink size="normal">Deals</ButtonLink>
              <div className="flex items-center gap-1">
                <ButtonLink size="normal">Activities</ButtonLink>
                <Badge type="info">New</Badge>
              </div>
            </div>
          </div>
          
          {/* Right side */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="h-6 w-8 bg-blue-500 rounded"></div>
                <Text>USD</Text>
              </div>
              <ButtonLink size="normal">Help</ButtonLink>
              <ButtonLink size="normal">Sign in</ButtonLink>
            </div>
          </div>
        </div>
      </NavigationBar>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 pt-24">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Heading type="title1">Prague</Heading>
            <FlightDirect />
            <Heading type="title1">London</Heading>
          </div>
        </div>

        {/* Trip Details Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <Heading type="title2">Trip details</Heading>
            <ButtonLink iconLeft={<Share />} size="small">
              Share
            </ButtonLink>
          </div>

          {/* Flight Route */}
          <div className="mb-6">
            <div className="flex justify-between items-end mb-4">
              <div className="flex-1">
                <Text weight="bold" size="large">Prague → London</Text>
              </div>
              <div className="flex flex-col items-end">
                <div className="mb-1">
                  <Text size="small" type="secondary">Duration</Text>
                </div>
                <div className="flex items-center gap-1">
                  <Clock />
                  <Text weight="medium">2h 35m</Text>
                </div>
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-lg p-4">
              <Itinerary>
                <ItinerarySegment>
                  <ItinerarySegmentStop
                    city="Brno · BRQ"
                    station="Brno–Tuřany"
                    date="Mon, 30.1"
                    time="17:30"
                  />
                  <ItinerarySegmentDetail
                    duration="2h 5m"
                    summary={
                      <div className="flex items-center gap-2">
                        <Badge>
                          <div className="flex items-center gap-2">
                            <Ryanair />
                            <span>Ryanair</span>
                          </div>
                        </Badge>
                      </div>
                    }
                  />
                  <ItinerarySegmentStop
                    city="London · STN"
                    station="London Stansted"
                    date="Mon, 30.1"
                    time="18:35"
                  />
                </ItinerarySegment>
              </Itinerary>
            </div>
          </div>
        </div>

        {/* Pricing Options */}
        <div className="mb-8">
          <Heading type="title2" spaceAfter="large">
            Choose the option to change or cancel your trip
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Saver Option */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-center mb-6">
                <div className="mb-4">
                  <FeatureIcon name="TicketSaver" />
                </div>
                <div className="mb-2">
                  <Text weight="medium">Saver</Text>
                </div>
                <Text size="large" weight="bold">$58</Text>
              </div>
              
              <div className="space-y-4 flex-1 mb-6">
                <div className="flex items-start gap-3 py-2">
                  <Close color="critical" />
                  <Text size="small" weight="bold">Basic Services</Text>
                </div>
                <Separator />
                <div className="flex items-start gap-3 py-2">
                  <Close color="critical" />
                  <Text size="small">No flexibility to change your trip</Text>
                </div>
                <Separator />
                <div className="flex items-start gap-3 py-2">
                  <Close color="critical" />
                  <Text size="small">No refund if you decide to cancel</Text>
                </div>
              </div>
              
              <Button fullWidth type="secondary">Select</Button>
            </div>

            {/* Standard Option */}
            <div className="bg-white rounded-lg p-6 shadow-sm relative">
              {/* Best Value Badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge type="info">Best Value</Badge>
              </div>
              
              <div className="text-center mb-6">
                <div className="mb-4 flex items-center justify-center">
                  <FeatureIcon name="TicketStandard" />
                </div>
                <div className="mb-2">
                  <Text weight="medium">Standard</Text>
                </div>
                <Text size="large" weight="bold">$72.50</Text>
              </div>
              
              <div className="space-y-4 flex-1 mb-6">
                <div className="flex items-start gap-3 py-2">
                  <Check color="success" />
                  <div className="flex items-center gap-1">
                    <Plus />
                    <Text size="small" weight="bold">Plus Services</Text>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3 py-2">
                  <Check color="success" />
                  <Text size="small" weight="bold">
                    Reschedule your trip for free, or only pay the difference, with any airline
                  </Text>
                </div>
                <Separator />
                <div className="flex items-start gap-3 py-2">
                  <Close color="critical" />
                  <Text size="small">No refund if you decide to cancel</Text>
                </div>
              </div>
              
              <Button fullWidth type="primary">Select</Button>
            </div>

            {/* Flexi Option */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-center mb-6">
                <div className="mb-4">
                  <FeatureIcon name="TicketFlexi" />
                </div>
                <div className="mb-2">
                  <Text weight="medium">Flexi</Text>
                </div>
                <Text size="large" weight="bold">$85.36</Text>
              </div>
              
              <div className="space-y-4 flex-1 mb-6">
                <div className="flex items-start gap-3 py-2">
                  <div className="w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <Text size="small" weight="bold">Premium Services</Text>
                </div>
                <Separator />
                <div className="flex items-start gap-3 py-2">
                  <div className="w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center">
                    <Check />
                  </div>
                  <Text size="small" weight="bold">
                    Reschedule your trip for free, or only pay the difference, with any airline
                  </Text>
                </div>
                <Separator />
                <div className="flex items-start gap-3 py-2">
                  <div className="w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center">
                    <Check />
                  </div>
                  <Text size="small" weight="medium">
                    80% refund of the ticket and any airline services if you cancel
                  </Text>
                </div>
              </div>
              
              <Button fullWidth type="secondary">Select</Button>
            </div>
          </div>

          {/* Information Alert */}
          <Alert type="info" icon={<InformationCircle />}>
            Informational message
          </Alert>
        </div>
      </div>
    </div>
  );
}
