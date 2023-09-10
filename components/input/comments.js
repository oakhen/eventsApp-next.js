import { useState, useEffect } from "react"

import CommentList from "./comment-list"
import NewComment from "./new-comment"
import classes from "./comments.module.css"

function Comments({ eventId }) {
  const [showComments, setShowComments] = useState(false)
  const [commentList, setCommentList] = useState([])
  // sala sach me mere ko ye samajh nai aa raha hai ki hum list ko update kaise kare
  useEffect(() => {
    fetch(`/api/comments/${eventId}`)
      .then((res) => res.json())
      .then((data) => {
        setCommentList(data.comments)
      })
  }, [eventId])

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus)
  }

  function addCommentHandler(commentData) {
    // send data to API

    fetch(`/api/comments/${eventId}`, {
      method: "POST",
      body: JSON.stringify(commentData),
    })
      .then((res) => res.json())
      .then((data) => {
        fetch(`/api/comments/${eventId}`)
          .then((res) => res.json())
          .then((data) => {
            setCommentList(data.comments)
          })
      })
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments &&
        commentList.length > 0 &&
        commentList.map((comment) => (
          <CommentList comment={comment} key={comment.id} />
        ))}
    </section>
  )
}

export default Comments

/* so what the fuck is that */
