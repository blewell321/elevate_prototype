// userController.js

const findUser = async (email, username) => {
    let recordExists = false;
    const options = {
      filterByFormula: `OR(email = '${email}', username = '${username}')`
    };
  
    const users = await data.getAirtableRecords(table, options);
  
    users.filter(user => {
      if (user.get("email") === email || user.get("username") === username) {
        return (recordExists = true);
      }
      return (recordExists = false);
    });
  
    return recordExists;
  };