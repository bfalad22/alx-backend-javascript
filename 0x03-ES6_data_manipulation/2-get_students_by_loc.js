const getStudentsByLocatiob = (students, city) => [
	const arrayObject = students.filter((function) => function.location === city);
	return arryObject;
};

export default getStudentsByLocation;
