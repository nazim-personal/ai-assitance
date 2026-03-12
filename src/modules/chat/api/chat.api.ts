import api from '@/lib/axios';
import type { Conversation, Message } from '@/modules/chat/types/chat.types';

export const getConversations = async (): Promise<Conversation[]> => {
  const response = await api.get('/chat/conversations');
  return response.data;
};

export const createConversation = async (title: string): Promise<Conversation> => {
  const response = await api.post('/chat/conversations', { title });
  return response.data;
};

export const getMessages = async (conversationId: string): Promise<Message[]> => {
  const response = await api.get(`/chat/conversations/${conversationId}/messages`);
  return response.data;
};

// Note: sendMessage will be handled via streaming, so we use the browser's EventSource API directly.
// This function can be used for non-streaming fallbacks or other purposes.
export const sendMessage = async (conversationId: string, message: string): Promise<Message> => {
  const response = await api.post(`/chat/conversations/${conversationId}/messages`, { message });
  return response.data;
};

export const deleteConversation = async (conversationId: string): Promise<void> => {
  await api.delete(`/chat/conversations/${conversationId}`);
};

export const renameConversation = async (conversationId: string, title: string): Promise<Conversation> => {
  const response = await api.patch(`/chat/conversations/${conversationId}`, { title });
  return response.data;
};
