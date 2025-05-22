"use client";

import React, { useState, useEffect } from "react";
import Card from "@/lib/kiwi-orbit/Card";
import Button from "@/lib/kiwi-orbit/Button";
import Heading from "@/lib/kiwi-orbit/Heading";
import Text from "@/lib/kiwi-orbit/Text";
import Slider from "@/lib/kiwi-orbit/Slider";
import Stack from "@/lib/kiwi-orbit/Stack";
import CheckCircle from "@/lib/kiwi-orbit/icons/CheckCircle";
import List from "@/lib/kiwi-orbit/List";
import ListItem from "@/lib/kiwi-orbit/List/ListItem";

export default function PricingPage() {
  const [usageValue, setUsageValue] = useState(1);
  const [proPricePerMonth, setProPricePerMonth] = useState(29);
  const [enterprisePricePerMonth, setEnterprisePricePerMonth] = useState(99);
  
  // Calculate pricing based on usage slider
  useEffect(() => {
    // Base price + additional cost per usage unit
    setProPricePerMonth(29 + (usageValue - 1) * 10);
    setEnterprisePricePerMonth(99 + (usageValue - 1) * 20);
  }, [usageValue]);
  
  const pricingTiers = [
    {
      title: "Free",
      price: 0,
      description: "Basic features for personal use",
      features: [
        "Up to 3 projects",
        "Basic analytics",
        "24-hour support response time",
        "1GB storage",
      ],
      buttonText: "Get Started",
      buttonType: "secondary",
    },
    {
      title: "Pro",
      price: proPricePerMonth,
      description: "Everything you need for a growing business",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "4-hour support response time",
        `${usageValue * 10}GB storage`,
        "Custom branding",
      ],
      buttonText: "Upgrade to Pro",
      buttonType: "primary",
      popular: true,
    },
    {
      title: "Enterprise",
      price: enterprisePricePerMonth,
      description: "Advanced features for large organizations",
      features: [
        "Unlimited everything",
        "Dedicated account manager",
        "1-hour support response time",
        `${usageValue * 50}GB storage`,
        "Custom integrations",
        "SSO authentication",
      ],
      buttonText: "Contact Sales",
      buttonType: "white",
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Heading type="title1">Transparent Pricing for Every Need</Heading>
          <div className="mt-4 max-w-2xl mx-auto">
            <Text type="secondary" size="large">
              Choose the plan that works best for your business. All plans include our core features.
            </Text>
          </div>
        </div>

        {/* Usage Slider */}
        <div className="max-w-xl mx-auto mb-16 bg-white p-6 rounded-lg shadow">
          <Heading type="title3">Estimated Usage</Heading>
          <Text>Adjust the slider to see pricing based on your expected usage</Text>
          <div className="my-6">
            <Slider
              minValue={1}
              maxValue={10}
              step={1}
              defaultValue={usageValue}
              onChange={value => setUsageValue(value as number)}
              label={`Usage level: ${usageValue}`}
              valueDescription={`${usageValue} ${usageValue === 1 ? "unit" : "units"}`}
            />
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div key={index} className={`relative ${tier.popular ? "md:-mt-8" : ""}`}>
              {tier.popular && (
                <div className="absolute -top-4 inset-x-0 flex justify-center">
                  <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              <Card
                title={tier.title}
                titleAs="h2"
              >
                <Stack spacing="200">
                  <div>
                    <Heading type="title1">
                      ${tier.price}
                      <span style={{ marginLeft: "4px" }}>
                        <Text type="secondary" size="small">
                          /month
                        </Text>
                      </span>
                    </Heading>
                    <Text>{tier.description}</Text>
                  </div>
                  
                  <List type="secondary">
                    {tier.features.map((feature, i) => (
                      <ListItem 
                        key={i}
                        icon={<CheckCircle size="small" color="success" />}
                      >
                        {feature}
                      </ListItem>
                    ))}
                  </List>
                  
                  <Button
                    fullWidth
                    type={tier.buttonType as any}
                    size="large"
                  >
                    {tier.buttonText}
                  </Button>
                </Stack>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Text type="secondary">
            All prices are in USD and billed monthly. Need a custom plan?{" "}
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Contact us
            </a>
          </Text>
        </div>
      </div>
    </div>
  );
}
