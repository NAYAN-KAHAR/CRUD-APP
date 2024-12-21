import express from 'express'
import Blog from '../../models/blog/blog.js';

const router = express.Router();

router.get('/', async (req,res) => {
	try{
		const blogs = await Blog.find() //find({}), findOne({}) ,findByID("")
		res.status(200).send(blogs);
	}catch(err){
		res.status(403).send({ status:403, error:err });
	}
})

export default router;