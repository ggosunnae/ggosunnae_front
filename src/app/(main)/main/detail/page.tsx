import getGgosunnaeDetail from "@/actions/detail/getGgosunnaeDetail";
import Details from "@/components/Pages/details/Details";

const DetailsPage = async () => {
  const { data: detail } = await getGgosunnaeDetail();

  return <Details title={"꼬순내"} detail={detail} />;
};

export default DetailsPage;
