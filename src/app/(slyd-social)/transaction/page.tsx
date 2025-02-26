import TransactionCom from "@/components/transaction/TransactionCom";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TRANSACTION LYD SOCIAL",
  description: "Lyd social transaction page",
};

const Transaction = () => {
  return (
    <div>
      <TransactionCom />
    </div>
  );
};

export default Transaction;
