import SearchFilter from "../filter/SearchFilter";
import ActivityTable from "./Table";

const ActivityCom = () => {
  return (
    <div>
      <SearchFilter title="Activity" />
      <ActivityTable />
    </div>
  );
};

export default ActivityCom;
