export default function createIteratorObject (report) {
	const result = [];
	for (const idx of Object.value(report.allEmployees)) {
		result.push(...idx);
	}
	return result;
}
