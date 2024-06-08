
const reviews = [];

function ReviewsGallery() {
  return (
    <section className="bg-yellow-500 p-5">
      <div className="flex flex-col items-center  py-5">
        <h3 className="text-2xl font-bold">Reviews</h3>
        <div className=" flex flex-row p-2 gap-2">
          {reviews.map((d)=>{
            return (
              <div key={d.id}className=" flex flex-col bg-yellow-400 p-2" id="review">
                <p>{d.content}</p>
                <span className="flex flex-row gap-1 self-end">
                  <p>- {d.author}</p>
                  <p>{d.rate}</p>
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ReviewsGallery