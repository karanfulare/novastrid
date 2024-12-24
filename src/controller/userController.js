
import connection from "./../config/config.js";
import bcrypt  from 'bcrypt';
import jwt from 'jsonwebtoken';

export const getUser = async (req, res) => {
  try {
    let result = await connection.query(`select * from users`);
    console.log(result);
    let x = result[0];
    return res.status(200).json({ x});
  } catch (error) {
    console.log(error);
    return -1;
  }
};

export const registerUser = async (req,res)=>{
    try {
         let name =req.body.name
         let email = req.body.password 
         let password  = req.body.password ;

         const salt = await bcrypt.genSalt(10);

        const hashPass = bcrypt.hash(password,salt);
        const insert =connection.query('insert into users (name,email,password) values(?,?,?)',[name,email,hashPass]);

        if(insert.insertId > 0){
            return res.status(201).json({ message:"user created successfully !!"});
        }
    } catch (error) {
        console.log(error)
    }
}

export const loginUser = async (req,res)=>{
    try {
        const { name ,password } = req.body ;

        const checkUser =connection.query('select * from users u where u.email = ?',[email]);
        if(checkUser[0].length === 0){
            return res.status(400).json({ message:"user not found!!"});
        }else {
            const match = await bcrypt.compare(password,checkUser[0].password);
            if(!match){
                return res.status(401).json({ message:" Invalid credentials!!"});
            }else{
                const token = jwt.sign({id:checkUser[0].id},process.env.secret_key,{expires:'1h'});
                return res.status(200).json({ message:"Login successfull",token:token});
            }
    }
    } catch (error) {
        console.log(error)
    }
}