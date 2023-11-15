import { isly } from "isly"
import { Rule } from "../../Rule/index"
// import { type as RuleType } from "../../Rule/type"

export interface Changeable {
	rules: Rule[]
}
export namespace Changeable {
	export const type = isly.object<Changeable>({
		rules: isly.array(Rule.type),
	})
	export const is = type.is
	export const flaw = type.flaw
}
