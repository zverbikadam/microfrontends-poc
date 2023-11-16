import { Link, Title } from '@ui5/webcomponents-react';
import '@ui5/webcomponents-react/dist/Assets';
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import HouseInfo from './components/HouseInfo';

function App() {
  const [activeMain, setActiveMain] = useState(true);
  const navigate = useNavigate();
  const renderActiveHouseText = activeMain ? "Main" : "Secondary";
  const renderInactiveHouseText = activeMain ? "Secondary" : "Main";

  const handleLinkClick = () => {
    navigate(activeMain ? "/secondary" : "/");
    setActiveMain(!activeMain);
  }

  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: '1fr auto', marginBottom: ".5rem" }}>
        <Title level='H4'>{renderActiveHouseText} House</Title>
        <Link onClick={handleLinkClick}>Switch to {renderInactiveHouseText.toLowerCase()} house</Link>
      </div>
      <Routes>
        <Route path="/" element={<HouseInfo name="Main" />} />
        {/* <Route path="/" element={<HouseInfo name="Main" />} /> */}
        <Route path="/secondary" element={<HouseInfo name="Secondary" />} />
      </Routes>
    </>
  );
}

export default App;