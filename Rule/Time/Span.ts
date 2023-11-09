import { isly } from "isly"
import { Base } from "./Base"

export interface Span {
	hours?: number
	minutes?: number
}
export namespace Span {
	export const type = isly.object<Span>({
		hours: isly.number().optional(),
		minutes: isly.number().optional(),
	})
	export const is = type.is
	export const flaw = type.flaw
	export function parse(time: string): Span | undefined {
		let result: Span | undefined
		const [match, sign, hoursString, minutesString] = time.match(/^(-|\+)?(\d+)(?::(\d*))?h$/) ?? []
		if (!match) {
			result = undefined
		} else {
			const [hours, minutes] = [parseInt(hoursString), parseInt(minutesString) || 0]
			if (!Base.safe(hours) || !Base.safe(minutes))
				result = undefined
			else
				result =
					sign != "-"
						? { hours, ...(minutes && { minutes }) }
						: { hours: -hours, ...(minutes && { minutes: -minutes }) }
		}
		return result
	}
	export function toString(time: Span): string {
		return `${time.hours ?? 0}:${(time.minutes ?? 0).toString(10).padStart(2, "0")}h`
	}
}
