export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
    console.log('data', params)
  const { id } = await params
  return <div>My Post: {id}</div>
}