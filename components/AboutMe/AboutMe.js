import React from "react";
import styles from "./aboutme.module.css";
import Image from "next/image";
import { Button, ButtonGroup, Stack } from "@chakra-ui/react";
const AboutMe = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div>
            <Image
              className={styles.image}
              src="/web-comp.jpg"
              alt="computer"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className={styles.right}>
          <div
            className={styles.About}
            style={{
              fontFamily: "mulish",
              fontSize: "15px",
              fontWeight: "bold",
            }}
          >
            ABOUT ME
          </div>
          <div
            className={styles.heading}
            style={{
              fontFamily: "poppins",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            Multidisciplinary Creative: Visual Artist, Brand Designer, Software
            Engineer, and Web Developer 🎈
          </div>
          <div
            className={styles.details}
            style={{
              fontFamily: "mulish",
              fontWeight: "500",
            }}
          >
            Experienced visual artist, brand designer, and audio engineer
            proficient in Adobe Creative Suite (Illustrator, Premiere Pro, After
            Effects, Audition). Also a software engineer and web developer
            skilled in Next.js, Sass, CSS, Tailwind CSS, Chakra UI, and Framer
            Motion. Blending creativity and technical expertise to create
            captivating art, impactful brands, immersive audio, and elegant
            websites. Let's collaborate on innovative projects.
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
