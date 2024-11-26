import { PartyPopper } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Calendar } from "lucide-react";
import { MapPin } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";
import React, { useState } from "react";
import { Instagram, Facebook, Twitter, Linkedin, Github } from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Timeline", href: "/#timeline" },
  { label: "Book Seat", href: "/book-seat" },
];

export const features = [
  {
    icon: <PartyPopper />,
    text: "A Day to Remember at the College Auditorium",
    description:
      "Mark your calendars—Fresher's Party 2024 is about to bring the house down! Get ready for an evening packed with fun, talent, and unforgettable vibes. Whether you're hitting the stage, hyping up your friends, or just soaking in the excitement, this is your night to shine. Expect cool performances, surprise acts, and the crowd-favorite StageVibe rating system to keep things lively! Don’t miss out on the fun—it’s time to kick off this amazing journey together in style!",
  },
  {
    icon: <Calendar />,
    text: "Date: To be announced",
    description: "",
  },
  {
    icon: <MapPin />,
    text: "Venue:",
    description: "Auditorium, Nalanda College",
  },
];

export const testimonials = [{}];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "https://nalandafresher.onrender.com Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#about", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];

export const socialLinks = [
  {
    href: "https://www.instagram.com/",
    icon: <Instagram size={20} className="text-pink-400" />, // Lucide Instagram icon
  },

  {
    href: "https://www.linkedin.com/",
    icon: <Linkedin size={20} className="text-blue-600" />, // Lucide LinkedIn icon
  },
  {
    href: "https://www.github.com/",
    icon: <Github size={20} className="text-white-600" />, // Lucide YouTube icon
  },
];
