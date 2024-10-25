import { weekmeter } from "./index"

describe("Days", () => {
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
	it("is", () => {
		expect(weekmeter.Days.is({ "2024-01-01": day })).toEqual(true)
	})
	it("from", () => {
		const times: weekmeter.Time[] = [
			{
				type: "parental",
				organization: "abcd0123",
				date: "2024-01-01",
				email: "jessie@rocket.com",
				modified: { by: "jessie@rocket.com", value: "2024-01-01T08:30:00.000Z" },
				value: { hours: 1 },
			},
			{
				type: "sick",
				organization: "abcd0123",
				date: "2024-01-01",
				email: "jessie@rocket.com",
				modified: { by: "jessie@rocket.com", value: "2024-01-01T08:30:00.000Z" },
				value: { hours: 1 },
			},
			{
				type: "unpaid",
				organization: "abcd0123",
				date: "2024-01-01",
				email: "jessie@rocket.com",
				modified: { by: "jessie@rocket.com", value: "2024-01-01T08:30:00.000Z" },
				value: { hours: 1 },
			},
			{
				type: "vacation",
				organization: "abcd0123",
				date: "2024-01-01",
				email: "jessie@rocket.com",
				modified: { by: "jessie@rocket.com", value: "2024-01-01T08:30:00.000Z" },
				value: { hours: 1 },
			},
			{
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
		]
		expect(weekmeter.Days.from(times)).toEqual({ "2024-01-01": day })
	})
})
