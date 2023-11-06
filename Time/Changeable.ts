import { Creatable } from "./Creatable"

export type Changeable = Pick<Creatable, keyof Creatable>
export namespace Changeable {
	export const type = Creatable.type.extend<Changeable>({})
	export const is = type.is
	export const flaw = type.flaw
}
