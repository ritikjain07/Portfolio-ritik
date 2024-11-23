"use client"; // This marks the file as a Client Component

import { useEffect, useState } from "react";
import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

async function getData() {
  const res = await fetch(
    `https://dev.to/api/articles?username=${personalData.devUsername}`
  );
  const data = await res.json();
  return data; // return the fetched data
}

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [isClient, setIsClient] = useState(false);

  // UseEffect to ensure code that uses document or window runs only in client-side
  useEffect(() => {
    setIsClient(true);
    const fetchData = async () => {
      const data = await getData();
      setBlogs(data); // Update blogs state with fetched data
    };
    fetchData();
  }, []);

  if (!isClient) {
    return null; // Prevent rendering on the server-side
  }

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} /> {/* Now the blogs data is passed */}
      <ContactSection />
    </>
  );
}
