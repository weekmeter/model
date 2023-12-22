import { userwidgets } from "@userwidgets/model"
import { Permissions as RolesPermissions } from "./Permissions"

export type Roles = keyof typeof Roles.record
export namespace Roles {
	export type Permissions = RolesPermissions
	export const Permissions = RolesPermissions
	export namespace Permissions {
		export type Weekmeter = RolesPermissions.Weekmeter
	}
	export const record = {
		admin: [...Permissions.flags],
		manager: [...userwidgets.User.Permissions.Organization.flags, ...Permissions.Weekmeter.flags],
		projectManager: [
			"user.view",
			"user.invite",
			"client.view",
			"client.create",
			"project.view",
			"project.create",
			"activity.view",
			"activity.create",
			"time.view",
			"rules.view",
			"report.view",
		],
		accountant: [
			"user.view",
			"user.invite",
			"client.view",
			"project.view",
			"activity.view",
			"time.view",
			"balance.view",
			"rules.view",
			"rules.admin",
			"report.view",
			"report.create",
		],
		user: ["user.view", "client.view", "project.view", "activity.view"],
	} as const
	export const roles = Object.keys(record)
	export const satisfies = Object.assign(satisfiesRole, { some: satisfiesSome, every: satisfiesEvery })
	export function satisfiesRole(role: Roles, permissions: Permissions, id?: string): boolean {
		return id != undefined
			? userwidgets.User.Permissions.check(permissions, id, ...record[role])
			: role == "admin"
			? userwidgets.User.Permissions.check(permissions, "*", ...record[role])
			: false
	}
	export function satisfiesSome(roles: Roles[], permissions: Permissions, id?: string): boolean {
		return roles.some(role => satisfies(role, permissions, id))
	}
	export function satisfiesEvery(roles: Roles[], permissions: Permissions, id: string): boolean {
		return roles.every(role => satisfies(role, permissions, id))
	}
}
