const skills = [
    {id: 1, skill: 'Learned JavaScript', accomplished: true},
    {id: 2, skill: 'Learned CSS', accomplished: true},
    {id: 3, skill: 'Learned HTML', accomplished: true},
    {id: 4, skill: 'Learned RegEdit', accomplished: true},
    {id: 5, skill: 'Learned Python', accomplished: false},
    {id: 6, skill: 'Learned Mongoose', accomplished: false},
];
	
module.exports = {
    getAll
};
	
function getAll() {
    return skills;
}