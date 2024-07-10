import express from 'express';
import MessageRouter from './routes/message.route'
import {onRequest} from "firebase-functions/v2/https";

const app = express();

app.use(express.json());
app.use('/message', MessageRouter);

exports.v1 = onRequest(app);