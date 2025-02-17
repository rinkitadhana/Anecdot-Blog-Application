import { format } from "date-fns"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Post = ({ _id, title, summary, cover, createdAt, author }) => {
  const [newTitle, setNewTitle] = useState("")
  const [newSummary, setNewSummary] = useState("")
  useEffect(() => {
    if (title.length > 150) {
      setNewTitle(title.slice(0, 150) + "...")
    } else {
      setNewTitle(title)
    }
    if (summary.length > 425) {
      setNewSummary(summary.slice(0, 425) + "...")
    } else {
      setNewSummary(summary)
    }
  }, [title, summary])

  return (
    <Link to={`/post/${_id}`}>
      <div className="flex md:flex-row flex-col md:gap-4 gap-2 p-2 hover:bg-primary dark:hover:bg-primaryDark  cursor-pointer rounded-md transition-all">
        <div className=" basis-2/5 ">
          <img
            className="image"
            src={`${import.meta.env.VITE_APP_URL}/` + cover}
            alt="blog-img"
            onError={(e) => {
              e.target.src = "https://placehold.co/600x400?text=Image+Not+Found"
            }}
          />
        </div>

        <div className="basis-3/5 flex flex-col gap-0.5">
          <h1 className="text-2xl font-bold ">{newTitle}</h1>
          <div className="flex gap-3 items-center">
            <p className=" font-semibold opacity-80  ">
              {author?.fullName || "Anonymous"}
            </p>
            <time className=" opacity-70 text-sm font-medium">
              {format(new Date(createdAt), "dd MMM, yyy")}
            </time>
          </div>
          <p className=" opacity-80">{newSummary}</p>
        </div>
      </div>
    </Link>
  )
}

export default Post
