import SearchFilter from "../filter/SearchFilter";
import TransactionTable from "./TransactionTable";

const TransactionCom = () => {
  return (
    <div>
      <SearchFilter title="Transactions" />
      <TransactionTable />
    </div>
  );
};

export default TransactionCom;
