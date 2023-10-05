import { LayoutProps } from "../../../.next/types/app/layout";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <main className="h-screen  bg-zinc-900 text-zinc-50 p-4 " >
    {children}
  </main>
}

export default Layout
