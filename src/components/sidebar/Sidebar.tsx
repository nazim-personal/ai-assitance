import { ScrollArea } from '@/components/ui/scroll-area';
import { NewChatButton } from './NewChatButton';
import { ConversationList } from './ConversationList';
import { Logo } from '@/components/Logo';

interface SidebarProps {
  activeConversationId: string | null;
}

export function Sidebar({ activeConversationId }: SidebarProps) {
  return (
    <div className="flex h-full flex-col bg-sidebar text-sidebar-foreground">
       <div className="flex h-16 items-center border-b border-sidebar-border px-4">
        <Logo className="hidden md:flex" />
      </div>
      <div className="p-2">
        <NewChatButton />
      </div>
      <ScrollArea className="flex-1">
        <ConversationList activeConversationId={activeConversationId} />
      </ScrollArea>
      <div className="border-t border-sidebar-border p-4">
        {/* User profile / settings can go here */}
      </div>
    </div>
  );
}
