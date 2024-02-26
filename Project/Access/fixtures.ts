import { engine } from "./Engine/fixtures"
import type { Access } from "./index"
import { rule } from "./Rule/fixtures"

export const access = Object.assign(createAccess, { rule, engine })
function createAccess(): Access {
	return { rules: rule.array() }
}
