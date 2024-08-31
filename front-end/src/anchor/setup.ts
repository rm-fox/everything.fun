import { IdlAccounts, Program } from "@coral-xyz/anchor";
import { IDL, Everything } from "./idl";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
// import { Buffer } from 'buffer';
import * as buffer from "buffer";
window.Buffer = buffer.Buffer;
 
const programId = new PublicKey("6uDM19WhUJSSG57h2hnD4HKSc6e9SbqgggHaE6ij4etK");
const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
 
// Initialize the program interface with the IDL, program ID, and connection.
// This setup allows us to interact with the on-chain program using the defined interface.
export const program = new Program<Everything>(IDL, programId, {
  connection,
});
 
export const [everythingPDA] = PublicKey.findProgramAddressSync(
  [Buffer.from("everything")],
  program.programId,
);
 
// This is just a TypeScript type for the everything data structure based on the IDL
// We need this so TypeScript doesn't yell at us
export type EverythingData = IdlAccounts<Everything>["everything"];