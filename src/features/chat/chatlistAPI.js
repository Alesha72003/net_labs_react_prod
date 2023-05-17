import { chatAPI } from "../../app/api"

export async function getChats() {
  return (await chatAPI.get(`/chat`)).data;
}