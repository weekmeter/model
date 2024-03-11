import { fixtures } from "../fixtures"
import { weekmeter } from "../index"

describe("Creatable", () => {
	it("is", () => {
		const creatable = fixtures.client.creatable()
		expect(weekmeter.Client.Creatable.is(creatable)).toEqual(true)
		expect(weekmeter.Client.Creatable.is((({ name, ...creatable }) => creatable)(creatable))).toEqual(false)
		expect(weekmeter.Client.Creatable.is({ ...creatable, name: 123 })).toEqual(false)
	})

	it("get", () => {
		const creatable = { ...fixtures.client.creatable(), from: "Testing" }
		expect(weekmeter.Client.Creatable.type.get(creatable)).toEqual(fixtures.client.creatable())
		expect(weekmeter.Client.Creatable.type.get({ name: "asd" })).toEqual(undefined)
	})
	it("key", () => {
		const [client] = fixtures.client.array(1)
		expect(weekmeter.Client.Creatable.key(client)).toEqual("------o0|------c0")
	})
})
