import { isoly } from "isoly"
import { Time } from "../Time"
import { Base } from "./Base"
import { Times } from "./Times"

export type Project = { [type in Time.Type]: Times<Time & { type: type }> } & {
	total: isoly.TimeSpan
	dates: isoly.DateRange
} & Base
