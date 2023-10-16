import { isly } from "isly"
import { Modified } from "../Modified"
import { Creatable as ClientCreatable } from "./Creatable"

export interface Client extends Client.Creatable {
	modified: Modified
}
export namespace Client {
	export type Creatable = ClientCreatable
	export const Creatable = ClientCreatable
	export const type: isly.object.ExtendableType<Client> = Creatable.type.extend<Client>({ modified: Modified.type })
	export const is = type.is
	export const flaw = type.flaw
}
