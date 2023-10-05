
import EditingBar from "@/components/editingBar"
import { EditingContextProvider } from "@/contexts/editingContext"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <EditingContextProvider>
        <EditingBar />
        {children}
      </EditingContextProvider>
    </>
  )
}
