"use client";

interface PageProps {
  params: {
    pageId: string
  }
}

export default function Page({ params }: PageProps) {

  return <h1>I am just a dummy page and my page id is {params.pageId} </h1>
}

