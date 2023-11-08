import { isoly } from "isoly"
import { Base } from "./Base"

export class Set extends Base {
	constructor(private duration: isoly.TimeSpan) {
		super()
	}
	apply(_: isoly.TimeSpan): isoly.TimeSpan {
		return this.duration
	}
}
