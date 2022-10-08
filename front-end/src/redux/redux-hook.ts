import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, ReduxDispatch } from "./store";
export const useReduxDispatch = () => useDispatch<ReduxDispatch>();
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;
