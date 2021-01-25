import { useContext } from "react";
import { StoreContext } from "./StoreProvider";
import { store } from "../index";

export const useDispatch = () => {
  // const store = useContext(StoreContext);

  return (store as any).dispatch;
};
