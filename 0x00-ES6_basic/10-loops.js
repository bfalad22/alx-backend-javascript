export default function appendToEacArrayValue(array, appendString) {
	const arrayEnd = [];
	for (const idx of array) {
		arrayEnd.push('${appendString}${idx}');
	}

	return arrayEnd;
}
