

function ReviewForm() {
  return (
    <div>
        <h4>add review</h4>
        <form action="">
            <label htmlFor="">Author: <input type="text"/></label>
            <label htmlFor="">Comment: <input type="text-area"/></label>
            <button className="btn">submit</button>
        </form>
    </div>
  )
}

export default ReviewForm