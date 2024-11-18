import { isoly } from "isoly"
import { isly } from "isly"

/**
 * expected = expected work time when salary was locked
 */
export interface Locked {
	expected?: isoly.TimeSpan
}
export namespace Locked {
	export const type = isly.object<Locked>({
		expected: isly.fromIs("isoly.TimeSpan", isoly.TimeSpan.is).optional(),
	})
}
