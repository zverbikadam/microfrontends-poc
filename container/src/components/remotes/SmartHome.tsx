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
    const { onParentNavigate } = mount(ref.current!, {
      onNavigate: ({ location: nextLocation }: Update) => {
        const { pathname } = nextLocation;
        if (location.pathname !== location.pathname + pathname)
          navigate(location.pathname + (pathname === "/" ? "" : pathname));
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};

export default SmartHome;
