import express from 'express'
import Blog from '../../models/blog/blog.js';

const router = express.Router();

router.post('/', async (req,res) => {
	try{
		const user = await Blog.create(req.body);
		res.status(201).send({status:201, message:"blog created "});
	}
	catch(error){
		res.status(500).send({status:500, error});
		console.log(error);
	}
})

export default router;

