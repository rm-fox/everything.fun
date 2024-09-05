import { useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { program, tokenMintPDA } from "../anchor/setup";

import * as anchor from "@coral-xyz/anchor";
import { keypairIdentity, Metaplex, token } from "@metaplex-foundation/js";
import { PublicKey, SystemProgram, Keypair, Transaction } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID, createMint, getMint } from "@solana/spl-token";
import {
  CreateMetadataAccountArgsV3,
  PROGRAM_ID as TOKEN_METADATA_PROGRAM_ID,
  createCreateMetadataAccountV3Instruction,
} from "@metaplex-foundation/mpl-token-metadata";
import * as web3 from "@solana/web3.js";

export default function CreateButton() {
  const { publicKey, sendTransaction} = useWallet();
  const { connection } = useConnection();
  const [isLoading, setIsLoading] = useState(false);
  
//   console.log(connection)
  const onClick = async () => {
    if (!publicKey) return;
 
    setIsLoading(true);
 
    try {

      const TOKEN_METADATA_PROGRAM_ID = new web3.PublicKey(
        "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
      );
      const metaplex = Metaplex.make(program.provider.connection);
      const metadata = {
        uri: "https://raw.githubusercontent.com/solana-developers/program-examples/new-examples/tokens/tokens/.assets/spl-token.json",
        name: "usdfox",
        symbol: "USDFOX",
      };
      const tokenMintMetadataPDA = await metaplex
        .nfts()
        .pdas()
        .metadata({ mint: tokenMintPDA });

      async function logTransaction(txHash) {
        const { blockhash, lastValidBlockHeight } =
          await program.provider.connection.getLatestBlockhash();
      
        await program.provider.connection.confirmTransaction({
          blockhash,
          lastValidBlockHeight,
          signature: txHash,
        });
      
        console.log(`Use 'solana confirm -v ${txHash}' to see the logs`);
      }
      
      let txHash;
      
      try {
        const mintData = await getMint(program.provider.connection, tokenMintPDA);
        console.log("Mint Already Exists");
      } catch {

        // Create the transaction
        
        // Create the transaction
        const transaction = new Transaction();

        // Add your mint creation instruction
        const createMintInstruction = await program.methods
          .createMint(metadata.uri, metadata.name, metadata.symbol)
          .accounts({
            tokenMint: tokenMintPDA,
            metadataAccount: tokenMintMetadataPDA,
            tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
            user: publicKey, // program.provider.publicKey
          })
          .instruction(); // Get the instruction instead of calling .rpc() directly

        // Add instruction to the transaction
        transaction.add(createMintInstruction);

        // Send and confirm the transaction
        txHash = await sendTransaction(transaction, connection);
        await logTransaction(txHash);
      }
      console.log("Token Mint: ", tokenMintPDA.toString());
    
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
 
  return (
    <button className="w-24" onClick={onClick} disabled={!publicKey}>
      {isLoading ? "Loading" : "Create Token"}
    </button>
  );
}