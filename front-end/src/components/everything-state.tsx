import { useEffect, useState } from "react";
import { useConnection } from "@solana/wallet-adapter-react";
import { program, everythingPDA, EverythingData } from "../anchor/setup";

export default function EverythingState() {
  const { connection } = useConnection();
  const [everythingData, setEverythingData] = useState<EverythingData | null>(null);
 
  useEffect(() => {
    // Fetch initial account data
    program.account.everything.fetch(everythingPDA).then(data => {
      setEverythingData(data);
    });
 
    // Subscribe to account change
    const subscriptionId = connection.onAccountChange(
      // The address of the account we want to watch
      everythingPDA,
      // callback for when the account changes
      accountInfo => {
        setEverythingData(
          program.coder.accounts.decode("everything", accountInfo.data),
        );
      },
    );
 
    return () => {
      // Unsubscribe from account change
      connection.removeAccountChangeListener(subscriptionId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [program]);
 
  // Render the value of the everything
  return <p className="text-lg">Count: {everythingData?.count?.toString()}</p>;
}