import Layout from "./components/organisms/Layout";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default App;
