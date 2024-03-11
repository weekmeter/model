import { isoly } from "isoly"
import { Type } from "../Type"
import { Base } from "./Base"

export function changeable(type: Type, n: number): Base[] {
	const now = isoly.Date.now()
	return Array.from({ length: n }).map<Base>((_, index) => ({
		type: type,
		organization: `o${(index % 7) + 1}`.padStart(8, "-"),
		date: isoly.Date.next(now, index),
		email: "jessie@rocket.com",
		value: { hours: 8 },
	}))
}
