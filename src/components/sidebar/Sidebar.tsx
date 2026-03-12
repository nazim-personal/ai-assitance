import { ScrollArea } from '@/components/ui/scroll-area';
import { ConversationList } from './ConversationList';
import { Logo } from '@/components/Logo';
import { AppWindow, Code, Compass, Folder, Image as ImageIcon, Search, Telescope, Bot, User, Edit } from 'lucide-react';
import { Input } from '@/components/ui/input';
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
    <div className="flex h-full flex-col bg-sidebar text-sidebar-foreground">
       <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-2">
        <Logo className="hidden md:flex" showText={false}/>
        <Button variant="ghost" onClick={handleNewChat} className="flex-1 justify-start ml-2 text-base">New Chat</Button>
        <Button variant="ghost" size="icon"><Edit className="h-5 w-5"/></Button>
      </div>
      <div className="p-2">
        <div className="relative mb-2">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search chats" className="w-full rounded-lg bg-input pl-8" />
        </div>
        <nav className="flex flex-col gap-1">
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
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">N</div>
            <span>Nazim</span>
        </Button>
      </div>
    </div>
  );
}
