import Chat from './chat'
import ThemeSwitch from '@/components/ThemeSwitch'

export default function Page() {
  return (
    <main className="flex flex-col w-full h-screen max-h-dvh bg-background">
      <header className="p-4 border-b w-full max-w-3xl mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">AI Assist</h1>
        <ThemeSwitch />
      </header>

      <Chat />
    </main>
  )
}
