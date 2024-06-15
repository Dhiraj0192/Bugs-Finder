/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = "AIzaSyDbTSgtKdPStEiLIwa2AUyed3cFRbOEvrQ";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 2000,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  // const prompttt =
  //   "Identify where given code is python or not. if the given code is in python then Where is the bug in this python code?";
  const chatSession = model.startChat({
    generationConfig,
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [],
  });

  // // Get user input (replace with your implementation)
  // const userInput = prompt;

  // // Create a message object with user input and "user" role
  // const userMessage = {
  //   text: userInput,
  //   role: "user",
  //   parts: [{ text: userInput }], // Wrap text in Parts object
  // };

  // // Update chat history with user message
  // chatSession = chatSession.update({
  //   history: [...chatSession.history, userMessage],
  // });

  // Send user message and receive response
  const result = await chatSession.sendMessage(prompt);
  console.log(result.response.text());
  return result.response.text();

  // const result = await chatSession.sendMessage(prompt);
  // console.log(result.response.text());
  // return result.response.text();
}

export default run;
