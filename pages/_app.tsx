import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { CoreBlockchain } from "@thirdweb-dev/chains"
import { Navbar } from "../components/Navbar/Navbar";

// This is the chain your dApp will work on.
const activeChain = CoreBlockchain;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      {/* Render the navigation menu above each component */}
      <Navbar />
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
