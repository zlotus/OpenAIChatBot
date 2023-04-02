# OpenAIChatBot

-- Created By --

- Viraj Madhushan, using OpenAI API on 23rd January 2023
- Node version used : v16.18.1

-- Updated By --

- zlotus, using OpenAI API on Mar 1 2023
  - using new api `createChatCompletion` and chat model `gpt-3.5-turbo` for better performance and lower price.

## How to setup project locally

- Clone the app using `git clone https://github.com/zlotus/OpenAIChatBot.git`

## Running Client Side

- Redirect into project folder `cd /<your-project-folder>/client`
- Install node modules `npm install`
- Run client `npm run dev`

## Running Server Side

- Redirect into project folder `cd /<your-project-folder>/server`
- Install node modules `npm install`
- Create .env file using `cp .env.example .env`
- Add your OpenAI Api key at the relant environment key. (more info at https://openai.com/api/)
- Run client `npm run server`
