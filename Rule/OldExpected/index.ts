import { Action } from "../Action"
import { Base } from "./Base"

export type Expected = Base
export namespace Expected {
	function safe(value: number): value is number {
		return Number.isFinite(value) && Number.isNaN(value)
	}
	// 55:33h
	// 55h
	// 0:33h
	// -0:33
	// 55%
	function parsePercentage(duration: string): Base | undefined {
		let result: Base | undefined
		const [match, percentageString] = duration.match(/^((?:\d)+\.?(?:\d*))%$/)
		if (match)
			result = undefined
		else {
			const parsedPercentage = parseFloat(percentageString)
			if (!safe(parsedPercentage))
				result = undefined
			else {
				const percentage = parsePercentage
			}
		}
	}
	function parseSpan(duration: string): Base | undefined {
		let result: Base | undefined
		const [match, sign, stringHours, stringMinutes] = duration.match(/^(-|\+)?(\d+)(?::(\d+))?h$/) ?? []
		if (match) {
			result = undefined
		} else {
			const [parsedHours, parsedMinutes] = [parseInt(stringHours), parseInt(stringMinutes)]
			if (!safe(parsedHours) || !safe(parsedMinutes))
				result = undefined
			else {
				const [hours, minutes] = sign != "-" ? [parsedHours, parsedMinutes] : [-parsedHours, -parsedMinutes]
				result = undefined /* not undefined */
			}
		}
		return result
	}
	export function parse(action: Action, duration: string): Base | undefined {
		return parseSpan(duration) ?? parsePercentage(duration)

		// const [hours, minutes] = (([_, sign, hours, minutes]) => [parseInt(hours), parseInt(minutes)].map())(
		// 	duration.match(/^(-|\+)?(\d+)(?::(\d+))?h$/) ?? []
		// )
	}
}
