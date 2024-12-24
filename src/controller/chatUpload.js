import connection from "./../config/config.js";
import jwt from 'jsonwebtoken';

import read from 'xlsx';

export const upload = async (req,res)=>{
    try {
        const file = req.file ;
        const token = req.headers['authorization'] ;

        const verify = jwt.verify(token,process.env.secret_key) ;
        if(verify){
            const readFile = read(file, opts);
            console.log(readFile);

        }else{
            return res.status(401).json({ message:" Invalid credentials!!"});
        }


    } catch (error) {
        
    }
}