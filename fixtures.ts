import { isoly } from "isoly"
import { weekmeter } from "./index"

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
		client: "CLT",
		project: "ProjectA",
		email: "Email@test.com",
		activity: "ACTT",
		organization: "---o1---",
		date: isoly.Date.create(new Date()),
		modified: getModified(),
		value: { hours: 5 },
	}
}
function createTimeCreatable(): weekmeter.Time.Creatable {
	return {
		email: "Test@test.com",
		client: "ClientCode",
		project: "ProjectCode",
		activity: "ActivityCode",
		organization: "---o1---",
		date: isoly.Date.create(new Date()),
		value: { hours: 4 },
	}
}
function createTimeChangeable(): weekmeter.Time.Changeable {
	return { value: { hours: 3, minutes: 30 } }
}

export const getActivity = Object.assign(createActivity, { creatable: createActivityCreatable })
function createActivity(): weekmeter.Activity {
	return {
		name: "ActicityTest",
		code: "ACTT",
		modified: getModified(),
	}
}
function createActivityCreatable(): weekmeter.Activity.Creatable {
	return { name: "ActivityTest", code: "ACTT" }
}

export const getClient = Object.assign(createClient, { creatable: createClientCreatable })
function createClient(): weekmeter.Client {
	return {
		name: "ClientTest",
		code: "CLT",
		modified: getModified(),
	}
}
function createClientCreatable(): weekmeter.Client.Creatable {
	return { name: "ClientTest", code: "CT" }
}
export const getProject = Object.assign(createProject, { creatable: createProjectCreatable })
function createProject(): weekmeter.Project {
	return {
		name: "ProjectTest",
		code: "PRT",
		modified: getModified(),
	}
}
function createProjectCreatable(): weekmeter.Project.Creatable {
	return { name: "ProjectTest", code: "PT" }
}
