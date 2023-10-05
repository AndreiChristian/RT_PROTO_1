import Link from "next/link";

interface Template {
  id: string,
  name: string,
  path: string
}

const templates: Template[] = [
  {
    id: "1",
    name: "Basic Light",
    path: "/templates/1"
  },
  {
    id: "2",
    name: "Basic Dark",
    path: "/templates/2"
  }
]

export default function Templates() {
  return (
    <>
      <h1>Go back home</h1>
      <h2>Templates</h2>
      <ul>
        {templates.map((t) => <li><Link className="text-blue-500" href={t.path} >{t.name}</Link></li>)}
      </ul>
      <Link href={"/"} className="text-blue-500" >Home</Link>
    </>
  )
}
