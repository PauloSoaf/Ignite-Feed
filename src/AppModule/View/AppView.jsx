import { Layout, Typography } from "antd";
import { AppLayout } from "../../components/styles";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { PageContent } from "../components/PageContent/PageContent";

function App() {
  return (
    <AppLayout>
      <PageHeader/>
      <PageContent/>
    </AppLayout>
  );
}

export default App;
