import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { mount } from "smarthome/SmartHomeApp";
import history from "../router/history";
import { Update } from "history";

type Props = {};

const SmartHome = (props: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("mounting smarthome, current pathname is:");
    console.log(location.pathname);
    mount(ref.current!, {
      onNavigate: ({ location: nextLocation }: Update) => {
        console.log("Container noticed navigation for location:");
        navigate(location.pathname + nextLocation.pathname);
      },
    });

    // history.listen(() => {
    //   console.log("I am fucking heeeeeere");
    // });
  }, []);

  return <div ref={ref} />;
};

export default SmartHome;
