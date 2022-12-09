import express from 'express';
const app = express();
import cors from 'cors';
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;
import mongoose from 'mongoose';
import 'dotenv/config';
import { newsRoute } from './routes/newsRoute';
import { userRoute } from './routes/userRoute';

mongoose
	.connect(`${process.env.MONGO}`)
	.then(() => {
		console.log('Connected to MongoDB');
	})
	.catch((err) => {
		console.log('Error:', err.message);
	});

app.use('/api/newsitems', newsRoute);
app.use('/api/users', userRoute);
app.get('/', (req, res) => {
	res.send('Hello World!');
});
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
