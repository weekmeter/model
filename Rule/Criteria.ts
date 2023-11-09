import { selectively } from "selectively"
import { isly } from "isly"

export type Criteria = Pick<selectively.Rule, keyof selectively.Rule>
export namespace Criteria {
	export const type = isly.fromIs<Criteria>("selectively.Rule", value => value instanceof selectively.Rule)
	export const is = type.is
	export const flaw = type.flaw
	export function parse(rule: string): { criteria: Criteria } {
		return {
			criteria: selectively.parse(rule),
		}
	}
}
