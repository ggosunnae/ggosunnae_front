import getLookbookDetail from "@/actions/detail/getLookbookDetail";
import Details from "@/components/Pages/details/Details";

const DetailsPage = async () => {
  const { data: detail } = await getLookbookDetail("포스트");

  return <Details type="lookbook" title={"LookBook"} detail={detail} />;
};

export default DetailsPage;
