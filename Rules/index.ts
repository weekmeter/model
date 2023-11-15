import { userwidgets } from "@userwidgets/model"
import { isly } from "isly"
import { Rule } from "../Rule"
import { Changeable as RulesChangeable } from "./Changeable"
import { Group as RulesGroup } from "./Group"
export interface Rules {
	common: Rules.Group
	users: Record<userwidgets.Email, Rules.Group>
}
export namespace Rules {
	export type Group = RulesGroup
	export const Group = RulesGroup
	export namespace Group {
		export type Changeable = RulesGroup.Changeable
	}
	export type Changeable = RulesChangeable
	export const Changeable = RulesChangeable
	export const type = isly.object<Rules>({
		common: Group.type,
		users: isly.record<userwidgets.Email, Group>(userwidgets.Email.type, Group.type),
	})
	export const is = type.is
	export const flaw = type.flaw
	export function array(rules: Rules, ...users: userwidgets.Email[]): Rule[] {
		return rules.common.rules.concat(users.flatMap(user => rules.users[user]?.rules ?? []))
	}
}
