'use client';
import { useRouter } from 'next/navigation';
import { PlusCircle } from 'lucide-react';
import { useChat } from '@/modules/chat/hooks/useChat';
import { Button } from '@/components/ui/button';

export function NewChatButton() {
  const router = useRouter();
  const { createNewConversation } = useChat();

  const handleNewChat = async () => {
    const newConversationId = await createNewConversation();
    router.push(`/chat/${newConversationId}`);
  };

  return (
    <Button
      variant="ghost"
      className="w-full justify-start gap-2"
      onClick={handleNewChat}
    >
      <PlusCircle className="h-5 w-5" />
      <span>New Chat</span>
    </Button>
  );
}
