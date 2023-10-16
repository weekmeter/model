import { isoly } from "isoly"
import { userwidgets } from "@userwidgets/model"
import { isly } from "isly"
import { Activity } from "../Activity"
import { Client } from "../Client"
import { Project } from "../Project"

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
		client: isly.string(),
		project: isly.string(),
		activity: isly.string(),
		organization: userwidgets.Organization.Identifier.type,
		date: isly.fromIs("Date", isoly.Date.is),
		value: isly.fromIs("TimeSpan", isoly.TimeSpan.is),
	})
	export const is = type.is
	export const flaw = type.flaw
}
