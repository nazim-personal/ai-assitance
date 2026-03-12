import { Logo } from '@/components/Logo';

export function EmptyChat() {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <Logo className="mb-4 text-2xl" />
      <p className="text-muted-foreground">
        Start a new conversation or select one from the sidebar.
      </p>
    </div>
  );
}
