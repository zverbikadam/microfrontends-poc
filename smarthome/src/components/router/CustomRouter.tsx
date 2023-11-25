import { MemoryHistory } from "history";
import { useLayoutEffect, useState } from "react";
import { MemoryRouterProps, Router } from "react-router-dom";

interface Props extends MemoryRouterProps {
  history: MemoryHistory;
  
};

const CustomRouter = ({ history, ...props }: Props) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      {...props}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};

export default CustomRouter;
