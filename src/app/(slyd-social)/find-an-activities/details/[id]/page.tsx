import SingleFindAnActivities from "@/components/FindAnActivities/SingleFindAnActivities/SingleFindAnActivities";

const FindAnActivitiesDetails = ({ params }: any) => {
  const id = params?.id;

  return (
    <div>
      <SingleFindAnActivities id={id} />
    </div>
  );
};

export default FindAnActivitiesDetails;
