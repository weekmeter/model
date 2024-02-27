export namespace Base {
	export function safe(value: number): boolean {
		return !Number.isNaN(value) && Number.isFinite(value)
	}
}
