import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme";
import {
  Bar,
  Button,
  Dialog,
  DynamicPage,
  FlexBox,
  ThemeProvider,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-react/dist/Assets";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import SmartHome from "./components/remotes/SmartHome";
import WelcomePage from "./components/remotes/WelcomePage";
import Sidebar from "./components/sidebar/Sidebar";
import Todo from "./components/remotes/Todo";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setTheme("sap_horizon");
  });

  return (
    <ThemeProvider>
      <Dialog
        className="footerPartNoPadding"
        open={isOpen}
        footer={
          <Bar
            design="Footer"
            endContent={<Button onClick={() => setIsOpen(false)}>Close</Button>}
          />
        }
      >
        <WelcomePage />
      </Dialog>
      <Header />
      <DynamicPage
        style={{ position: "absolute" }}
        alwaysShowContentHeader={false}
        showHideHeaderButton={false}
        headerContentPinnable={false}
      >
        <div>
          <FlexBox style={{ marginTop: "1rem", height: "35rem" }}>
            <Sidebar />
            <SmartHome />
          </FlexBox>
        </div>
        <div>
          <Todo />
        </div>
      </DynamicPage>
    </ThemeProvider>
  );
}

export default App;
