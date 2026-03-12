
'use client';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ConversationList } from './ConversationList';
import { AppWindow, Code, Compass, Folder, Image as ImageIcon, Search, Telescope, Bot, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useChat } from '@/modules/chat/hooks/useChat';
import { useRouter } from 'next/navigation';

interface SidebarProps {
  activeConversationId: string | null;
}

export function Sidebar({ activeConversationId }: SidebarProps) {
  const router = useRouter();
  const { createNewConversation } = useChat();

  const handleNewChat = async () => {
    const newConversationId = await createNewConversation();
    router.push(`/chat/${newConversationId}`);
  };

  return (
    <div className="flex h-full flex-col bg-sidebar text-sidebar-foreground pt-4">
      <div className="p-2">
        <nav className="flex flex-col gap-1">
            <Button variant="ghost" onClick={handleNewChat} className="w-full justify-start gap-2">
                <Edit className="h-5 w-5" />
                <span>New chat</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
                <Search className="h-5 w-5" />
                <span>Search chats</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
                <ImageIcon className="h-5 w-5" />
                <span>Images</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
                <AppWindow className="h-5 w-5" />
                <span>Apps</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
                <Telescope className="h-5 w-5" />
                <span>Deep research</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
                <Code className="h-5 w-5" />
                <span>Codex</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
                <Folder className="h-5 w-5" />
                <span>Projects</span>
            </Button>
        </nav>
      </div>
      <ScrollArea className="flex-1 px-2">
        <div className="mt-4">
            <h3 className="px-2 text-xs font-semibold text-muted-foreground tracking-wider uppercase">GPTs</h3>
            <nav className="flex flex-col gap-1 mt-2">
                <Button variant="ghost" className="w-full justify-start gap-2">
                    <Bot className="h-5 w-5" />
                    <span>Data Analyst</span>
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                    <Compass className="h-5 w-5" />
                    <span>Explore GPTs</span>
                </Button>
            </nav>
        </div>
        <div className="mt-4">
            <h3 className="px-2 text-xs font-semibold text-muted-foreground tracking-wider uppercase">Your chats</h3>
            <ConversationList activeConversationId={activeConversationId} />
        </div>
      </ScrollArea>
      <div className="border-t border-sidebar-border p-2">
         <Button variant="ghost" className="w-full justify-start gap-2">
            <div className="h-8 w-8 rounded-full bg-gray-500 flex items-center justify-center text-primary-foreground font-semibold">SN</div>
            <div className='flex flex-col items-start'>
              <span className='font-semibold'>Sk Abdul Nazim</span>
              <span className='text-xs text-muted-foreground'>Free</span>
            </div>
        </Button>
        <Button variant="outline" className="w-full mt-2">Claim offer</Button>
      </div>
    </div>
  );
}
