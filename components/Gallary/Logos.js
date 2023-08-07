import { Box, Grid } from "@chakra-ui/react";
import styles from "./logos.module.css";

const Logos = () => {
  return (
    <>
      {" "}
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={4}
        maxW="800px"
        mx="auto"
        className={styles.container}
      >
        <Box className={styles.box}>
          <img src="/WClogoW.jpg" alt="Logo 1" className={styles.logo} />
        </Box>

        <Box className={styles.box}>
          <img src="/VSlogo.jpg" alt="Logo 3" className={styles.logo} />
        </Box>

        <Box className={styles.box}>
          <img src="/Tlogo.jpg" alt="Logo 6" className={styles.logo} />
        </Box>

        <Box className={styles.box}>
          <img src="/TXlogoB.jpg" alt="Logo 5" className={styles.logo} />
        </Box>

        <Box className={styles.box}>
          <img src="/WClogoB.jpg" alt="Logo 2" className={styles.logo} />
        </Box>
        <Box className={styles.box}>
          <img src="/TXlogoW.jpg" alt="Logo 4" className={styles.logo} />
        </Box>
      </Grid>
    </>
  );
};

export default Logos;
