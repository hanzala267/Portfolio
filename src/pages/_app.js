import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
//export default function App({ Component, pageProps }) {
//return <Component {...pageProps} />
//}
