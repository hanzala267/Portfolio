import React from "react";
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

export default Navbar;
