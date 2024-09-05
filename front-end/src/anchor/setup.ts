import { IdlAccounts, Program } from "@coral-xyz/anchor";
import { IDL, EverythingFun } from "./idl";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import * as buffer from "buffer";
window.Buffer = buffer.Buffer;

const programId = new PublicKey("8wcCWJqzqvNt1FpZpNp5bjw8q7QX2zVRaViFwe6UFfUZ");
const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

// Initialize the program interface with the IDL, program ID, and connection.
// This setup allows us to interact with the on-chain program using the defined interface.
export const program = new Program<EverythingFun>(IDL, programId, {
  connection,
});
 
export const [tokenMintPDA] = PublicKey.findProgramAddressSync(
    [Buffer.from("everything")],
    program.programId
  );
// export const [tokenAccountOwnerPda] = PublicKey.findProgramAddressSync(
//   [Buffer.from("token_account_owner_pda")],
//   program.programId,
// );
 
// This is just a TypeScript type for the everything data structure based on the IDL
// We need this so TypeScript doesn't yell at us
// export type EverythingData = IdlAccounts<Everything>["everything"];