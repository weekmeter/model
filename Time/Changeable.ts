// this is used in the build step. isly must be imported
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { isly } from "isly"
import { Creatable } from "./Creatable"

export type Changeable = Pick<Creatable, keyof Creatable>
export namespace Changeable {
	export const type = Creatable.type.extend<Changeable>({})
	export const is = type.is
	export const flaw = type.flaw
	export function key(time: Changeable): string {
		return `${time.organization}|${time.email}|${time.date}|${time.client}|${time.project}|${time.activity}`
	}
}
