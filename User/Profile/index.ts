import { isly } from "isly"
import { Modified } from "../../Modified"
import { Changeable as ProfileChangeable } from "./Changeable"
import { Property as ProfileProperty } from "./Property"

export interface Profile extends Profile.Changeable {
	modified: Modified
}

export namespace Profile {
	export type Changeable = ProfileChangeable
	export const Changeable = ProfileChangeable

	export type Property = ProfileProperty
	export const Property = ProfileProperty

	export const type = isly.object<Profile>({
		properties: isly.array(Property.type),
		modified: Modified.type,
	})
	export const is = type.is
	export const flaw = type.flaw
}
