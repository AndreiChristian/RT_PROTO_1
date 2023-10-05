'use client'
import DemoComponent from "@/components/demoComponent"

interface PageProps {
  params: {
    templateId: string
  }
}

export default function Page({ params }: PageProps) {

  const { templateId } = params

  return (
    <section>
      <h1>TemplateId is {templateId}</h1>
      <DemoComponent />
    </section>
  )
}
