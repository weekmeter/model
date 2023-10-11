import * as fixtures from "../fixtures"
import { weekmeter } from "../index"

describe("client", () => {
	it("is", () => {
		const client = fixtures.getClient()
		expect(weekmeter.Client.is(client)).toEqual(true)
		expect(weekmeter.Client.is((({ name, ...client }) => client)(client))).toEqual(false)
		expect(weekmeter.Client.is({ ...client, name: 123 })).toEqual(false)
	})

	it("get", () => {
		const client = { ...fixtures.getClient(), from: "Testing" }

		expect(weekmeter.Client.type.get(client)).toEqual(fixtures.getClient())
		expect(weekmeter.Client.type.get({ name: "asd" })).toEqual(undefined)
	})
})
