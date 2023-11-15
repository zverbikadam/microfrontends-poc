import { SideNavigation, SideNavigationItem, SideNavigationItemDomRef, Ui5CustomEvent } from "@ui5/webcomponents-react";
import { useNavigate } from "react-router-dom";

type Props = {};

const Sidebar = (props: Props) => {

  const navigate = useNavigate();

  const getFixedItems = (): JSX.Element => {
    return (
      <>
        <SideNavigationItem text="Application Settings" icon="settings" />
      </>
    );
  };

  const handleClick = (event: Ui5CustomEvent<SideNavigationItemDomRef>, path: string) => {
    navigate(path);
  }

  return (
    <SideNavigation
      style={{ marginRight: "1rem", height: "30rem", width: "20rem" }}
      fixedItems={getFixedItems()}
    >
      <SideNavigationItem icon="home" text="Smart Home Dashboard" selected onClick={(e) => handleClick(e, "/")} />
      <SideNavigationItem text="To Do Items" icon="multiselect-all" onClick={(e) => handleClick(e, "/todo")} />
      <SideNavigationItem text="All Together" icon="activity-items" onClick={(e) => handleClick(e, "/combined")} />
    </SideNavigation>
  );
};

export default Sidebar;
