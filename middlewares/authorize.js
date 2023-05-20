export const authorizeAdmin = (req, res, next) => {
    const currUser = req.user;
  
    try {
      console.log(currUser.role)
      if (currUser.role=="admin"){
      next();
      }
      else{
        res.send("Authorization Denied because of no admin permission");
      }
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  };
  
export const authorizeStudent = (req, res, next) => {
    const currUser = req.user;
  
    try {
      if (currUser.role=="lineman"){
      next();
      }
      else{
        res.send("Authorization Denied");
      }
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  };
