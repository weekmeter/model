import { userwidgets } from "@userwidgets/model"
import { isly } from "isly"
import { Rule } from "../Rule/index"
import { Changeable as RulesChangeable } from "./Changeable"

export interface Rules extends Rules.Changeable {
	common: Rule.Group
	users: Record<userwidgets.Email, Rule.Group>
}
export namespace Rules {
	export type Changeable = RulesChangeable
	export const Changeable = RulesChangeable
	export const type = isly.object<Rules>({
		organization: userwidgets.Organization.Identifier.type,
		common: Rule.Group.type,
		users: isly.record<userwidgets.Email, Rule.Group>(userwidgets.Email.type, Rule.Group.type),
	})
	export const is = type.is
	export const flaw = type.flaw
}
