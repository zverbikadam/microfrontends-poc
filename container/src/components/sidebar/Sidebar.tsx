import {
  SideNavigation,
  SideNavigationItem,
  SideNavigationItemDomRef,
  Ui5CustomEvent,
} from "@ui5/webcomponents-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const Sidebar = (props: Props) => {
  const navigate = useNavigate();
  const [currentPath, setCurrentPath] = useState("");

  const getFixedItems = (): JSX.Element => {
    return (
      <>
        <SideNavigationItem text="Application Settings" icon="settings" />
      </>
    );
  };

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const handleClick = (
    event: Ui5CustomEvent<SideNavigationItemDomRef>,
    path: string
  ) => {
    navigate(path);
    setCurrentPath(path);
  };

  return (
    <SideNavigation
      style={{ marginRight: "1rem", height: "30rem", width: "20rem" }}
      fixedItems={getFixedItems()}
    >
      <SideNavigationItem
        text="To Do Items"
        icon="multiselect-all"
        selected={currentPath === "/todo"}
        onClick={(e) => handleClick(e, "/todo")}
      />
      <SideNavigationItem
        icon="home"
        text="Smart Home Dashboard"
        selected={currentPath === "/smarthome"}
        onClick={(e) => handleClick(e, "/smarthome/main")}
      />
      <SideNavigationItem
        text="All Together"
        icon="activity-items"
        selected={currentPath === "/combined"}
        onClick={(e) => handleClick(e, "/combined")}
      />
    </SideNavigation>
  );
};

export default Sidebar;
