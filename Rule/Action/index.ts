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
	export function parse<T extends Record<string, unknown>>(
		rule: string,
		next?: (remainder: string) => T
	): { action: Action | undefined } & T {
		const [action, ...remainder] = rule.split(" ")
		return Object.assign(
			{
				action: Set.parse(action) ?? Adjust.parse(action),
			},
			next?.(remainder.join(" "))
		)
	}
}
