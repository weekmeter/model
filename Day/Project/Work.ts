import { isly } from "isly"
import { Code } from "../../Code"

export type Work = `${Code}/${Code}`
export namespace Work {
	export const type = isly.string<Work>(/^[a-z0-9_-]+\/[a-z0-9_-]+$/)
	export const is = type.is
}
