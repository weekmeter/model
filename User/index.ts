import { userwidgets } from "@userwidgets/model"
import { isly } from "isly"
import { Profile as UserProfile } from "./Profile"

export type User = userwidgets.User & UserProfile

export namespace User {
	export type Profile = UserProfile
	export const Profile = UserProfile

	export namespace Profile {
		export type Changeable = UserProfile.Changeable
		export type Property = UserProfile.Property
	}

	export const type = isly.intersection<User, userwidgets.User, Profile>(userwidgets.User.type, Profile.type)
	export const is = type.is
	export const flaw = type.flaw
}
