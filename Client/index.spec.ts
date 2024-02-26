import { fixtures } from "../fixtures"
import { weekmeter } from "../index"

describe("Client", () => {
	it("is", () => {
		const client = fixtures.client()
		expect(weekmeter.Client.is(client)).toEqual(true)
		expect(weekmeter.Client.is((({ name, ...client }) => client)(client))).toEqual(false)
		expect(weekmeter.Client.is({ ...client, name: 123 })).toEqual(false)
	})

	it("get", () => {
		const client = { ...fixtures.client(), from: "Testing" }
		expect(weekmeter.Client.type.get(client)).toEqual(fixtures.client())
		expect(weekmeter.Client.type.get({ name: "asd" })).toEqual(undefined)
	})
	it("key", () => {
		const [client] = fixtures.client.array(1)
		expect(weekmeter.Client.key(client)).toEqual(weekmeter.Client.Creatable.key(client))
	})
})
