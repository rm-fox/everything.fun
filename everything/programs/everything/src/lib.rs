use anchor_lang::prelude::*;

declare_id!("6uDM19WhUJSSG57h2hnD4HKSc6e9SbqgggHaE6ij4etK");

#[program]
pub mod everything {
    use super::*;
 
    // Instruction to initialize a new everything account
    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        // Reference to the everything account from the Initialize struct
        let everything = &mut ctx.accounts.everything;
        everything.bump = ctx.bumps.everything;
        
        msg!("everything account created! Current count: {}", everything.count);
        msg!("Counter bump: {}", everything.bump);
        Ok(())
    }
 
    // Instruction to increment a everything account
    pub fn increment(ctx: Context<Increment>) -> Result<()> {
        // Mutable reference to the everything account from the Increment struct
        let everything = &mut ctx.accounts.everything;
        msg!("Previous everything: {}", everything.count);
 
        // Increment the count value stored on the everything account by 1
        everything.count = everything.count.checked_add(1).unwrap();
        msg!("everything incremented! Current count: {}", everything.count);
        Ok(())
    }
}
 
// Accounts required by the initialize instruction
#[derive(Accounts)]
pub struct Initialize<'info> {
    // The account paying to create the everything account
    #[account(mut)]
    pub user: Signer<'info>, // specify account must be signer on the transaction
 
    // The everything account being created and initialized in the instruction
    #[account(
        init,         // specifies we are creating this account
        seeds = [b"everything"], // optional seeds for pda
        bump,                 // bump seed for pda
        payer = user, // specifies account paying for the creation of the account
        space = 8 + Everything::INIT_SPACE // space allocated to the new account (8 byte discriminator + 8 byte for u64)
    )]
    pub everything: Account<'info, Everything>, // specify account is 'everything' type
    pub system_program: Program<'info, System>, // specify account must be System Program
}
 
// Account required by the increment instruction
#[derive(Accounts)]
pub struct Increment<'info> {
    #[account(
        mut,
        seeds = [b"everything"], // optional seeds for pda
        bump = everything.bump,  // bump seed for pda stored in `Counter` account
    )] // specify account is mutable because we are updating its data
    pub everything: Account<'info, Everything>, // specify account is 'everything' type
}
 
// Define structure of `everything` account
#[account]
#[derive(InitSpace)]
pub struct Everything {
    pub count: u64, // define count value type as u64
    pub bump: u8,
}