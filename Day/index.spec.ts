import { weekmeter } from "../index"

describe("weekmeter.Day", () => {
	it("is", () => {
		const day: weekmeter.Day = {
			parental: {
				type: "parental",
				organization: "abcd0123",
				date: "2024-01-01",
				email: "jessie@rocket.com",
				modified: { by: "jessie@rocket.com", value: "2024-01-01T08:30:00.000Z" },
				value: { hours: 1 },
			},
			sick: {
				type: "sick",
				organization: "abcd0123",
				date: "2024-01-01",
				email: "jessie@rocket.com",
				modified: { by: "jessie@rocket.com", value: "2024-01-01T08:30:00.000Z" },
				value: { hours: 1 },
			},
			unpaid: {
				type: "unpaid",
				organization: "abcd0123",
				date: "2024-01-01",
				email: "jessie@rocket.com",
				modified: { by: "jessie@rocket.com", value: "2024-01-01T08:30:00.000Z" },
				value: { hours: 1 },
			},
			vacation: {
				type: "vacation",
				organization: "abcd0123",
				date: "2024-01-01",
				email: "jessie@rocket.com",
				modified: { by: "jessie@rocket.com", value: "2024-01-01T08:30:00.000Z" },
				value: { hours: 1 },
			},
			"client/project/activity": {
				type: "work",
				organization: "abcd0123",
				client: "client",
				project: "project",
				activity: "activity",
				date: "2024-01-01",
				email: "jessie@rocket.com",
				modified: { by: "jessie@rocket.com", value: "2024-01-01T08:30:00.000Z" },
				value: { hours: 4 },
			},
		}
		expect(weekmeter.Day.is(day)).toEqual(true)
	})
	it("set", () => {
		const day: weekmeter.Day = {}
		expect(weekmeter.Day.is(day)).toEqual(true)
		expect(Object.keys(day)).toEqual([])
		const result = weekmeter.Day.set(day, {
			type: "work",
			organization: "abcd0123",
			client: "client",
			project: "project",
			activity: "activity",
			date: "2024-01-01",
			email: "jessie@rocket.com",
			modified: { by: "jessie@rocket.com", value: "2024-01-01T08:30:00.000Z" },
			value: { hours: 8 },
		})
		expect(Object.keys(day)).toEqual([])
		expect(day).not.toBe(result)
		expect(Object.keys(result)).toEqual(["client/project/activity"])
	})
})
