import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { mount } from "smarthome/SmartHomeApp";
import history from "../router/history";

type Props = {};

const SmartHome = (props: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  let onParentNavigate: ReturnType<typeof mount>["onParentNavigate"];

  useEffect(() => {
    console.log("mounting smarthome, current pathname is:");
    console.log(location.pathname);
    const { onParentNavigate: navigateCallback } = mount(ref.current!, {
      onNavigate: (pathname: string) => {
        console.log("Container noticed navigation for location:");
        console.log(location);
      },
    });
    
    history.listen(()=>{
      console.log("I am fucking heeeeeere")
    })
    // navigateCallback("somepath");
    
  }, []);

  return <div ref={ref} />;
};

export default SmartHome;
