import { ChatRequest } from "./chat-request.model";
import { ChatResponse } from "./chat-response.model";

export interface ChatInterchange {
  chatRequest: ChatRequest;
  chatResponse: ChatResponse;
}
