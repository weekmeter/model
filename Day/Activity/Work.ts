import { isly } from "isly"
import { Code } from "../../Code"

export type Work = `${Code}/${Code}/${Code}`
export const codeType = isly.string<Code>(/[a-z0-9_-]+/)
export namespace Work {
	export const type = isly.named("weekmeter.Day.Key.Work", isly.string<Work>(/[a-z0-9_-]+\/[a-z0-9_-]+\/[a-z0-9_-]+/))
	export const is = type.is
	export const flaw = type.flaw
	export function create(client: Code, project: Code, activity: Code): Work {
		return `${client}/${project}/${activity}`
	}
	export function parse(key: Work): { type: "work"; client: Code; project: Code; activity: Code } | undefined {
		const result = key.split("/")
		return result.length == 3 ? { type: "work", client: result[0], project: result[1], activity: result[2] } : undefined
	}
}
