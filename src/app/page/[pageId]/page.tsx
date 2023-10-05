import PageComponent from "@/components/pageComponent"

interface PageProps {
  params: {
    pageId: string
  }
}

export default function Page({ params }: PageProps) {

  return (
    <>
      <PageComponent pageId={params.pageId} />
    </>
  )
}

