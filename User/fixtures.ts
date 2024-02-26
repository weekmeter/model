import { userwidgets } from "@userwidgets/model"
import { profile } from "./Profile/fixtures"
export const user = Object.assign(createUser, { profile })

function createUser(): userwidgets.Email {
	return "jessie@rocket.com"
}
