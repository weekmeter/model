import { isoly } from "isoly"
import { weekmeter } from "./index"

export function getCode(): weekmeter.Code {
	return "_-0code0-_"
}

export const getModified = Object.assign(createModified)
function createModified(): weekmeter.Modified {
	return {
		value: "2020-12-31T23:59:59.000Z",
		by: "test-testson@test.com",
	}
}

export const getTime = Object.assign(createTime, { creatable: createTimeCreatable, changeable: createTimeChangeable })
function createTime(): weekmeter.Time {
	return {
		client: "clt",
		project: "project-a",
		email: "Email@test.com",
		activity: "actt",
		organization: "---o1---",
		date: isoly.Date.create(new Date()),
		modified: getModified(),
		value: { hours: 5 },
	}
}
export function getTimes(n: number): weekmeter.Time[] {
	return Array.from({ length: n }).map((_, index) => getTime(index))
	function getTime(n: number): weekmeter.Time {
		return {
			organization: `o${(n % 7) + 1}`.padStart(8, "-"),
			client: `c${(n % 5) + 1}`.padStart(8, "-"),
			project: `p${(n % 3) + 1}`.padStart(8, "-"),
			activity: `a${(n % 2) + 1}`.padStart(8, "-"),
			email: "jessie@rocket.com",
			date: isoly.Date.now(),
			modified: getModified(),
			value: { hours: 8 },
		}
	}
}

export function getTimesWeek(n: number): weekmeter.Time[] {
	return Array.from({ length: n }).map((_, index) => getTime(index))
	function getTime(n: number): weekmeter.Time {
		return {
			organization: "------o1",
			client: "------c1",
			project: "------p1",
			activity: "------a1",
			email: "jessie@rocket.com",
			date: isoly.Date.next(isoly.Date.now(), n),
			modified: getModified(),
			value: { hours: 8 },
		}
	}
}
function createTimeCreatable(): weekmeter.Time.Creatable {
	return {
		email: "Test@test.com",
		client: "client-code",
		project: "project-code",
		activity: "activity-code",
		organization: "---o1---",
		date: isoly.Date.create(new Date()),
		value: { hours: 4 },
	}
}
function createTimeChangeable(): weekmeter.Time.Changeable {
	return createTimeCreatable()
}

export const getActivity = Object.assign(createActivity, { creatable: createActivityCreatable })
function createActivity(): weekmeter.Activity {
	return {
		organization: "---o1---",
		client: "clt",
		project: "project-a",
		name: "ActicityTest",
		code: "actt",
		modified: getModified(),
	}
}
function createActivityCreatable(): weekmeter.Activity.Creatable {
	return { name: "ActivityTest", code: "actt", organization: "---o1---", client: "clt", project: "project-a" }
}

export const getClient = Object.assign(createClient, { creatable: createClientCreatable })
function createClient(): weekmeter.Client {
	return {
		name: "ClientTest",
		code: "clt",
		modified: getModified(),
		organization: "---o1---",
	}
}
function createClientCreatable(): weekmeter.Client.Creatable {
	return { name: "ClientTest", code: "ct", organization: "---o1---" }
}
export const getProject = Object.assign(createProject, { creatable: createProjectCreatable })
function createProject(): weekmeter.Project {
	return {
		name: "ProjectTest",
		code: "prt",
		modified: getModified(),
		organization: "---o1---",
		client: "clt",
	}
}
function createProjectCreatable(): weekmeter.Project.Creatable {
	return { name: "ProjectTest", code: "pt", organization: "---o1---", client: "clt" }
}
