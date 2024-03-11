import { userwidgets } from "@userwidgets/model"
import { isly } from "isly"

export type Permissions = userwidgets.User.Permissions<Permissions.Weekmeter>
export namespace Permissions {
	export type Weekmeter = {
		client?: { view?: true; create?: true }
		project?: { view?: true; create?: true; admin?: true }
		activity?: { view?: true; create?: true }
		time?: { view?: true; admin?: true }
		report?: { view?: true; create?: true; admin?: true }
	}
	export namespace Weekmeter {
		export const type = isly.object<Weekmeter>({
			client: isly
				.object<NonNullable<Weekmeter["client"]>>({
					view: isly.boolean(true).optional(),
					create: isly.boolean(true).optional(),
				})
				.optional(),
			project: isly
				.object<NonNullable<Weekmeter["project"]>>({
					view: isly.boolean(true).optional(),
					create: isly.boolean(true).optional(),
					admin: isly.boolean(true).optional(),
				})
				.optional(),
			activity: isly
				.object<NonNullable<Weekmeter["activity"]>>({
					view: isly.boolean(true).optional(),
					create: isly.boolean(true).optional(),
				})
				.optional(),
			time: isly
				.object<NonNullable<Weekmeter["time"]>>({
					view: isly.boolean(true).optional(),
					admin: isly.boolean(true).optional(),
				})
				.optional(),
			report: isly
				.object<NonNullable<Weekmeter["report"]>>({
					view: isly.boolean(true).optional(),
					create: isly.boolean(true).optional(),
					admin: isly.boolean(true).optional(),
				})
				.optional(),
		})
		export const is = type.is
		export const flaw = type.flaw
		export const flags = [
			"client.view",
			"client.create",
			"project.view",
			"project.create",
			"activity.view",
			"activity.create",
			"time.view",
			"time.admin",
			"balance.view",
			"rules.view",
			"rules.admin",
			"report.view",
			"report.create",
			"report.admin",
		] as const
	}
	export const type = userwidgets.User.Permissions.type.create(Weekmeter.type)
	export const is = type.is
	export const flaw = type.flaw
	export const flags = Array.from(new Set([...userwidgets.User.Permissions.flags, ...Weekmeter.flags]))
}
