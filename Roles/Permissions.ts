import { userwidgets } from "@userwidgets/model"
import { isly } from "isly"

export type Permissions = userwidgets.User.Permissions<Permissions.Weekmeter>
export namespace Permissions {
	export type Weekmeter = {
		client?: { view?: true; create?: true }
		project?: { view?: true; create?: true }
		activity?: { view?: true; create?: true }
		time?: { view?: true; admin?: true }
		report?: { view?: true; create?: true; override?: true }
	}
	export namespace Weekmeter {
		export const type = isly.object<Weekmeter>({
			client: isly.object({ view: isly.boolean().optional(), create: isly.boolean().optional() }).optional(),
			project: isly.object({ view: isly.boolean().optional(), create: isly.boolean().optional() }).optional(),
			activity: isly.object({ view: isly.boolean().optional(), create: isly.boolean().optional() }).optional(),
			time: isly.object({ view: isly.boolean().optional(), admin: isly.boolean().optional() }).optional(),
			report: isly
				.object({
					view: isly.boolean().optional(),
					create: isly.boolean().optional(),
					admin: isly.boolean().optional(),
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
