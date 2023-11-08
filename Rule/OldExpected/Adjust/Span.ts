import { isoly, TimeSpan } from "isoly"
import { Base } from "../Base"

export class Span extends Base {
	constructor(private duration: isoly.TimeSpan) {
		super()
	}
	apply(duration: TimeSpan): TimeSpan {
		return Object.entries(this.duration).reduce(
			(result, [key, value]) => Object.assign(result, { [key]: (result[key] ?? 0) + value }),
			{ ...duration }
		)
	}
}
