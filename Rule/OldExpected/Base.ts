import { isoly } from "isoly"

export abstract class Base {
	abstract apply(duration: isoly.TimeSpan): isoly.TimeSpan
}
