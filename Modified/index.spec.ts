import { fixtures } from "../fixtures"
import { weekmeter } from "../index"

describe("Modified", () => {
	it("is", () => {
		const modified = fixtures.modified()
		expect(weekmeter.Modified.is(modified)).toEqual(true)
		expect(weekmeter.Modified.is((({ by, ...modified }) => modified)(modified))).toEqual(false)
		expect(weekmeter.Modified.is({ ...modified, by: 123 })).toEqual(false)
	})

	it("get", () => {
		const modified = { ...fixtures.modified(), from: "Testing" }
		expect(weekmeter.Modified.type.get(modified)).toEqual(fixtures.modified())
		expect(weekmeter.Modified.type.get({ name: "asd" })).toEqual(undefined)
	})
})
