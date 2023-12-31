"use client"

import { useRef } from "react"

export default function FolderForm({
  handleCreateFolder,
}: {
  handleCreateFolder: (formData: FormData) => void
}) {
  const ref = useRef<HTMLFormElement>(null)

  return (
    <form
      action={(formData) => {
        handleCreateFolder(formData)
        ref.current?.reset()
      }}
      ref={ref}
      className="mb-4 w-full flex gap-x-2 items-center"
    >
      <div className="grow">
        <label
          htmlFor="name"
          aria-label="New Folder"
          className="text-gray-300 text-sm font-bold mb-2 hidden"
        >
          New Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="my folder"
          className="shadow appearance-none border-2 border-gray-700 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none"
        />
      </div>
      <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-32">
        Submit
      </button>
    </form>
  )
}
