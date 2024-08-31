// import * as anchor from "@coral-xyz/anchor";
// import { Program } from "@coral-xyz/anchor";
// import { Everything } from "../target/types/everything";

// describe("everything", () => {
//   // Configure the client to use the local cluster.
//   anchor.setProvider(anchor.AnchorProvider.env());

//   const program = anchor.workspace.Everything as Program<Everything>;

//   it("Is initialized!", async () => {
//     // Add your test here.
//     const tx = await program.methods.initialize().rpc();
//     console.log("Your transaction signature", tx);
//   });
// });


import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Everything } from "../target/types/everything";
import { PublicKey } from "@solana/web3.js";
 
describe("everything", () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
 
  const program = anchor.workspace.Everything as Program<Everything>;
 
  // Generate a new keypair to use as the address the Everything account
  // const everythingAccount = new Keypair();
  const [everythingPDA] = PublicKey.findProgramAddressSync(
    [Buffer.from("everything")],
    program.programId,
  );
 
  it("Is initialized!", async () => {
    try{
      // Invoke the initialize instruction
      const transactionSignature = await program.methods
        .initialize()
        .accounts({
          everything: everythingPDA,
        })
        .rpc();
        // .signers([everythingPDA]) // include everything keypair as additional signer
        // .rpc({ skipPreflight: true });
  
      // Fetch the everything account data
      const accountData = await program.account.everything.fetch(
        everythingPDA
      );
  
      console.log(`Transaction Signature: ${transactionSignature}`);
      console.log(`Count: ${accountData.count}`);
    } catch (error) {
      console.log(error);
    }
  });
 
  it("Increment", async () => {
    // Invoke the increment instruction
    const transactionSignature = await program.methods
      .increment()
      .accounts({
        everything: everythingPDA,
      })
      .rpc();
 
    // Fetch the everything account data
    const accountData = await program.account.everything.fetch(
      everythingPDA
    );
 
    console.log(`Transaction Signature: ${transactionSignature}`);
    console.log(`Count: ${accountData.count}`);
  });
});