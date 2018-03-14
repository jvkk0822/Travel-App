module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define("Comment", {
    person: { // who wrote this review
     id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    city: { // what city is it about
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    country: { // what country is it in
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: { // body of the comment / review 
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });
 // give me back a comment
  return Comment;
};
