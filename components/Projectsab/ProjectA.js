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

const ProjectA = () => {
  return (
    <>
      {" "}
      <Center as="section" h="100vh" className={styles.asp}>
        <Box maxW="900px" bg="white" p="6" className={styles.container}>
          <div className={styles.left}>
            <Image
              src="/SRMS.png"
              alt="ASP.net project"
              borderRadius="xl"
              objectFit="cover"
              mx="auto"
            />
          </div>
          <div className={styles.content}>
            <Heading my="4" size="lg" fontFamily="poppins" fontSize="20px">
              Student Result Management System
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
                ASP.NET
              </Button>
              <Button
                colorScheme="gray"
                variant="outline"
                size="sm"
                fontFamily="mulish"
                fontWeight={400}
              >
                Bootstrap
              </Button>
              <Button
                colorScheme="gray"
                variant="outline"
                size="sm"
                fontFamily="mulish"
                fontWeight={400}
              >
                JavaScript
              </Button>
              <Button
                colorScheme="gray"
                variant="outline"
                size="sm"
                fontFamily="mulish"
                fontWeight={400}
              >
                SQL Server
              </Button>
            </Stack>
            <div className={styles.pera} style={{ fontFamily: "mulish" }}>
              <Text>
                As my semester project at National Textile University in
                Faisalabad, Pakistan, I developed a web-based application for
                Student Result Management System using ASP.NET. This application
                managed academic records, grades, and provided a parent portal
                for easy access and monitoring of students' progress. My focus
                was on creating a user-friendly interface that provided
                intuitive navigation and easy access to student results.
              </Text>
            </div>
          </div>
        </Box>
      </Center>
    </>
  );
};

export default ProjectA;
