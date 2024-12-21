import express from 'express';
import Blog from '../../models/blog/blog.js';

const router = express.Router();

router.delete('/:id', async (req,res) => {
	try{
		const { id } = req.params;
		await Blog.findByIdAndDelete(id);
		res.status(200).send({ status:200, message:"blog deleted" });
	}catch(err){
		res.status(500).send({ status:500, err })
	}
})

export default router;