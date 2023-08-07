import React from "react";
import { Box, Flex, Text, Divider } from "@chakra-ui/react";
import styles from "./steps.module.css";
import { Button, ButtonGroup, Stack } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const StepsComponent = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <Box mt={5} ml={2}>
            <Flex direction="column">
              <Flex mb={1}>
                <Box
                  display="flex"
                  flexDirection="column"
                  pr={4}
                  alignItems="center"
                >
                  <Box
                    borderRadius="full"
                    py={2}
                    px={3}
                    bg="gray.200"
                    color="gray.800"
                    mb={1}
                  >
                    1
                  </Box>
                  <Divider
                    orientation="vertical"
                    borderColor="gray.600"
                    height="100%"
                  />
                </Box>
                <Box>
                  <Text
                    color="gray.800"
                    fontSize="xl"
                    fontWeight="600"
                    style={{ fontFamily: "mulish", fontWeight: "400" }}
                  >
                    Web Development & Coding Skills
                  </Text>
                  <Text
                    color="gray.500"
                    fontSize="lg"
                    pb={3}
                    style={{ fontFamily: "mulish" }}
                  >
                    <Stack
                      className={styles.stack3}
                      direction={{ base: "column", md: "row" }}
                      spacing={4}
                      align={{ base: "flex-start", md: "center" }}
                    >
                      <Button
                        colorScheme="gray.500"
                        variant="outline"
                        size="sm"
                        style={{ fontFamily: "mulish", fontWeight: "400" }}
                      >
                        <div style={{ padding: "5px" }}>
                          <img
                            src="/html.png"
                            alt=""
                            style={{ width: "20px", height: "20px" }}
                          />
                        </div>
                        HTML
                      </Button>
                      <Button
                        colorScheme="gray.500"
                        variant="outline"
                        size="sm"
                        style={{ fontFamily: "mulish", fontWeight: "400" }}
                      >
                        <div style={{ padding: "5px" }}>
                          <img
                            src="/css.png"
                            alt=""
                            style={{ height: "20px" }}
                          />
                        </div>
                        CSS
                      </Button>
                      <Button
                        colorScheme="gray.500"
                        variant="outline"
                        size="sm"
                        style={{ fontFamily: "mulish", fontWeight: "400" }}
                      >
                        <div style={{ padding: "5px" }}>
                          <img
                            src="/tailwind.png"
                            alt=""
                            style={{ height: "20px" }}
                          />
                        </div>
                        Tailwind
                      </Button>
                      <Button
                        colorScheme="gray.500"
                        variant="outline"
                        size="sm"
                        style={{ fontFamily: "mulish", fontWeight: "400" }}
                      >
                        <div style={{ padding: "5px" }}>
                          <img
                            src="/sass.png"
                            alt=""
                            style={{ height: "20px" }}
                          />
                        </div>
                        SASS
                      </Button>
                      <Button
                        colorScheme="gray.500"
                        variant="outline"
                        size="sm"
                        style={{ fontFamily: "mulish", fontWeight: "400" }}
                      >
                        <div style={{ padding: "5px" }}>
                          <img
                            src="/next.png"
                            alt=""
                            style={{ width: "30px" }}
                          />
                        </div>
                        Next.js
                      </Button>
                      <Button
                        colorScheme="gray.500"
                        variant="outline"
                        size="sm"
                        style={{ fontFamily: "mulish", fontWeight: "400" }}
                      >
                        <div style={{ padding: "5px" }}>
                          <img
                            src="/React.png"
                            alt=""
                            style={{ width: "20px" }}
                          />
                        </div>
                        REACT.js
                      </Button>
                      <Button
                        colorScheme="gray.500"
                        variant="outline"
                        size="sm"
                        style={{ fontFamily: "mulish", fontWeight: "400" }}
                      >
                        <div style={{ padding: "5px" }}>
                          <img
                            src="/Python.png"
                            alt=""
                            style={{ width: "20px" }}
                          />
                        </div>
                        Python
                      </Button>{" "}
                      <Button
                        colorScheme="gray.500"
                        variant="outline"
                        size="sm"
                        style={{ fontFamily: "mulish", fontWeight: "400" }}
                      >
                        <div style={{ padding: "5px" }}>
                          <img
                            src="/mongodd.png"
                            alt=""
                            style={{ width: "20px" }}
                          />
                        </div>
                        MongoDB
                      </Button>
                    </Stack>{" "}
                  </Text>
                </Box>
              </Flex>
              <Flex mb={1}>
                <Box
                  display="flex"
                  flexDirection="column"
                  pr={4}
                  alignItems="center"
                >
                  <Box
                    borderRadius="full"
                    py={2}
                    px={3}
                    bg="gray.200"
                    color="gray.800"
                    mb={1}
                  >
                    2
                  </Box>
                  <Divider
                    orientation="vertical"
                    borderColor="gray.600"
                    height="100%"
                  />
                </Box>
                <Box>
                  <Text
                    color="gray.800"
                    fontSize="xl"
                    fontWeight="600"
                    style={{ fontFamily: "mulish", fontWeight: "400" }}
                  >
                    Designing & Animation Skills
                  </Text>
                  <Text
                    color="gray.500"
                    fontSize="lg"
                    pb={3}
                    style={{ fontFamily: "mulish" }}
                  >
                    <Stack
                      className={styles.stack3}
                      direction={{ base: "column", md: "row" }}
                      spacing={4}
                      align={{ base: "flex-start", md: "center" }}
                    >
                      <Button
                        colorScheme="gray.500"
                        variant="outline"
                        size="sm"
                        style={{ fontFamily: "mulish", fontWeight: "400" }}
                      >
                        <div style={{ padding: "5px" }}>
                          <img
                            src="/Photoshop.png"
                            alt=""
                            style={{ height: "20px" }}
                          />
                        </div>
                        Photoshop
                      </Button>
                      <Button
                        colorScheme="gray.500"
                        variant="outline"
                        size="sm"
                        style={{ fontFamily: "mulish", fontWeight: "400" }}
                      >
                        <div style={{ padding: "5px" }}>
                          <img
                            src="/AdobeXD.png"
                            alt=""
                            style={{ height: "20px" }}
                          />
                        </div>
                        Adobe XD
                      </Button>
                      <Button
                        colorScheme="gray.500"
                        variant="outline"
                        size="sm"
                        style={{ fontFamily: "mulish", fontWeight: "400" }}
                      >
                        <div style={{ padding: "5px" }}>
                          <img
                            src="/Illustrator.png"
                            alt=""
                            style={{ height: "20px" }}
                          />
                        </div>
                        Illustrator
                      </Button>
                      <Button
                        colorScheme="gray.500"
                        variant="outline"
                        size="sm"
                        style={{ fontFamily: "mulish", fontWeight: "400" }}
                      >
                        <div style={{ padding: "5px" }}>
                          <img
                            src="/aftereffects.png"
                            alt=""
                            style={{ height: "20px" }}
                          />
                        </div>
                        After Effects
                      </Button>
                      <Button
                        colorScheme="gray.500"
                        variant="outline"
                        size="sm"
                        style={{ fontFamily: "mulish", fontWeight: "400" }}
                      >
                        <div style={{ padding: "5px" }}>
                          <img
                            src="/premiere.png"
                            alt=""
                            style={{ width: "30px" }}
                          />
                        </div>
                        Premiere Pro
                      </Button>
                    </Stack>{" "}
                  </Text>
                </Box>
              </Flex>
              <Flex mb={1}>
                <Box
                  display="flex"
                  flexDirection="column"
                  pr={4}
                  alignItems="center"
                >
                  <Box
                    borderRadius="full"
                    py={2}
                    px={3}
                    bg="gray.200"
                    color="gray.800"
                    mb={1}
                  >
                    3
                  </Box>
                  <Divider
                    orientation="vertical"
                    borderColor="gray.600"
                    height="100%"
                  />
                </Box>
                <Box>
                  <Text
                    color="gray.800"
                    fontSize="xl"
                    fontWeight="600"
                    style={{ fontFamily: "mulish", fontWeight: "400" }}
                  >
                    Other Skills
                  </Text>
                  <Text
                    color="gray.500"
                    fontSize="lg"
                    pb={3}
                    style={{ fontFamily: "mulish" }}
                  >
                    <Stack
                      className={styles.stack3}
                      direction={{ base: "column", md: "row" }}
                      spacing={4}
                      align={{ base: "flex-start", md: "center" }}
                    >
                      <Button
                        colorScheme="gray.500"
                        variant="outline"
                        size="sm"
                        style={{ fontFamily: "mulish", fontWeight: "400" }}
                      >
                        <div style={{ padding: "5px" }}>
                          <img
                            src="/camera.png"
                            alt=""
                            style={{ height: "20px" }}
                          />
                        </div>
                        PhotoGraphy
                      </Button>
                      <Button
                        colorScheme="gray.500"
                        variant="outline"
                        size="sm"
                        style={{ fontFamily: "mulish", fontWeight: "400" }}
                      >
                        <div style={{ padding: "5px" }}>
                          <img
                            src="/ana.png"
                            alt=""
                            style={{ height: "20px" }}
                          />
                        </div>
                        Calligraphy
                      </Button>
                      <Button
                        colorScheme="gray.500"
                        variant="outline"
                        size="sm"
                        style={{ fontFamily: "mulish", fontWeight: "400" }}
                      >
                        <div style={{ padding: "5px" }}>
                          <img
                            src="/statistics.png"
                            alt=""
                            style={{ height: "20px" }}
                          />
                        </div>
                        Statistics
                      </Button>

                      <Button
                        colorScheme="gray.500"
                        variant="outline"
                        size="sm"
                        style={{ fontFamily: "mulish", fontWeight: "400" }}
                      >
                        <div style={{ padding: "5px" }}>
                          <img
                            src="/Audition.png"
                            alt=""
                            style={{ width: "20px" }}
                          />
                        </div>
                        Audition
                      </Button>
                      <Button
                        colorScheme="gray.500"
                        variant="outline"
                        size="sm"
                        style={{ fontFamily: "mulish", fontWeight: "400" }}
                      >
                        <div style={{ padding: "5px" }}>
                          <img
                            src="/Tableau.png"
                            alt=""
                            style={{ width: "20px" }}
                          />
                        </div>
                        Tableau
                      </Button>
                    </Stack>{" "}
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </Box>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(StepsComponent), { ssr: false });
