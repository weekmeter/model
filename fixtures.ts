import { isoly } from "isoly"
import { weekmeter } from "./index"

export function getModified(): weekmeter.Modified {
	return {
		value: "2020-12-31T23:59:59.000Z",
		by: "test-testson@test.com",
	}
}
export function getTime(): weekmeter.Time {
	return {
		client: "CLT",
		project: "ProjectA",
		email: "Email@test.com",
		activity: "ACTT",
		organization: "---o1---",
		date: isoly.Date.create(new Date()),
		balance: { hours: 0.75, minutes: 14 },
		modified: getModified(),
		value: { hours: 5 },
	}
}

export function getActivity(): weekmeter.Activity {
	return {
		name: "ActicityTest",
		code: "ACTT",
		modified: getModified(),
	}
}

export function getClient(): weekmeter.Client {
	return {
		name: "ClientTest",
		code: "CLT",
		modified: getModified(),
	}
}

export function getProject(): weekmeter.Project {
	return {
		name: "ProjectTest",
		code: "PRT",
		modified: getModified(),
	}
}
