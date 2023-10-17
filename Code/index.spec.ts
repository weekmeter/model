import * as fixtures from "../fixtures"
import { weekmeter } from "../index"

describe("Code", () => {
	it("is", () => {
		expect(weekmeter.Code.is(fixtures.getCode())).toEqual(true)
		expect(weekmeter.Code.is("Hello")).toEqual(false)
		expect(weekmeter.Code.is("hello ")).toEqual(false)
		expect(weekmeter.Code.is("hello")).toEqual(true)
	})
	it("get", () => {
		expect(weekmeter.Code.type.get(fixtures.getCode())).toEqual(fixtures.getCode())
		expect(weekmeter.Code.type.get("hello ")).toEqual(undefined)
	})
})
