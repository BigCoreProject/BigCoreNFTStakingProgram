import React from 'react';
import { ThirdwebProvider, PayEmbed } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";  // Adjust import if necessary

const clientId = "c3fd30ded3322c67d3d3004a7efc6744"; 

// Create a Thirdweb client instance
const client = createThirdwebClient({ clientId });

export function Buys() {
  return (
    <ThirdwebProvider>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Purchase Crypto</h1>
        {/* Render the PayEmbed component */}
        <PayEmbed client={client} />
      </div>
    </ThirdwebProvider>
  );
}

export default Buys;