import { getXataClient } from "@/xata"

export default async function DashboardPage() {
  const xataClient = getXataClient()
  const folders = await xataClient.db.folders.getMany()
  return (
    <div>
      <h1>dashboard page</h1>
      {folders.map((folder) => {
        return <p key={folder.id}>{folder.name}</p>
      })}
    </div>
  )
}
