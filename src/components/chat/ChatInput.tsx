'use client';
import { useState, useRef, useEffect, type FormEvent } from 'react';
import { Send } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useChat } from '@/modules/chat/hooks/useChat';

export function ChatInput() {
  const [input, setInput] = useState('');
  const { sendMessage, isStreaming } = useChat();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isStreaming) return;

    sendMessage(input);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as FormEvent);
    }
  };

  return (
    <div className="sticky bottom-0 bg-background/50 pb-4 pt-2 backdrop-blur-sm">
      <div className="relative">
        <form onSubmit={handleSubmit} className="flex items-end space-x-2">
          <Textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Send a message..."
            rows={1}
            className="max-h-48 flex-1 resize-none pr-16"
            disabled={isStreaming}
            aria-label="Chat message input"
          />
          <Button
            type="submit"
            size="icon"
            className="absolute bottom-2 right-2 h-9 w-9"
            disabled={!input.trim() || isStreaming}
            aria-label="Send message"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
