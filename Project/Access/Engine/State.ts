import { userwidgets } from "@userwidgets/model"
import { isly } from "isly"
import { Activity } from "../../../Activity"
import { Client } from "../../../Client"
import { Code } from "../../../Code"
import { Profile } from "../../../User/Profile"

export interface State {
	project: {
		code: Code
		name: string
		client: Pick<Client, "code" | "name">
		activities: Pick<Activity, "code" | "name">[]
	}
	user: { email: string; [property: string]: string | undefined }
}
export namespace State {
	export const type = isly.object<State>({
		project: isly.object<State["project"]>({
			code: Code.type,
			name: isly.string(),
			client: Client.type.pick(["code", "name"]),
			activities: isly.array(Activity.type.pick(["code", "name"])),
		}),
		user: isly.object<State["user"]>({
			email: isly.string(),
		}),
	})
	export const is = type.is
	export const flaw = type.flaw
	export function create(project: State["project"], user: { email: userwidgets.Email; profile?: Profile }): State {
		return {
			project,
			user: { ...(user.profile && { ...Profile.Property.record(user.profile.properties) }), email: user.email },
		}
	}
}
