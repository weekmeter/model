import * as fixtures from "../fixtures"
import { weekmeter } from "../index"

describe("Activity", () => {
	it("is", () => {
		const activity = fixtures.getActivity()
		expect(weekmeter.Activity.is(activity)).toEqual(true)
		expect(weekmeter.Activity.is((({ name, ...activity }) => activity)(activity))).toEqual(false)
		expect(weekmeter.Activity.is({ ...activity, name: 123 })).toEqual(false)
	})

	it("get", () => {
		const activity = { ...fixtures.getActivity(), from: "TEsting" }
		expect(weekmeter.Activity.type.get(activity)).toEqual(fixtures.getActivity())
		expect(weekmeter.Activity.type.get({ name: "asd" })).toEqual(undefined)
	})
	it("scope", () => {
		const activities = fixtures.getActivities(210)
		const scoped = weekmeter.Activity.scope(activities)
		expect(weekmeter.Activity.Scoped.is(scoped)).toEqual(true)
		expect(activities.length).toEqual(210)
		expect(activities[0]).toBe(scoped["------o1"]["------c1"]["------p1"]["------a1"])
		expect(activities[activities.length - 1]).toBe(scoped["------o7"]["------c5"]["------p3"]["------a2"])
	})
	it("fromScope", () => {
		const activities = fixtures.getActivities(210)
		const scoped = weekmeter.Activity.scope(activities)
		const result = weekmeter.Activity.fromScope(scoped)
		expect(activities.length).toEqual(result.length)
		for (const activity of result)
			expect(activities.includes(activity)).toEqual(true)
	})
	it("key", () => {
		const [activity] = fixtures.getActivities(1)
		expect(weekmeter.Activity.key(activity)).toEqual(weekmeter.Activity.Creatable.key(activity))
	})
})

describe("Creatable", () => {
	it("is", () => {
		const creatable = fixtures.getActivity.creatable()
		expect(weekmeter.Activity.Creatable.is(creatable)).toEqual(true)
		expect(weekmeter.Activity.Creatable.is((({ name, ...creatable }) => creatable)(creatable))).toEqual(false)
		expect(weekmeter.Activity.Creatable.is({ ...creatable, name: 123 })).toEqual(false)
	})

	it("get", () => {
		const creatable = { ...fixtures.getActivity.creatable(), from: "TEsting" }
		expect(weekmeter.Activity.Creatable.type.get(creatable)).toEqual(fixtures.getActivity.creatable())
		expect(weekmeter.Activity.Creatable.type.get({ name: "asd" })).toEqual(undefined)
	})
	it("key", () => {
		const [activity] = fixtures.getActivities(1)
		expect(weekmeter.Activity.Creatable.key(activity)).toEqual("------o1|------c1|------p1|------a1")
	})
})
