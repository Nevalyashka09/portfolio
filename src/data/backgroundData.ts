import uiux from "../images/uiux.png";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import ts from "../images/ts.png";
import react from "../images/react.png";
import wordpress from "../images/wordpress.png";

interface Card {
  name: string;
  src: string;
}

interface TimelineEntry {
  date: string;
  position: string;
  company: string;
  arrow: boolean;
  type: "education" | "experience";
}

export const cardsData: Card[] = [
  { name: "UI/UX", src: uiux },
  { name: "HTML", src: html },
  { name: "CSS", src: css },
  { name: "JS", src: js },
  { name: "TS", src: ts },
  { name: "React", src: react },
  { name: "WP", src: wordpress },
];

export const timelineData: TimelineEntry[] = [
  {
    date: "",
    position: "",
    company: "",
    arrow: false,
    type: "education",
  },
  {
    date: "",
    position: "",
    company: "",
    arrow: false,
    type: "education",
  },
  {
    date: " | Feb - Jul 2023",
    position: "Fullstack Web Developer",
    company: "Wild Code School, Bordeaux",
    arrow: true,
    type: "education",
  },
  {
    date: " | Mar - Apr 2021",
    position: "Piscine",
    company: "Ecole 42, Paris",
    arrow: true,
    type: "education",
  },
  {
    date: "",
    position: "",
    company: "",
    arrow: false,
    type: "education",
  },
  {
    date: " | Sep 2011 - Jun 2015",
    position: "Master's Degree",
    company: "Fudan University, Shanghai",
    arrow: true,
    type: "education",
  },
  {
    date: " | Sep 2007 - Jun 2011",
    position: "Bachelor's Degree",
    company: "Shevchenko University, Kyiv",
    arrow: true,
    type: "education",
  },
  {
    date: "",
    position: "",
    company: "",
    arrow: false,
    type: "experience",
  },
  {
    date: " | Mar 2024",
    position: "Freelance Web Developer",
    company: "",
    arrow: true,
    type: "experience",
  },
  {
    date: " | Sep 2023 - Mar 2024",
    position: "Front End Developer",
    company: "Qomon, Bordeaux",
    arrow: true,
    type: "experience",
  },
  {
    date: "",
    position: "",
    company: "",
    arrow: false,
    type: "experience",
  },
  {
    date: "",
    position: "",
    company: "",
    arrow: false,
    type: "experience",
  },
  {
    date: " | May 2021 - Dec 2022",
    position: "Team Manager",
    company: "Gucci, Paris",
    arrow: true,
    type: "experience",
  },
  {
    date: "",
    position: "",
    company: "",
    arrow: false,
    type: "experience",
  },
  {
    date: "",
    position: "",
    company: "",
    arrow: false,
    type: "experience",
  },
];

export const contactInfo: string[] = [
  "Contact : ",
  "olesia.tur@gmail.com",
  "+33 6 95 01 36 94",
];

export const cursivePhrases: string[] = [
  "Let’s make something",
  "amazing together.",
];
