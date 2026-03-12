import { Logo } from '@/components/Logo';

export function EmptyChat() {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <Logo className="mb-4 text-2xl" />
      <p className="text-4xl font-semibold text-gray-400">
        How can I help, Nazim?
      </p>
    </div>
  );
}
