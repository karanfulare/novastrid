import {Router} from 'express' ;
import {getUser,loginUser,registerUser}  from './../controller/userController.js' ;
import {upload}  from './../controller/chatUpload.js' ;

const router = Router()


router.get('/get_user', getUser);
router.post('/upload',upload);
router.post('/addUser',registerUser);
router.post('/loginUser',loginUser);

export default router ;