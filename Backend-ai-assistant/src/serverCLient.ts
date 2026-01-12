import {streamChat} from 'stream-chat';


export const apiKey = process.env.STREAM_API_KEY as string;
export const apiSecret = process.env.STREAM_API_SECRET as string;


if(!apiKey || !apiSecret) {
  throw new Error('Environment Variables are missing, STREAM_API_KEY and STREAM_API_SECRET must be set');
}

export const serverClient = new streamChat(apiKey, apiSecret);