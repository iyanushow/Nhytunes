import { useParams } from "react-router-dom";
import EnquiryBlock from "../components/atoms/EnquireBlock";
import ServicesGrid from "../components/organisms/ServicesGrid";

type Param = {
  serviceId: string;
};
const Services = () => {
  const { serviceId = "1" } = useParams<Param>();
  return (
    <>
      <ServicesGrid initialService={+serviceId} />
      <EnquiryBlock />
    </>
  );
};

export default Services;
