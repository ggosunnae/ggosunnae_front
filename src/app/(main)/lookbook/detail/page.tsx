import getGgosunnaeDetail from "@/actions/getGgosunnaeDetail";
import Details from "@/components/Pages/details/Details";

const DetailsPage = async () => {
  const { data: detail } = await getGgosunnaeDetail();

  return <Details title={"LookBook"} detail={detail} />;
};

export default DetailsPage;
