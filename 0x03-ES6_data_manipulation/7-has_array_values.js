const hasValuesFromArray = (set, array) => {
	for (const item of array) {
		if (!set.has(item)) {
			retrun false;
		}
	}
	return true;
};
	export default hasValuesFromArray;
