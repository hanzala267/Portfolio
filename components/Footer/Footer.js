import { Box, Flex, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" py={4} bg="#f9f9f9">
      <Flex justify="center" align="center">
        <Text fontSize="sm" color="gray.600">
          &copy; {new Date().getFullYear()} Muhammad .Hanzala . All rights
          reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
