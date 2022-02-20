import Navbar from "../Navbar";
import Footer from "../Footer";
import { MainWrapper } from "./Layout.styles";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Navbar />
      <MainWrapper>{props.children}</MainWrapper>
      <Footer />
    </>
  );
};

export default Layout;
