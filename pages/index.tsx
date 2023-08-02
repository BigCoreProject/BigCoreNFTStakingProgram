import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>BigCore NFT Staking Program</h1>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/mint`)}
        >
          {/* Mint a new NFT */}
          <Image src="/icons/nftminting-logo.png" alt="drop" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>Mint an NFT</h2>
          <p className={styles.selectBoxDescription}>
            Mint an NFT from the Contract (Phase 1 Price: 10 Core per item)
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          {/* Staking an NFT */}
          <Image src="/icons/nftstaking-logo.png" alt="token" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>Stake Your NFTs</h2>
          <p className={styles.selectBoxDescription}>
            Stake <b>BigCoreNFTStakingProgram</b>{" "}
            NFT items to earn <b>Bcore</b> tokens as rewards !
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
