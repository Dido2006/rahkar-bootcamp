const db = require("../utils/database");
const bycrpt = require("bcrypt");
const { json } = require("express");
const jwt = require("jsonwebtoken");
const { idText } = require("typescript");
const saltRounds = 10;
const secretuKey = "this should be hide from evreyone";
class AuthModel {
    // async login(data) {
    //     let { username, password } = data;
    //     const searchQuery = "select password from users where username = ?";
    //     const [user] = await db.connection.execute(searchQuery, [username]);
    //     if (user.length === 0) {
    //         throw new Error("user not found")
    //     }
    //     const isPasswordValid = await bcrypt.compareSync(password, user[0].password);
    //     if (isPasswordValid) {
        //         const token = jwt.sign({ username }, secret, { expiresIn: "1h" });
        //         return token;
        //     } else {
            //         throw new Error("Invalid credentials")
            
            //     }
            // }
            async login(UserPass) {
                try {
                    console.log('=======================');
                    const { username, password } = UserPass;
                    //search for user in database and if exist puts user's pass in getPassHashQuery const type variable 
                    const searchUsernameAndGetPasswordHashQuery = 'select password from users where username = ?';
                    console.log(username,'======================',password);
                    const [hashedPassword] = await db.connection.execute(searchUsernameAndGetPasswordHashQuery, [username])
                    //if user does not exist  length ganna be 0 but because 
                    if (hashedPassword.length == 0)
                    throw new Error('User is not found')
                console.log(hashedPassword,'+++++++++++++=====================',password);
                const isprovidedPasswordValid = await bycrpt.compareSync(password, hashedPassword[0].password)
                console.log(isprovidedPasswordValid,'======================');
                if (isprovidedPasswordValid)
                console.log("User and Pass combination is accepted");
            //         const token = jwt.sign({ username }, secret, { expiresIn: "1h" });
            const token = jwt.sign({username},secretuKey,{ expiresIn:'15m'} );
            console.log(token);
        } catch (error) {
            console.log(error.massage);
            throw new Error(Error)
        }
    }


    async register(userInfo) {
        try {
            let { username, password, fullname, mobile } = userInfo;
            let sameUserExistanceCheckQuery = "select * from users where username=?";
            let [sameUserExistanceCheckResult] = await db.connection.execute(sameUserExistanceCheckQuery, [username]);
            if (sameUserExistanceCheckResult.length > 0) {
                throw new Error("user is exsist");
            }
            const salt = await bycrpt.genSaltSync(saltRounds);
            console.log(salt);
            const hashedPassword = await bycrpt.hashSync(password, salt);
            console.log(hashedPassword);
            let registerationQuery = "insert into users (username,password,fullname,mobile) values(?,?,?,?)"
            await db.connection.execute(registerationQuery, [username, hashedPassword, fullname, mobile])
        } catch (error) {
            console.log(error.massage);
            throw new Error(Error)
        }
    }
}
module.exports = new AuthModel();