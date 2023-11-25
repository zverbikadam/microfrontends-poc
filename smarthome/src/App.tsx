import { Title } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-react/dist/Assets";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import HouseInfo from "./components/HouseInfo";

function App() {
  const [activeMain, setActiveMain] = useState(true);
  const renderActiveHouseText = activeMain ? "Main" : "Secondary";
  const renderInactiveHouseText = activeMain ? "Secondary" : "Main";

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          marginBottom: ".5rem",
        }}
      >
        <Title level="H4">{renderActiveHouseText} House</Title>
        <Link
          to={activeMain ? "/secondary" : "/"}
          onClick={() => setActiveMain(!activeMain)}
        >
          Switch to {renderInactiveHouseText.toLowerCase()} house
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<HouseInfo name="Main" />} />
        <Route path="/secondary" element={<HouseInfo name="Secondary" />} />
      </Routes>
    </>
  );
}

export default App;
