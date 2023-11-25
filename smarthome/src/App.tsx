import { Title } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-react/dist/Assets";
import { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import HouseInfo from "./components/HouseInfo";

interface Props {
  onNavigate: ((pathname: string) => void) | undefined;
}

function App({ onNavigate }: Props) {
  const [activeMain, setActiveMain] = useState(true);
  const renderActiveHouseText = activeMain ? "Main" : "Secondary";
  const renderInactiveHouseText = activeMain ? "Secondary" : "Main";

  const location = useLocation();

  if (onNavigate) {
    useEffect(() => {
      onNavigate(location.pathname)
    }, [location]);
  }

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
          to={activeMain ? "/smarthome/secondary" : "/smarthome/main"}
          onClick={() => setActiveMain(!activeMain)}
        >
          Switch to {renderInactiveHouseText.toLowerCase()} house
        </Link>
      </div>
      <Routes>
        <Route path="/smarthome/main" element={<HouseInfo name="Main" />} />
        <Route path="/smarthome/secondary" element={<HouseInfo name="Secondary" />} />
      </Routes>
    </>
  );
}

export default App;
