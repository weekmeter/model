import { userwidgets } from "@userwidgets/model"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { isly } from "isly"
import { Modified } from "../../Modified"
import { Changeable as ProfileChangeable } from "./Changeable"
import { Property as ProfileProperty } from "./Property"

export interface Profile extends Profile.Changeable {
	email: userwidgets.Email
	properties: Profile.Property[]
	modified: Modified
}

export namespace Profile {
	export type Changeable = ProfileChangeable
	export const Changeable = ProfileChangeable

	export type Property = ProfileProperty
	export const Property = ProfileProperty

	export const type = Changeable.type.extend<Profile>({
		email: userwidgets.Email.type,
		properties: isly.array(Property.type),
		modified: Modified.type,
	})
	export const is = type.is
	export const flaw = type.flaw
}
