'use client';
import { usePathname } from 'next/navigation';
import { SidebarProvider, Sidebar, SidebarInset } from '@/components/ui/sidebar';
import { Header } from '@/components/layout/Header';
import { Sidebar as AppSidebar } from '@/components/sidebar/Sidebar';

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const conversationId = pathname.split('/').pop() || null;

  return (
    <SidebarProvider>
      <Sidebar>
        <AppSidebar activeConversationId={conversationId} />
      </Sidebar>
      <SidebarInset className="flex flex-col">
        <Header />
        <main className="flex-1 overflow-hidden">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
