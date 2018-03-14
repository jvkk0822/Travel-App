module.exports = function(sequelize, DataTypes) {
  var Country = sequelize.define("Country", {
    list_tag: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    list_geopoliticalarea: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    list_travel_transportation: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    list_health: { 
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    list_local_laws_and_special_circumstances: { 
      type: DataTypes.TEXT,
      allowNull: true,
      len: [1]
    },
     list_safety_and_security: { 
      type: DataTypes.TEXT,
      allowNull: true,
      len: [1]
    },
     list_entry_exit_requirements: { 
      type: DataTypes.TEXT,
      allowNull: true,
      len: [1]
    },
     list_destination_description: { 
      type: DataTypes.TEXT,
      allowNull: true,
      len: [1]
    },
     list_iso_code: { 
      type: DataTypes.TEXT,
      allowNull: true,
      len: [1]
    },
      list_travel_embassyAndConsulate: { 
      type: DataTypes.TEXT,
      allowNull: true,
      len: [1]
    },
     list_last_update_date: { 
      type: DataTypes.TEXT,
      allowNull: true,
      len: [1]
    }
  });
 // give me back some country info
  return Country;
};
