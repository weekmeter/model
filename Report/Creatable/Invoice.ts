import { isoly } from "isoly"
import { isly } from "isly"
import { Code } from "../../Code"
import { Type } from "../Type"

export interface Invoice {
	type: Type.Invoice
	client: Code
	project: Code
	date: isoly.Date
	adjustment?: isoly.TimeSpan
}
export namespace Invoice {
	export const type = isly.object<Invoice>({
		type: Type.Invoice.type,
		client: Code.type,
		project: Code.type,
		date: isly.fromIs("isoly.Date", isoly.Date.is),
		adjustment: isly.fromIs("isoly.TimeSpan", isoly.TimeSpan.is).optional(),
	})
	export const is = type.is
	export const flaw = type.flaw
}
