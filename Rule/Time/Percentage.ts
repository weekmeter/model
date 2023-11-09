import { isly } from "isly"
import { Base } from "./Base"

export type Percentage = number
export namespace Percentage {
	export const type = isly.number()
	export const is = type.is
	export const flaw = type.flaw
	export function parse(time: string): Percentage | undefined {
		let result: number | undefined
		const [match, percentageString] = time.match(/^((?:\d)+\.?(?:\d*))%$/) ?? []
		if (!match)
			result = undefined
		else {
			const percentage = parseFloat(percentageString)
			if (!Base.safe(percentage))
				result = undefined
			else
				result = percentage / 100
		}
		return result
	}
	export function toString(time: Percentage): string {
		return `${time.toString(10)}%`
	}
}
