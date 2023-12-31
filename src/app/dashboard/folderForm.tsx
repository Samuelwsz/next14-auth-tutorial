export default function FolderForm() {
  return (
    <form action={createForm} className="mb-4 w-full flex gap-x-2 items-center">
      <div className="grow">
        <label
          htmlFor="name"
          aria-label="New Folder"
          className="text-gray-300 text-sm font-bold mb-2 hidden"
        >
          New Name
        </label>
        <input type="text" name="name" id=""/>
      </div>
    </form>
  )
}
