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
	it("create", () => {
		expect(weekmeter.Code.create("hello there")).toEqual("hello-there")
		expect(weekmeter.Code.create("Hello There")).toEqual("hello-there")
		expect(weekmeter.Code.create("hell0 th3r3")).toEqual("hell0-th3r3")
		expect(weekmeter.Code.create("hello there¡@£$€¥{[]}#¤%&/()=?")).toEqual("hello-there")
		expect(weekmeter.Code.create("   Hell0 Th3r3¡@££$€¥   ")).toEqual("hell0-th3r3")
	})
})
