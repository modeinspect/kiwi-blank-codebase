"use client"

import React, { useState } from "react";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import Heading from "@kiwicom/orbit-components/lib/Heading";
import Text from "@kiwicom/orbit-components/lib/Text";
import InputField from "@kiwicom/orbit-components/lib/InputField";
import Select from "@kiwicom/orbit-components/lib/Select";
import Checkbox from "@kiwicom/orbit-components/lib/Checkbox";
import Button from "@kiwicom/orbit-components/lib/Button";

interface PassengerDetails {
  title: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  nationality: string;
  email: string;
  phone: string;
  passportNumber: string;
  passportExpiry: string;
  agreeToTerms: boolean;
}

interface FormErrors {
  title?: string;
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
  nationality?: string;
  email?: string;
  phone?: string;
  passportNumber?: string;
  passportExpiry?: string;
  agreeToTerms?: string;
}

export default function BookingPage() {
  const [formData, setFormData] = useState<PassengerDetails>({
    title: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    nationality: "",
    email: "",
    phone: "",
    passportNumber: "",
    passportExpiry: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const titleOptions = [
    { value: "", label: "Select title" },
    { value: "mr", label: "Mr." },
    { value: "mrs", label: "Mrs." },
    { value: "ms", label: "Ms." },
    { value: "dr", label: "Dr." },
  ];

  const countryOptions = [
    { value: "", label: "Select country" },
    { value: "us", label: "United States" },
    { value: "uk", label: "United Kingdom" },
    { value: "ca", label: "Canada" },
    { value: "au", label: "Australia" },
    { value: "de", label: "Germany" },
    { value: "fr", label: "France" },
    { value: "es", label: "Spain" },
    { value: "it", label: "Italy" },
    { value: "nl", label: "Netherlands" },
    { value: "cz", label: "Czech Republic" },
  ];

  const handleInputChange = (field: keyof PassengerDetails) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  const handleSelectChange = (field: keyof PassengerDetails) => (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value,
    }));
    
    // Clear error when user selects
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required";
    if (!formData.nationality) newErrors.nationality = "Nationality is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.passportNumber.trim()) newErrors.passportNumber = "Passport number is required";
    if (!formData.passportExpiry) newErrors.passportExpiry = "Passport expiry date is required";
    if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms and conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("Form submitted:", formData);
      alert("Booking submitted successfully!");
      
      // Reset form
      setFormData({
        title: "",
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        nationality: "",
        email: "",
        phone: "",
        passportNumber: "",
        passportExpiry: "",
        agreeToTerms: false,
      });
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
        <form onSubmit={handleSubmit}>
          <Stack spacing="800">
            {/* Header */}
            <div>
              <Heading as="h1" type="title1" spaceAfter="small">
                Passenger Details
              </Heading>
              <Text type="secondary">
                Please fill in your personal information for the booking.
              </Text>
            </div>

            {/* Personal Information */}
            <div>
              <Heading as="h2" type="title3" spaceAfter="small">
                Personal Information
              </Heading>
              
              <Stack spacing="400">
                {/* Title and Name */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Select
                    options={titleOptions}
                    value={formData.title}
                    onChange={handleSelectChange("title")}
                    label="Title"
                    error={errors.title}
                    required
                  />
                  <InputField
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange("firstName")}
                    label="First Name"
                    placeholder="Enter your first name"
                    error={errors.firstName}
                    required
                  />
                  <InputField
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange("lastName")}
                    label="Last Name"
                    placeholder="Enter your last name"
                    error={errors.lastName}
                    required
                  />
                </div>

                {/* Date of Birth and Nationality */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField
                    type="text"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange("dateOfBirth")}
                    label="Date of Birth"
                    placeholder="YYYY-MM-DD"
                    error={errors.dateOfBirth}
                    required
                  />
                  <Select
                    options={countryOptions}
                    value={formData.nationality}
                    onChange={handleSelectChange("nationality")}
                    label="Nationality"
                    error={errors.nationality}
                    required
                  />
                </div>
              </Stack>
            </div>

            {/* Contact Information */}
            <div>
              <Heading as="h2" type="title3" spaceAfter="small">
                Contact Information
              </Heading>
              
              <Stack spacing="400">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange("email")}
                    label="Email Address"
                    placeholder="your.email@example.com"
                    error={errors.email}
                    required
                  />
                  <InputField
                    type="text"
                    value={formData.phone}
                    onChange={handleInputChange("phone")}
                    label="Phone Number"
                    placeholder="+1 (555) 123-4567"
                    error={errors.phone}
                    required
                  />
                </div>
              </Stack>
            </div>

            {/* Travel Document */}
            <div>
              <Heading as="h2" type="title3" spaceAfter="small">
                Travel Document
              </Heading>
              
              <Stack spacing="400">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField
                    type="text"
                    value={formData.passportNumber}
                    onChange={handleInputChange("passportNumber")}
                    label="Passport Number"
                    placeholder="Enter passport number"
                    error={errors.passportNumber}
                    required
                  />
                  <InputField
                    type="text"
                    value={formData.passportExpiry}
                    onChange={handleInputChange("passportExpiry")}
                    label="Passport Expiry Date"
                    placeholder="YYYY-MM-DD"
                    error={errors.passportExpiry}
                    required
                    help="Passport must be valid for at least 6 months from travel date"
                  />
                </div>
              </Stack>
            </div>

            {/* Terms and Conditions */}
            <div>
              <Checkbox
                checked={formData.agreeToTerms}
                onChange={handleInputChange("agreeToTerms")}
                label="I agree to the terms and conditions and privacy policy"
                hasError={!!errors.agreeToTerms}
                info={errors.agreeToTerms}
              />
            </div>

            {/* Submit Button */}
            <div>
              <Button
                type="primary"
                size="normal"
                fullWidth
                submit
                loading={isSubmitting}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Complete Booking"}
              </Button>
            </div>
          </Stack>
        </form>
      </div>
    </div>
  );
}