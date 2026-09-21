// ---------------------------------------------------------------
// Everything about me lives in this one file.
// Change it here and the whole site updates.
//
// The one exception is my email address: it lives base64-encoded in
// src/lib/contact.js so it isn't sitting in the bundle as plain text for
// scrapers to harvest. That file explains how to change it.
// ---------------------------------------------------------------

import { emailAddress } from "../lib/contact";

export const BIRTHDAY = "2009-03-05";

export function currentAge(from = new Date()) {
  const born = new Date(BIRTHDAY);
  let age = from.getFullYear() - born.getFullYear();
  const beforeBirthday =
    from.getMonth() < born.getMonth() ||
    (from.getMonth() === born.getMonth() && from.getDate() < born.getDate());
  if (beforeBirthday) age -= 1;
  return age;
}

export const profile = {
  name: "Oliver Rodax",
  role: "Electronics & Technical Informatics student",
  school: "HTL Mödling",
  location: "Lower Austria",
  // Public contact only — no phone, no street address.
  // Decoded at runtime, never a literal in the bundle. See lib/contact.js.
  email: emailAddress(),
  github: "https://github.com/OliverRodax",
  githubHandle: "OliverRodax",
  tagline: "Most of what I build runs on a microcontroller.",
  intro:
    "I study electronics and technical informatics at HTL Mödling. Outside of school I build embedded things: smartwatch firmware, my own PCBs, a small handheld console on an ESP32, and the home automation that runs our house.",
  blurb: [
    "I started with Arduino and never really stopped. Since then I have moved from wiring up modules to writing firmware in C, and lately to designing my own boards in KiCad. School covers the theory. The rest happens at my desk at home.",
    "I have done three internships. Two of them were at Hamburger GmbH. The first one was mostly IT support, and the second one I spent writing an OPC DA client in Python that reads live data off the plant machinery. At IAGNG Gas Analytics I worked on commissioning and built a C# tool for managing a National Instruments cRIO controller.",
    "Right now most of my time goes into Project Alpine, my second smartwatch, with a PCB I designed myself and Zephyr firmware on an nRF54L15. The rest goes into RDX Home, the Home Assistant setup that runs our house without depending on anyone's cloud.",
  ],
};

export const experience = [
  {
    year: "2026",
    duration: "1-month internship",
    role: "Commissioning & Software Development",
    org: "IAGNG Gas Analytics GmbH",
    place: "Weikersdorf",
    points: [
      "Built a management tool for a National Instruments cRIO controller in C#",
      "Wrote Excel macros to take the repetition out of measurement reporting",
      "Commissioned and serviced gas analysers together with the technicians",
    ],
    tags: ["C#", "cRIO", "Commissioning", "Excel / VBA"],
  },
  {
    year: "2025",
    duration: "1-month internship",
    role: "IT Support, in practice software development",
    org: "Hamburger GmbH",
    place: "Pitten",
    points: [
      "Taken on for IT support and spent the month writing software instead",
      "Wrote an OPC DA client in Python that reads live process data off the plant machinery",
      "Programmed and tested the application myself, start to finish",
    ],
    tags: ["Python", "OPC DA", "Industrial IT"],
  },
  {
    year: "2024",
    duration: "1-month internship",
    role: "IT Support Intern",
    org: "Hamburger GmbH",
    place: "Pitten",
    points: [
      "First-line IT support and helping users with their problems",
      "Replaced and configured network switches across the plant",
    ],
    tags: ["Networking", "Support"],
  },
];

export const education = [
  {
    year: "since 2023",
    title: "Electronics & Technical Informatics",
    org: "HTL Mödling",
    note: "Higher technical college. Five years of electronics, embedded systems and software engineering.",
  },
  {
    year: "2019 – 2023",
    title: "Secondary school",
    org: "BG/BRG Neunkirchen",
    note: null,
  },
  {
    year: "2015 – 2019",
    title: "Primary school",
    org: "Volksschule Seebenstein",
    note: null,
  },
];

// Featured work, roughly in the order I'd want to talk about it.
// `url: null` means the repository is private — happy to walk through it in person.
export const projects = [
  {
    name: "SmartWatch",
    repo: "SmartWatch",
    url: "https://github.com/OliverRodax/SmartWatch",
    blurb:
      "My first smartwatch. Bare-metal C firmware on a microcontroller, with a separate test setup for the individual hardware modules.",
    stack: ["C", "Embedded", "Makefile"],
    note: null,
  },
  {
    name: "Project Alpine (SmartWatch 2)",
    repo: null,
    url: null,
    blurb:
      "The second version, and what I spend most of my time on right now. The PCB is my own design in KiCad and the firmware runs on Zephyr on a Nordic nRF54L15. It is currently in bring-up.",
    stack: ["Zephyr RTOS", "nRF54L15", "KiCad", "C"],
    note: "Still private while I am working on it. Ask me and I will show you.",
  },
  {
    name: "ESP32 Handheld Console",
    repo: "game_boy",
    url: "https://github.com/OliverRodax/game_boy",
    blurb:
      "A small handheld console running on an ESP32, set up as a PlatformIO project. I wrote the firmware and the games that run on it.",
    stack: ["PlatformIO", "ESP32", "C++", "C"],
    note: null,
  },
  {
    name: "cRIO Management Tool",
    repo: "Crio",
    url: "https://github.com/OliverRodax/Crio",
    blurb:
      "A C# tool for managing a National Instruments CompactRIO controller. It deploys the startup executable, handles the aliases and runs tests against the target.",
    stack: ["C#", ".NET", "NI cRIO"],
    note: "Written during my internship at IAGNG Gas Analytics.",
  },
  {
    name: "RDX Home",
    repo: null,
    url: null,
    blurb:
      "The home automation for our house. It is a Docker Compose stack with Home Assistant, MQTT, Zigbee2MQTT, ESPHome, InfluxDB and Grafana. I also wrote an ESP32 bridge in PlatformIO that reads our Hargassner boiler over RS232 and puts the values on MQTT. Everything runs locally and nothing depends on a cloud service.",
    stack: ["Home Assistant", "Docker", "ESP32", "MQTT", "Python"],
    note: null,
  },
  {
    name: "Ingrid Website",
    repo: "IngridWebsite",
    url: "https://github.com/OliverRodax/IngridWebsite",
    blurb:
      "A website in Next.js and TypeScript that I built and deployed myself, including running it in production.",
    stack: ["Next.js", "TypeScript", "React", "Node.js"],
    note: null,
  },
  {
    name: "OPC DA Client",
    repo: null,
    url: null,
    blurb:
      "A Python client that reads live process data out of the plant machinery over OPC DA. I wrote it during my internship at Hamburger GmbH and it was used on site.",
    stack: ["Python", "OPC DA"],
    note: "Private repository, it belongs to the company.",
  },
];

// The drawer: school exercises, experiments, and things I stopped working on.
// Listed honestly as what they are.
export const smallStuff = [
  {
    name: "HTL Game Map Editor",
    lang: "Python",
    url: "https://github.com/OliverRodax/Htl_Game_Map_Editor",
    note: "A small paint-style tool for drawing tile maps and exporting them as JSON.",
  },
  {
    name: "Czacker Spiel",
    lang: "C#",
    url: "https://github.com/OliverRodax/Czacker_Spiel",
    note: "A small RPG for the command line, written for school.",
  },
  {
    name: "Coding Contest 2025",
    lang: "C#",
    url: "https://github.com/OliverRodax/Coding_Contest_2025",
    note: "Contest entry with team Educarboden.",
  },
  {
    name: "E-Ink Dashboard",
    lang: "Python",
    url: "https://github.com/OliverRodax/ePaper",
    note: "A weather and reminder display on a Raspberry Pi. I stopped working on it before it was done.",
  },
  {
    name: "Chess",
    lang: "C#",
    url: "https://github.com/OliverRodax/Chess",
    note: "Board and move generation in C#. Never finished.",
  },
  {
    name: "Event Rater",
    lang: "Raspberry Pi",
    url: "https://github.com/OliverRodax/Nici_Ratings",
    note: "A button box people can use to rate their experience: good, medium or bad. Runs on a Raspberry Pi.",
  },
  {
    name: "Book of HTL",
    lang: "TypeScript",
    url: "https://github.com/OliverRodax/Book_Of_HTL",
    note: "A sports betting site for my programming class, with points instead of money. React front end and a Django API.",
  },
  {
    name: "Donkey Kong",
    lang: "Python",
    url: "https://github.com/OliverRodax/Donkey_Kong",
    note: null,
  },
  {
    name: "Schnapsen",
    lang: "Python",
    url: "https://github.com/OliverRodax/Schnapsen",
    note: null,
  },
  {
    name: "Tic Tac Toe",
    lang: "Python",
    url: "https://github.com/OliverRodax/TicTacToe",
    note: null,
  },
];

// Levels are deliberately honest — they match my CV, not my ego.
export const skills = [
  {
    group: "Languages",
    doodle: "code",
    items: [
      { name: "Python", level: "comfortable" },
      { name: "C#", level: "comfortable" },
      { name: "C", level: "comfortable" },
      { name: "C++", level: "learning" },
      { name: "JavaScript", level: "learning" },
      { name: "TypeScript", level: "learning" },
    ],
  },
  {
    group: "Electronics & Embedded",
    doodle: "chip",
    items: [
      { name: "Microcontroller programming", level: "hands-on" },
      { name: "PlatformIO / ESP32", level: "hands-on" },
      { name: "Arduino", level: "hands-on" },
      { name: "Circuit design & assembly", level: "hands-on" },
      { name: "KiCad PCB design", level: "learning" },
      { name: "Zephyr RTOS", level: "learning" },
    ],
  },
  {
    group: "Web",
    doodle: "globe",
    items: [
      { name: "React", level: "learning" },
      { name: "Next.js", level: "learning" },
      { name: "Node.js", level: "learning" },
      { name: "Prisma", level: "learning" },
      { name: "SQLite", level: "learning" },
    ],
  },
  {
    group: "Tools & Systems",
    doodle: "wrench",
    items: [
      { name: "Linux", level: "comfortable" },
      { name: "Windows", level: "comfortable" },
      { name: "Docker", level: "learning" },
      { name: "Git", level: "learning" },
      { name: "Caddy", level: "learning" },
      { name: "Excel + Power Query", level: "comfortable" },
    ],
  },
];

export const languages = [
  { name: "German", level: "Native speaker" },
  { name: "English", level: "Fluent, spoken and written" },
];

export const nav = [
  { id: "about", label: "About" },
  { id: "work", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
