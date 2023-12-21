import { Roles } from "./index"

export function create(role: Roles): string {
	return Roles.record[role].map(permission => "+------o1." + permission).join(" ")
}
