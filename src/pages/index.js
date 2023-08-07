import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import About from "components/About/About";
import ProjectA from "components/Projectsab/ProjectA";
import ProjectB from "components/Projectsab2/ProjectB";
import AboutMe from "components/AboutMe/AboutMe";
import StepsComponent from "components/steps/StepsComponent";
import Logos from "components/Gallary/Logos";
import Footer from "components/Footer/Footer";
import ContactCard from "components/contect/Contect";
const Links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Logos", path: "/logos" },
  { label: "Contact", path: "/contact" },
];

const NavLink = ({ children, path }) => (
  <Link
    as={RouterLink}
    to={path}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    fontFamily={"mulish"}
    fontSize={"sm"}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isBrowser = typeof window !== "undefined";

  return (
    <>
      <Box
        bg="white"
        px={4}
        py={2}
        boxShadow="rgba(0, 0, 0, 0.25) 0px 15px 10px -20px"
      >
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems="center">
            <Box
              fontFamily="russo one"
              textAlign={{ base: "center", md: "left" }}
            >
              .Hanzala
            </Box>
            {isBrowser && (
              <HStack
                as="nav"
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {Links.map((link) => (
                  <NavLink key={link.label} path={link.path}>
                    {link.label}
                  </NavLink>
                ))}
              </HStack>
            )}
          </HStack>
          <Flex alignItems="center">
            <Avatar
              size="sm"
              src="/DP.jpeg"
              display={{ base: "none", md: "block" }}
            />
          </Flex>
        </Flex>

        {isOpen && isBrowser && (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as="nav" spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.label} path={link.path}>
                  {link.label}
                </NavLink>
              ))}
            </Stack>
          </Box>
        )}
      </Box>
    </>
  );
};

export default function Home() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Switch>
            <Route exact path="/about">
              <About />
              <AboutMe />
              <StepsComponent />
            </Route>
            <Route path="/projects">
              <ProjectA />
              <ProjectB />
            </Route>
            <Route path="/logos">
              <Logos />
            </Route>
            <Route path="/contact">
              <
            </Route>
            {/* Add more routes as needed */}
          </Switch>
          <Footer />
        </motion.div>
      </Router>
    </ChakraProvider>
  );
}
