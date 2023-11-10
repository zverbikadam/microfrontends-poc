import {
  DynamicPage,
  Link,
  List,
  Page,
  StandardListItem,
  Text,
  Title
} from "@ui5/webcomponents-react";

type Props = {};

const WelcomeCard = (props: Props) => {
  return (
    <>
      <Title level="H3" style={{ margin: "1rem" }}>
        Welcome to Microfrontends
      </Title>
      <div style={{ margin: "1rem" }}>
        <p>A demo project to showcase Microfrontends in action.</p>
        <p>
          This Welcome Page is a micro frontend written in React served by
          Webpack and Module federation plugin.
        </p>
        <List header={<Title level="H5">Some useful links:</Title>}>
          <StandardListItem>
            <Link target="_blank" href="https://react.dev/">React</Link>
          </StandardListItem>
          <StandardListItem>
            <Link target="_blank" href="https://webpack.js.org">Webpack</Link>
          </StandardListItem>
          <StandardListItem>
            <Link target="_blank" href="https://webpack.js.org/plugins/module-federation-plugin/">
              Module Federation
            </Link>
          </StandardListItem>
        </List>
      </div>
    </>
  );
};

export default WelcomeCard;
