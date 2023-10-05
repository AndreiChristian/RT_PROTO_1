
import Provider from "@/contexts/Provider"
import { EditingContextProvider } from "@/contexts/editingContext"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Provider>
        <h1>Hello</h1>
        {children}
      </Provider>
    </>
  )
}
