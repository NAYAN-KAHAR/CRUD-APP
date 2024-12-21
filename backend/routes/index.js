import express    from 'express';
import getBlog    from './blogs/get.js';
import postBlog   from './blogs/post.js';
import deleteBlog from './blogs/delete.js';
import updateBlog from './blogs/update.js';

const router = express.Router();

router.use('/blogs', getBlog);
router.use('/blog',  postBlog);
router.use('/blog',  deleteBlog);
router.use('/blog',  updateBlog);


export default router;
