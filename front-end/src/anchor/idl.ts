export type EverythingFun = {
  "version": "0.1.0",
  "name": "everything_fun",
  "instructions": [
    {
      "name": "createMint",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadataAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "uri",
          "type": "string"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        }
      ]
    }
  ]
};

export const IDL: EverythingFun = {
  "version": "0.1.0",
  "name": "everything_fun",
  "instructions": [
    {
      "name": "createMint",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadataAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "uri",
          "type": "string"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        }
      ]
    }
  ]
};


// export type Everything = {
//   "version": "0.1.0",
//   "name": "everything",
//   "instructions": [
//     {
//       "name": "initialize",
//       "accounts": [
//         {
//           "name": "tokenAccountOwnerPda",
//           "isMut": true,
//           "isSigner": false
//         },
//         {
//           "name": "vaultTokenAccount",
//           "isMut": true,
//           "isSigner": false
//         },
//         {
//           "name": "mintOfTokenBeingSent",
//           "isMut": true,
//           "isSigner": false
//         },
//         {
//           "name": "mintAuthority",
//           "isMut": true,
//           "isSigner": true
//         },
//         {
//           "name": "signer",
//           "isMut": true,
//           "isSigner": true
//         },
//         {
//           "name": "systemProgram",
//           "isMut": false,
//           "isSigner": false
//         },
//         {
//           "name": "tokenProgram",
//           "isMut": false,
//           "isSigner": false
//         },
//         {
//           "name": "rent",
//           "isMut": false,
//           "isSigner": false
//         }
//       ],
//       "args": []
//     }
//   ]
// };

// export const IDL: Everything = {
//   "version": "0.1.0",
//   "name": "everything",
//   "instructions": [
//     {
//       "name": "initialize",
//       "accounts": [
//         {
//           "name": "tokenAccountOwnerPda",
//           "isMut": true,
//           "isSigner": false
//         },
//         {
//           "name": "vaultTokenAccount",
//           "isMut": true,
//           "isSigner": false
//         },
//         {
//           "name": "mintOfTokenBeingSent",
//           "isMut": true,
//           "isSigner": false
//         },
//         {
//           "name": "mintAuthority",
//           "isMut": true,
//           "isSigner": true
//         },
//         {
//           "name": "signer",
//           "isMut": true,
//           "isSigner": true
//         },
//         {
//           "name": "systemProgram",
//           "isMut": false,
//           "isSigner": false
//         },
//         {
//           "name": "tokenProgram",
//           "isMut": false,
//           "isSigner": false
//         },
//         {
//           "name": "rent",
//           "isMut": false,
//           "isSigner": false
//         }
//       ],
//       "args": []
//     }
//   ]
// };
