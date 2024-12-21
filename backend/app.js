import express from 'express';
import mongoose from './db/index.js';
import router from './routes/index.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

mongoose.connection.on('error',(err) => {
	console.log("Database error",err);
	process.exit(1);
 });

mongoose.connection.on('open',() => {
	console.log("Database Connected");
});

app.use('/api',router);

app.listen(port, () => console.log(`server is running on ${port}`));
