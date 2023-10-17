import { isoly } from "isoly"
import { userwidgets } from "@userwidgets/model"
import { isly } from "isly"
import type { Activity } from "../Activity"
import type { Client } from "../Client"
import { Code } from "../Code"
import type { Project } from "../Project"

export interface Creatable {
	email: userwidgets.Email
	client: Client["code"]
	project: Project["code"]
	activity: Activity["code"]
	organization: userwidgets.Organization.Identifier
	date: isoly.Date
	value: isoly.TimeSpan
}
export namespace Creatable {
	export const type = isly.object<Creatable>({
		email: userwidgets.Email.type,
		client: Code.type,
		project: Code.type,
		activity: Code.type,
		organization: userwidgets.Organization.Identifier.type,
		date: isly.fromIs("Date", isoly.Date.is),
		value: isly.fromIs("TimeSpan", isoly.TimeSpan.is),
	})
	export const is = type.is
	export const flaw = type.flaw
}
