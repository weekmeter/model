import type { Code } from "./index"

export function code(options?: { resource?: "organization" | "client" | "project" | "activity"; n?: number }): Code {
	const mod =
		options?.n == undefined
			? 1
			: options.resource == "organization"
			? 7
			: options.resource == "client"
			? 5
			: options.resource == "project"
			? 3
			: 2
	return `${options?.resource?.at(0) ?? "x"}${(options?.n ?? 1) % mod}`.padStart(8, "-")
}
