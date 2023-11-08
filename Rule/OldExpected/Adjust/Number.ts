import { TimeSpan } from "isoly"
import { Base } from "../Base"

export class Number extends Base {
	constructor(private percentage: number) {
		super()
	}
	apply(duration: TimeSpan): TimeSpan {
		return Object.fromEntries(Object.entries(duration).map(([key, value]) => [key, value * this.percentage]))
	}
}
