import React from "react";
import Typewriter from "typewriter-effect";
import styles from "./about.module.css";
import Image from "next/image";
import { color } from "framer-motion";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div>
          <div className={styles.Name}>
            <h1 style={{ fontFamily: "poppins", colo: "#2E2D32" }}>
              Hi!🖐 I'm Muhammad Hanzala
            </h1>
          </div>
          <div
            className={styles.Typewriter}
            style={{
              fontFamily: "mulish",
              fontSize: "6vh",
            }}
          >
            <Typewriter
              options={{
                strings: [
                  '<span style="background: linear-gradient(90deg, rgba(209,115,0,1) 0%, rgba(245,172,0,1) 5%, rgba(255,244,0,1) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; color: rgb(100, 100, 100); font-weight: bold;">Software Engineer</span>',

                  '<span style="background: linear-gradient(90deg, rgba(209,115,0,1) 0%, rgba(245,172,0,1) 5%, rgba(255,244,0,1) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; color: rgb(100, 100, 100); font-weight: bold;">Diverse Programmer</span>',

                  '<span style="background: linear-gradient(90deg, rgba(209,115,0,1) 0%, rgba(245,172,0,1) 5%, rgba(255,244,0,1) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; color: rgb(100, 100, 100); font-weight: bold;">Versatile Visual Artist</span>',
                ],
                autoStart: true,
                loop: true,
                delay: 100,
                cursor: "",
              }}
            />
          </div>
        </div>
        <div>
          <h1
            style={{ fontFamily: "mulish", fontSize: "20px", color: "#555555" }}
          >
            <div>Experienced Visual Artist, Adobe Creative Suit Expert,</div>
            <div> Software Engineer & Web-Developer based on Pakistan🎨</div>
          </h1>
        </div>
        <div
          className={styles.logos}
          style={{
            marginTop: "80px",
            fontFamily: "mulish",
            fontSize: "20px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontFamily: "mulish",
              fontSize: "17px",
              color: "#555555",
              fontWeight: "600",
            }}
          >
            MainTech Stack |
          </div>
          <div className={styles.logoItems}>
            <ul style={{ listStyle: "none", display: "flex" }}>
              <li>
                <Image src="/adobe.jpg" width={50} height={50} />
              </li>
              <li>
                <Image src="/react.png" width={50} height={50} />
              </li>
              <li>
                <Image src="/next.png" width={50} height={50} />
              </li>
              <li>
                <Image src="/sass.png" width={50} height={50} />
              </li>
              <li>
                <Image src="/mongodd.png" width={50} height={50} />
              </li>
              <li>
                <Image src="/Tableau.png" width={50} height={50} />
              </li>
              <li>
                <Image src="/python.png" width={50} height={50} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <section className={styles.section}>
          <div className={styles.blob}></div>
        </section>
      </div>
    </div>
  );
}
export default About;
