import { weekmeter } from "../../index"

describe("weekmeter.Day.Activity.NonWork", () => {
	it("is", () => {
		expect(weekmeter.Day.Activity.NonWork.is("vacation")).toEqual(true)
		expect(weekmeter.Day.Activity.NonWork.is("unpaid")).toEqual(true)
		expect(weekmeter.Day.Activity.NonWork.is("parental")).toEqual(true)
		expect(weekmeter.Day.Activity.NonWork.is("sick")).toEqual(true)
		expect(weekmeter.Day.Activity.NonWork.is("sleeping")).toEqual(false)
		expect(weekmeter.Day.Activity.NonWork.is("client/project/activity")).toEqual(false)
	})
})
