import { Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { nftDropContractAddress } from "../consts/contractAddresses";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const Mint: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Mint An NFT !</h1>

      <p className={styles.explain}>
        Each wallet can mint up to 3 <b>NFT Items</b> that we lazy minted to stake it
      </p>
       
      <p className={styles.explain}>
        Price (Whitelist) : 20 Core per item (Unlimited)
      </p>

      <p className={styles.explain}>
        Price (Public) : 10 Core per item (Up to 3 per wallet)
      </p>
      
      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />

      <Web3Button
        theme="dark"
        contractAddress={nftDropContractAddress}
        action={(contract) => contract.erc721.claim(1)}
        onSuccess={() => {
          alert("NFT Claimed!");
          router.push("/stake");
        }}
        onError={(error) => {
          alert(error);
        }}
      >
        Mint
      </Web3Button>

    </div>
  );
};

export default Mint;
