// ** Import Other
import { Helmet } from "react-helmet";

type Props = {
  title: string;
};

const TitlePage = ({ title }: Props) => {
  return (
    <Helmet>
      <title>Gengs | {title}</title>
    </Helmet>
  );
};

export default TitlePage;
