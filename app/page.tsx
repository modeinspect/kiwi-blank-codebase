"use client";

import React from 'react';
import NavigationBar from "@kiwicom/orbit-components/lib/NavigationBar";
import Button from "@kiwicom/orbit-components/lib/Button";
import Badge from "@kiwicom/orbit-components/lib/Badge";
import Tile from "@kiwicom/orbit-components/lib/Tile";
import Alert from "@kiwicom/orbit-components/lib/Alert";
import CountryFlag from "@kiwicom/orbit-components/lib/CountryFlag";
import CarrierLogo from "@kiwicom/orbit-components/lib/CarrierLogo";
import Illustration from "@kiwicom/orbit-components/lib/Illustration";

export default function Orbit() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <NavigationBar>
        <div className="flex items-center justify-between w-full px-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-2">
              <span className="text-white font-bold text-sm">KIWI</span>
            </div>
            <span className="text-sm font-medium">.COM</span>
          </div>
          
          {/* Right side items */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <CountryFlag code="us" size="small" />
              <span className="text-sm font-medium">EUR</span>
            </div>
            <Button type="secondary" size="small">Help</Button>
            <Button type="secondary" size="small">Sign in</Button>
            <Button type="secondary" size="small">☰</Button>
          </div>
        </div>
      </NavigationBar>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-6 mt-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Prague → London</h1>
          
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Trip details</h2>
            <Button type="secondary" size="small" iconRight="📤">Share</Button>
          </div>
        </div>

        {/* Flight Details Card */}
        <div className="bg-[#ffffff]/0 rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Prague → London</h3>
            <div className="text-right">
              <div className="text-sm text-gray-600">Duration</div>
              <div className="font-semibold flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                2h 35m
              </div>
            </div>
          </div>
          
          {/* Flight Timeline */}
          <div className="relative">
            <div className="flex items-start justify-between">
              {/* Departure */}
              <div className="flex-shrink-0 text-center">
                <div className="text-2xl font-bold text-gray-900">17:30</div>
                <div className="text-sm text-gray-600">Tue Sep 17</div>
              </div>
              
              {/* Flight Line and Details */}
              <div className="flex-1 mx-8">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="font-medium text-gray-900">Prague • PRG</div>
                    <div className="text-sm text-gray-600">Václav Havel Airport Prague</div>
                  </div>
                  <div className="text-sm text-gray-600">2h 35m</div>
                </div>
                
                {/* Flight Line */}
                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-[#ffffff]/0 px-3 text-sm text-gray-500">✈</span>
                  </div>
                </div>
                
                {/* Airline Info */}
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">R</span>
                  </div>
                  <span className="text-sm font-medium">Ryanair</span>
                  <Button type="secondary" size="small">▼</Button>
                </div>
                
                <div className="mt-4">
                  <div className="font-medium text-gray-900">London • LTN</div>
                  <div className="text-sm text-gray-600">Luton</div>
                </div>
              </div>
              
              {/* Arrival */}
              <div className="flex-shrink-0 text-center">
                <div className="text-2xl font-bold text-gray-900">18:35</div>
                <div className="text-sm text-gray-600">Tue Sep 17</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Options */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Choose the option to change or cancel your trip
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Saver Option */}
            <div className="bg-white rounded-lg border shadow-sm">
              <div className="text-center p-6">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Saver</h3>
                <div className="text-2xl font-bold mb-6">$58</div>
                
                <div className="space-y-3 text-left">
                  <div className="text-sm font-medium text-red-600">✕ Basic Services</div>
                  <div className="text-sm">
                    <span className="text-red-600">✕ No flexibility</span> to change your trip
                  </div>
                  <div className="text-sm">
                    <span className="text-red-600">✕ No refund</span> if you decide to cancel
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button fullWidth type="secondary">
                    Continue with Saver
                  </Button>
                </div>
              </div>
            </div>

            {/* Standard Option */}
            <div className="relative">
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
                <Badge type="info">Recommended</Badge>
              </div>
              <div className="bg-white rounded-lg border-2 border-blue-200 shadow-sm">
                <div className="text-center p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-2xl">✓</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Standard</h3>
                  <div className="text-2xl font-bold mb-6">$72.50</div>
                  
                  <div className="space-y-3 text-left">
                    <div className="text-sm font-medium text-green-600">✓ Plus Services</div>
                    <div className="text-sm">
                      <span className="text-green-600">✓ Reschedule your trip for free</span>, or only pay the difference, <span className="font-medium">with any airline</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-red-600">✕ No refund</span> if you decide to cancel
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button fullWidth type="primary">
                      Continue with Standard
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Flexi Option */}
            <div className="bg-white rounded-lg border shadow-sm">
              <div className="text-center p-6">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                    <span className="text-2xl">🎫</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Flexi</h3>
                <div className="text-2xl font-bold mb-6">$85.36</div>
                
                <div className="space-y-3 text-left">
                  <div className="text-sm font-medium text-green-600">✓ Premium Services</div>
                  <div className="text-sm">
                    <span className="text-green-600">✓ Reschedule your trip for free</span>, or only pay the difference, <span className="font-medium">with any airline</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-green-600">✓ 80% refund</span> of the ticket and any airline services if you cancel
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button fullWidth type="secondary">
                    Continue with Flexi
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Information Alert */}
        <Alert type="info" icon={true} spaceAfter="large">
          Rebooking and cancellation options are available up to 48 hours before the first departure in your itinerary.
        </Alert>
      </div>
    </div>
  );
}
