import { isoly } from "isoly"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { isly } from "isly"
import type { Activity } from "../../Activity"
import type { Client } from "../../Client"
import { Code } from "../../Code"
import type { Project } from "../../Project"
import { Scope } from "../../Scope"
import { Base } from "../Changeable/Base"
import { Type } from "../Type"

export interface Changeable extends Base {
	type: Type.Work
	client: Client["code"]
	project: Project["code"]
	activity: Activity["code"]
}
export namespace Changeable {
	export type Scoped<T extends Changeable = Changeable> = Record<
		Code /* client */,
		Record<Code /* project */, Record<Code /* activity */, Base.Scoped<T>>>
	>
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
	export function scope(target: Scoped, time: Changeable): Scoped {
		return Object.assign(
			target,
			Scope.insert<Changeable>(target, time, [time.client, time.project, time.activity, time.date])
		)
	}
	export function fromScope<T extends Changeable>(scoped: Scoped<T>): T[] {
		return Scope.flat.constant<T>(scoped, 4)
	}
	export function row<T extends Changeable>(times: Scoped<T>): Record<isoly.Date, T>[] {
		return Object.entries(times).flatMap(([, times]) =>
			Object.entries(times).flatMap(([, times]) => Object.entries(times).map(([, times]) => times))
		)
	}
}
