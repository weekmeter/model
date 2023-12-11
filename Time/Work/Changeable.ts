// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { isly } from "isly"
import type { Activity } from "../../Activity"
import type { Client } from "../../Client"
import { Code } from "../../Code"
import type { Project } from "../../Project"
import { Base } from "../Changeable/Base"
import { Type } from "../Type"

export interface Changeable extends Base {
	type: Type.Work
	client: Client["code"]
	project: Project["code"]
	activity: Activity["code"]
}
export namespace Changeable {
	export const type = Base.type.extend<Changeable>({
		type: Type.Work.type,
		client: Code.type,
		project: Code.type,
		activity: Code.type,
	})
	export const is = type.is
	export const flaw = type.flaw
	export function key(time: Partial<Omit<Changeable, "value">>, options?: Parameters<typeof Base.key>[1]): string {
		return [
			Base.key(time, { date: false }),
			time.client,
			time.project,
			time.activity,
			...(options?.date != false ? [time.date] : []),
		]
			.filter(Boolean)
			.join("|")
	}
}
