import { isoly } from "isoly"
import { userwidgets } from "@userwidgets/model"
import { Creatable as ClientCreatable } from "./Creatable"

export interface Client extends Client.Creatable {
	modified: { value: isoly.DateTime; by: userwidgets.Email }
}
export namespace Client {
	export type Creatable = ClientCreatable
	export const Creatable = ClientCreatable
}
