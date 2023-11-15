import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme';
import {
  Bar,
  Button,
  Dialog,
  DynamicPage,
  FlexBox
} from "@ui5/webcomponents-react";
import '@ui5/webcomponents-react/dist/Assets';
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Combined from "./components/combined/Combined";
import Header from "./components/header/Header";
import SmartHome from "./components/remotes/SmartHome";
import Todo from "./components/remotes/Todo";
import WelcomePage from "./components/remotes/WelcomePage";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setTheme("sap_horizon");
  })

  return (
    <BrowserRouter>
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
            <Routes>
              <Route path="/" element={<SmartHome />} />
              <Route path="/todo" element={<Todo />} />
              <Route path="/combined" element={<Combined />} />
              {/* <Route path="/" element={<Navigate to={"/smarthome"} />} /> */}
            </Routes>
          </FlexBox>
        </div>
      </DynamicPage>
    </BrowserRouter>
  );
}

export default App;
