import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


const app = express();

app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://axhar:axhar123@cluster0.fbhgg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTropology: true})