import { counterActions } from "./action";

type CounterActionsType = typeof counterActions[keyof typeof counterActions];
type Action = { type: CounterActionsType; payload: any };

export { counterActions };
export type { CounterActionsType, Action };
