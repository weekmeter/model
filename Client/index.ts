import { isoly } from "isoly"
import { Creatable as ClientCreatable } from "./Creatable"

export interface Client extends Client.Creatable {
	modified: isoly.DateTime
	created: isoly.DateTime
}
export namespace Client {
	export type Creatable = ClientCreatable
	export const Creatable = ClientCreatable
}
