import { Roles } from "./index"

export function roles(role: Roles): string {
	return Roles.record[role].map((permission: string) => "+------o1." + permission).join(" ")
}
