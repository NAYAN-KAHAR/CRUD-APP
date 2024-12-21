import express from 'express';
import Blog from '../../models/blog/blog.js';

const router = express.Router();

router.put('/:id', async (req,res) => {
	try{
		const { id } = req.params;
		await Blog.findByIdAndUpdate(id,req.body);
		res.status(200).send({ status:200, message:"blog updated" });
	}catch(err){
		res.status(500).send({ status:500, err })
	}
})

export default router;