import { useState } from "react";

const CommentBox = () => {

    const [commentText, setCommentText] = useState("");
    const [comments, setComments] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (commentText) {

            const newComment = {
                id: comments.length,
                text: commentText,
                likes: 0,
                deslikes: 0,
                replies: []
            }

            setComments([...comments, newComment]);
            setCommentText("");
        }
    }

    return <>
        <section className="comment_box_container">
            <h1>Comment Box</h1>

            <form onSubmit={handleSubmit}>
                <textarea
                    placeholder="Write something..."
                    required
                    onChange={(e) => setCommentText(e.target.value)}
                />
                <button type="submit">SUBMIT</button>
            </form>

            <div className="comments">
                {
                    comments.map((comment) => {
                        return <p key={comment.id}>{comment.text}</p>
                    })
                }
            </div>

        </section>
    </>
}

export default CommentBox;