import { isly } from "isly"
import type { Rule } from "../index"
import { type as RuleType } from "../type"

export interface Changeable {
	rules: Rule[]
}
export namespace Changeable {
	export const type = isly.object<Changeable>({
		rules: isly.array(RuleType),
	})
	export const is = type.is
	export const flaw = type.flaw
}
