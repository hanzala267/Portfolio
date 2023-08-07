import React from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import styles from "./ProjectA.module.css";

const project = () => {
  return (
    <Center as="section" h="100vh" className={styles.asp}>
      <Box maxW="900px" bg="white" p="6" className={styles.container}>
        <div className={styles.left}>
          <Image
            src="/portfolioSS.png"
            alt="Portfolio"
            borderRadius="xl"
            objectFit="cover"
            mx="auto"
          />
        </div>
        <div className={styles.content}>
          <Heading my="4" size="lg" fontFamily="poppins" fontSize="20px">
            Portfolio Website
          </Heading>
          <Stack
            className={styles.stack3}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            align={{ base: "flex-start", md: "center" }}
          >
            <Button
              colorScheme="gray"
              variant="outline"
              size="sm"
              fontFamily="mulish"
              fontWeight={400}
            >
              Next.js
            </Button>
            <Button
              colorScheme="gray"
              variant="outline"
              size="sm"
              fontFamily="mulish"
              fontWeight={400}
            >
              Chakra UI
            </Button>
            <Button
              colorScheme="gray"
              variant="outline"
              size="sm"
              fontFamily="mulish"
              fontWeight={400}
            >
              Framer Motion
            </Button>
            <Button
              colorScheme="gray"
              variant="outline"
              size="sm"
              fontFamily="mulish"
              fontWeight={400}
            >
              Tailwind CSS
            </Button>
          </Stack>
          <div className={styles.pera} style={{ fontFamily: "mulish" }}>
            <Text>
              Introducing my portfolio website, crafted with precision using
              Next.js, Chakra UI, Framer Motion, and Tailwind CSS. Seamlessly
              blending modern design with smooth animations, it presents a
              captivating visual experience for visitors. With its intuitive
              navigation and responsive layout, my portfolio showcases my skills
              and projects in a stunning and user-friendly manner. Explore my
              work and get a glimpse of my expertise, all within a beautifully
              crafted digital space.
            </Text>
          </div>
        </div>
      </Box>
    </Center>
  );
};

export default project;
