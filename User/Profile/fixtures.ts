import * as modified from "../../Modified/fixtures"
import { Profile } from "./index"
import { Property } from "./Property"

export const profile = Object.assign(createProfile, { changeable: createChangeable, properties: createProperties })
export function createProfile(): Profile {
	return {
		email: "jessie@rocket.com",
		modified: modified.modified(),
		properties: createProperties(),
	}
}
export function createProperties(): Property[] {
	return [
		{ name: "country", value: "England" },
		{ name: "department", value: "HR" },
	]
}
export function createChangeable(): Profile.Changeable {
	return { properties: createProperties() }
}
