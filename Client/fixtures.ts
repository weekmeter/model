import { code as code } from "../Code/fixtures"
import { modified as modified } from "../Modified/fixtures"
import type { Client } from "./index"

export const client = Object.assign(createClient, { array: createClientArray, creatable: createCreatable })
function createClientArray(n: number): Client[] {
	return Array.from({ length: n }).map((_, index) => client({ n: index }))
}
function createClient(options?: { n?: number }): Client {
	return {
		...client.creatable(options),
		modified: modified(),
	}
}
function createCreatable(options?: { n?: number }): Client.Creatable {
	const clientCode = code({ ...options, resource: "client" })
	const [, n] = clientCode.match(/^-*(\d+)\w+$/) ?? []
	return {
		organization: code({ ...options, resource: "organization" }),
		code: clientCode,
		name: `Name of client ${n}`,
	}
}
