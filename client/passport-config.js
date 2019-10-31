const LocalStrategy = require("passport-local").Strategy;
const bcrypt= require('bcrypt')

function initialize(passport) {
  const authenticateUser = (userid, password, done) => {
      const user=getUserByUserID(userid);
      if(user == null){
          return done(null, false, {
              message:"No User with that User ID "
          })  
          try{
              if(await bcrypt.compare(password, user.password)){

              }else{

              }
          }catch{

          }
         
      }
  };
  passport.use(
    new LocalStrategy({ usernameField: "userid" }),
    authenticateUser
  );
  passport.serializeUser((user, done) => {});
  passport.deerializeUser((user, done) => {});
}
