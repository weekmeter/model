import { isly } from "isly"
import type { Rule } from "./index"

// This is required due to circular dependency
export const type = isly.object<Rule>({
	name: isly.string(/^.+$/),
	value: isly.string(/^[^ ]+ [^ ]+ .+$/),
})
