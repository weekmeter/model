import { userwidgets } from "@userwidgets/model"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { isly } from "isly"
import { Profile as UserProfile } from "./Profile"

export type User = userwidgets.User & { profile?: User.Profile }

export namespace User {
	export type Profile = UserProfile
	export const Profile = UserProfile

	export namespace Profile {
		export type Changeable = UserProfile.Changeable
		export type Property = UserProfile.Property
	}

	export const type = userwidgets.User.type.extend<User>({
		profile: Profile.type.optional(),
	})
	export const is = type.is
	export const flaw = type.flaw
}
