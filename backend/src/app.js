import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import helmet from 'helmet';





const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors({
    origin: 'http://localhost:5000'
}));














export default app;