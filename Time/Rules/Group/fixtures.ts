import { modified } from "../../../Modified/fixtures"
import { rule } from "../../Rule/fixtures"
import { Group } from "./index"

export const group = Object.assign(createGroup, { changeable: createGroupChangeable })
export function createGroup(time = "8h"): Group {
	return {
		...group.changeable(time),
		modified: modified(),
	}
}
export function createGroupChangeable(time = "8h"): Group.Changeable {
	return {
		rules: rule.array(time),
	}
}
