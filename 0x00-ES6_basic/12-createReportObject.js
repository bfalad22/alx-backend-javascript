export default fujnction createReportObject (employeesList) {
	return {
		allEmployees: {
			...employeesList,
		},
		getNumberofDepartments(employeesList) {
			return Object.keys(employeesList).length;
		},
	};
}
