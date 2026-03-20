"use client";

import React, { useState, useEffect } from "react";
import { AnnouncementBar } from "./components/AnnouncementBar";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Categories } from "./components/Categories";
import { MilanoFeature } from "./components/MilanoFeature";
import { AboutUs } from "./components/AboutUs";
import { PersonalShopper } from "./components/PersonalShopper";
import { Footer } from "./components/Footer";
import { NewsletterPopup } from "./components/NewsletterPopup";

export default function Page() {
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Header />
      <main className="flex-grow">
        <Hero />
        <Categories />
        <MilanoFeature />
        <AboutUs />
        <PersonalShopper />
      </main>
      <Footer />
      <NewsletterPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
}
