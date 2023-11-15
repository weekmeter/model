// This import is unused but required. The produced build is wrong without it
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { isly } from "isly"
import { Modified } from "../../Modified"
import type { Rule } from "../index"
import { Changeable as GroupChangeable } from "./Changeable"

export interface Group {
	rules: Rule[]
	modified: Modified
}
export namespace Group {
	export type Changeable = GroupChangeable
	export const Changeable = GroupChangeable
	export const type = Changeable.type.extend<Group>({
		modified: Modified.type,
	})
	export const is = type.is
	export const flaw = type.flaw
}
