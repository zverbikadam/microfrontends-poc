import {
  Card,
  CardHeader,
  Icon,
  List,
  StandardListItem,
} from "@ui5/webcomponents-react";
import React from "react";

type Props = {
  data: {
    icon: string;
    tileTitle: string;
    temp: number;
    hum: number;
  };
};

const Tile = ({ data }: Props) => {
  return (
    <Card
      header={
        <CardHeader
          avatar={<Icon name={data.icon} />}
          titleText={data.tileTitle}
        />
      }
      style={{ marginRight: "1rem", width: "calc(20% - 1rem)" }}
    >
      <List>
        <StandardListItem description="Temperature">
          {data.temp}
        </StandardListItem>
        <StandardListItem description="Humidity">{data.hum}</StandardListItem>
      </List>
    </Card>
  );
};

export default Tile;
