import { userwidgets } from "@userwidgets/model"

export type Creatable = userwidgets.User.Key.Creatable<userwidgets.User.Key.Creatable.Claims>
export namespace Creatable {
	export const type = userwidgets.User.Key.Creatable.type.create<userwidgets.User.Key.Creatable.Claims>()
	export const is = type.is
	export const flaw = type.flaw
}
