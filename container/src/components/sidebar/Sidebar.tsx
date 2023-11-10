import { SideNavigation, SideNavigationItem } from "@ui5/webcomponents-react";

type Props = {};

const Sidebar = (props: Props) => {
  const getFixedItems = (): JSX.Element => {
    return (
      <>
        <SideNavigationItem text="Application Settings" icon="settings" />
      </>
    );
  };
  return (
    <SideNavigation
      style={{ marginRight: "1rem", height: "30rem", width: "20rem" }}
      fixedItems={getFixedItems()}
    >
      <SideNavigationItem icon="home" text="Smart Home Dashboard" selected />
      <SideNavigationItem text="To Do Items" icon="activity-items" />
    </SideNavigation>
  );
};

export default Sidebar;
