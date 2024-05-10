import { Button } from '@/components/ui/button'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello World!</h1>
      <Button onClick={ipcHandle} variant={'outline'}>
        ipc
      </Button>
    </>
  )
}

export default App
