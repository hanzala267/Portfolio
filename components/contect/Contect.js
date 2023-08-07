import { Box, Grid, VStack, Text, Link, Image } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import styles from "./contact.module.css";
const ContactCard = () => {
  return (
    <>
      <Box
        py={8}
        px={4}
        display="flex"
        justifyContent="center"
        className={styles.container}
      >
        <Grid
          templateColumns={["1fr", "1fr", "1fr", "repeat(4, 1fr)"]}
          gap={4}
          alignItems="center"
        >
          {/* Card 1 */}
          <VStack
            align="start"
            spacing={2}
            bg="white"
            boxShadow="md"
            p={2}
            borderRadius="md"
            width="200px"
          >
            <EmailIcon boxSize={4} />
            <Text fontSize="sm" fontWeight="bold">
              Email
            </Text>
            <Link
              fontSize="sm"
              href="mailto:mhanzala267@gmail.com"
              target="_blank"
            >
              mhanzala267@gmail.com
            </Link>
          </VStack>

          {/* Card 2 */}
          <VStack
            align="start"
            spacing={2}
            bg="white"
            boxShadow="md"
            p={2}
            borderRadius="md"
            width="200px"
          >
            <Image src="/whatsapp.png" alt="WhatsApp" boxSize={6} />
            <Text fontSize="sm" fontWeight="bold">
              WhatsApp
            </Text>
            <Link
              rel="stylesheet"
              href="https://api.whatsapp.com/send/?phone=923321662688&text&type=phone_number&app_absent=0"
            >
              <Text fontSize="sm">+92-332-166-2688</Text>
            </Link>
          </VStack>

          {/* Card 3 */}
          <VStack
            align="start"
            spacing={2}
            bg="white"
            boxShadow="md"
            p={2}
            borderRadius="md"
            width="200px"
          >
            <Image src="/linkedin.png" alt="LinkedIn" boxSize={6} />
            <Text fontSize="sm" fontWeight="bold">
              LinkedIn
            </Text>
            <Link
              fontSize="sm"
              href="https://www.linkedin.com/in/muhammad-hanzala-906a30200/"
              target="_blank"
            >
              LinkedIn Profile
            </Link>
          </VStack>

          {/* Card 4 */}
          <VStack
            align="start"
            spacing={2}
            bg="white"
            boxShadow="md"
            p={2}
            borderRadius="md"
            width="200px"
          >
            <Image src="/github.png" alt="GitHub" boxSize={6} />
            <Text fontSize="sm" fontWeight="bold">
              GitHub
            </Text>
            <Link
              fontSize="sm"
              href="https://github.com/hanzala267"
              target="_blank"
            >
              GitHub Profile
            </Link>
          </VStack>
        </Grid>
      </Box>
    </>
  );
};

export default ContactCard;
