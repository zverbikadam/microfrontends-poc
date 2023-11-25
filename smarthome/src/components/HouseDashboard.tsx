import Tile from "./Tile";

type Props = {};

const HouseDashboard = (props: Props) => {
  return (
    <div style={{ width: "100%" }}>
      <Tile data={{ tileTitle: "Bedroom", icon: "bed", temp: 20, hum: 60 }} />
      <Tile data={{ tileTitle: "Kids' room", icon: "family-care", temp: 22, hum: 60 }} />
      <Tile data={{ tileTitle: "Living room", icon: "sys-monitor", temp: 22, hum: 60 }} />
      <Tile data={{ tileTitle: "Kitchen", icon: "nutrition-activity", temp: 24, hum: 70 }} />
      <Tile data={{ tileTitle: "Workshop", icon: "add-equipment", temp: 20, hum: 30 }} />
    </div>
  );
};

export default HouseDashboard;