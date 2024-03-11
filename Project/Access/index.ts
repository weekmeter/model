import { isly } from "isly"
import { Engine as AccessEngine } from "./Engine"
import { Rule as AccessRule } from "./Rule"

export interface Access {
	rules: Access.Rule[]
}
export namespace Access {
	export type Rule = AccessRule
	export const Rule = AccessRule
	export namespace Rule {
		export type Type = AccessRule.Type
		export namespace Type {
			export type Work = AccessRule.Type.Work
			export type View = AccessRule.Type.View
		}
	}
	export type Engine = AccessEngine
	export const Engine = AccessEngine
	export namespace Engine {
		export type State = AccessEngine.State
		export type Rule = AccessEngine.Rule
	}
	export const type = isly.object<Access>({
		rules: isly.array(Rule.type),
	})
}
