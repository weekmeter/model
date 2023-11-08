import { isly } from "isly"
import { Adjust as ActionsAdjust } from "./Adjust"
import { Set as ActionSet } from "./Set"

export type Action = "set" | "adjust"
export namespace Action {
	export type Adjust = ActionsAdjust
	export const Adjust = ActionsAdjust
	export type Set = ActionSet
	export const Set = ActionSet
	export const type = isly.union<Action, Set, Adjust>(Set.type, Adjust.type)
	export const is = type.is
	export const flaw = type.flaw
	export function parse(action: string): Action | undefined {
		return Action.is(action) ? action : undefined
	}
}
