import { isly } from "isly"
import { Type as RuleType } from "./Type"

export type Rule = string
export namespace Rule {
	export type Type = RuleType
	export const Type = RuleType
	export namespace Type {
		export type Work = RuleType.Work
		export type View = RuleType.View
		export type Admin = RuleType.Admin
	}
	export const pattern = new RegExp(`^(${Type.values.join("|")}) if \\((.+)\\)$`)
	export const type = isly.string<Rule>(pattern)
	export const is = type.is
	export const flaw = type.flaw
}
