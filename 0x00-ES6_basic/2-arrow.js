export default function getNeighborhoodsList() {
	this.SanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

	const self = this;
	this.addNeighborhood = (newNeighborhood) => {
	self.SanFranciscoNeighborhoods.push(newNeighborhood);
		return self.SanFranciscoNeighborhoods;
	};
}
