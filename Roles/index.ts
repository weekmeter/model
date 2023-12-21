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
			"report.view",
		],
		accountant: [
			"user.view",
			"user.invite",
			"client.view",
			"project.view",
			"activity.view",
			"time.view",
			"report.view",
			"report.create",
		],
		user: ["user.view", "client.view", "project.view", "activity.view"],
	} as const
	export const roles = Object.keys(record)
	export function satisfies(role: "admin", permissions: Permissions): boolean
	export function satisfies(role: Roles, permissions: Permissions, id: string): boolean
	export function satisfies(role: Roles, permissions: Permissions, id?: string): boolean {
		return id != undefined
			? userwidgets.User.Permissions.check(permissions, id, ...record[role])
			: role == "admin"
			? userwidgets.User.Permissions.check(permissions, "*", ...record[role])
			: false
	}
}
