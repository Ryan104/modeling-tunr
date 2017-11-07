module.exports = (sequelize, Sequelize) => {
	const model = sequelize.define('song', {
		name: Sequelize.STRING,
		duration: Sequelize.STRING,
		date_of_release: Sequelize.STRING,
		album_title: Sequelize.STRING
	});
	return model;
};