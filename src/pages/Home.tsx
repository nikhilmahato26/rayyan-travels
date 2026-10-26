import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { MobileActionBar } from '../components/layout/MobileActionBar';
import { WhatsAppButton } from '../components/ui/WhatsAppButton';
import { Hero } from '../components/sections/Hero';
import { BookingPanel } from '../components/sections/BookingPanel';
import { Services } from '../components/sections/Services';
import { RentalCabSection } from '../components/sections/RentalCabSection';
import { Fleet } from '../components/sections/Fleet';
import { TourPackages } from '../components/sections/TourPackages';
import { AirportTransfers } from '../components/sections/AirportTransfers';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { HowToBook } from '../components/sections/HowToBook';
import { About } from '../components/sections/About';
import { BookingForm } from '../components/sections/BookingForm';
import { Contact } from '../components/sections/Contact';
import { scrollToSection } from '../utils/contact';

export const Home: React.FC = () => {
  const [selectedService, setSelectedService] = useState('Rental Cab');
  const [selectedVehicle, setSelectedVehicle] = useState('Any Available Vehicle');
  const [selectedRentalType, setSelectedRentalType] = useState('');

  // Handle service selection from any service card
  const handleSelectService = (serviceType: string) => {
    setSelectedService(serviceType);
    scrollToSection('booking-form');
  };

  // Handle vehicle selection from fleet card
  const handleSelectVehicle = (vehicleName: string) => {
    setSelectedVehicle(vehicleName);
    scrollToSection('booking-form');
  };

  // Handle rental cab category selection
  const handleSelectRentalCab = (rentalType: string, vehicleName?: string) => {
    setSelectedService('Rental Cab');
    setSelectedRentalType(rentalType);
    if (vehicleName) {
      setSelectedVehicle(vehicleName);
    }
    scrollToSection('booking-form');
  };

  // Handle tour category selection
  const handleSelectTourCategory = (categoryTitle: string) => {
    setSelectedService('Tour Package');
    setSelectedRentalType(categoryTitle);
    scrollToSection('booking-form');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7FA]">
      {/* 1. Sticky Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Quick Booking Panel */}
        <BookingPanel 
          initialService={selectedService}
          initialVehicle={selectedVehicle}
        />

        {/* 4. Our Services */}
        <Services onSelectService={handleSelectService} />

        {/* 5. Featured Rental Cab Service */}
        <RentalCabSection onSelectRentalCab={handleSelectRentalCab} />

        {/* 6. Our Fleet */}
        <Fleet onSelectVehicle={handleSelectVehicle} />

        {/* 7. Tour Packages & Travel Experiences */}
        <TourPackages onSelectCategory={handleSelectTourCategory} />

        {/* 8. Airport Transfers */}
        <AirportTransfers 
          onQuickBookAirport={(srv) => {
            setSelectedService(srv);
            scrollToSection('booking-form');
          }} 
        />

        {/* 9. Why Choose Rayyan Travels */}
        <WhyChooseUs />

        {/* 10. How Booking Works */}
        <HowToBook />

        {/* 11. About Us */}
        <About />

        {/* 12. Booking Enquiry Form */}
        <BookingForm
          preselectedService={selectedService}
          preselectedVehicle={selectedVehicle}
          preselectedRentalType={selectedRentalType}
        />

        {/* 13. Contact and Location */}
        <Contact />
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* 15. Floating WhatsApp Button */}
      <WhatsAppButton />

      {/* 16. Mobile Sticky Call / WhatsApp / Book Bar */}
      <MobileActionBar />
    </div>
  );
};
