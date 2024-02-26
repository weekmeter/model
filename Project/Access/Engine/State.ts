import { isly } from "isly"
import { Activity } from "../../../Activity"
import { Client } from "../../../Client"
import { Code } from "../../../Code"

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
			client: isly.object<State["project"]["client"]>({
				code: Code.type,
				name: isly.string(),
			}),
			activities: isly.array(
				isly.object<State["project"]["activities"][number]>({
					code: Code.type,
					name: isly.string(),
				})
			),
		}),
		user: isly.object<State["user"]>({
			email: isly.string(),
		}),
	})
	export const is = type.is
	export const flaw = type.flaw
}
