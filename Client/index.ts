import { isoly } from "isoly"
import { userwidgets } from "@userwidgets/model"
import { isly } from "isly"
import { Modified } from "../Modified"
import { Creatable as ClientCreatable } from "./Creatable"

export interface Client extends Client.Creatable {
	modified: { value: isoly.DateTime; by: userwidgets.Email }
}
export namespace Client {
	export type Creatable = ClientCreatable
	export const Creatable = ClientCreatable
	export const type: isly.object.ExtendableType<Client> = Creatable.type.extend<Client>({ modified: Modified.type })
}
