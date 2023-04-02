import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const port = 5000;
const ipaddr = '0.0.0.0';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    res.status(200).send({
        message: 'Hello friends! The API server is up and running. This API was built by Viraj.',
    })
});

app.post('/', async (req, res) => {
    try {
        const messages = req.body.messages;

        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages
        });

        res.status(200).send({
            bot: response.data.choices[0].message.content
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

app.listen(port,
    () => console.log(`Server is running on http://${ipaddr}:${port}`)
);