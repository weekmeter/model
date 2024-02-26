import { modified } from "../Modified/fixtures"
import { group } from "./Group/fixtures"
import type { Rules } from "./index"

export const rules = Object.assign(createRules, { changeable: createRulesChangeable })
function createRules(time = "8h"): Rules {
	return {
		common: group(time),
		users: {
			"jessie@rocket.com": {
				rules: [{ name: "80%", value: "adjust 80% user:jessie@rocket*" }],
				modified: modified(),
			},
		},
	}
}
function createRulesChangeable(time = "8h"): Required<Rules.Changeable> {
	return {
		common: group.changeable(time),
		users: {
			"jessie@rocket.com": {
				rules: [{ name: "80%", value: "adjust 80% user:jessie@rocket*" }],
			},
		},
	}
}
