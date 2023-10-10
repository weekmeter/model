import { isoly } from "isoly"

export interface Time {
	value: isoly.TimeSpan
	modified: isoly.DateTime
	created: isoly.DateTime
}
