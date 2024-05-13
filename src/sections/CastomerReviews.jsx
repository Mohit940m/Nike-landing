import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"

const CastomerReviews = () => {
  return (
    <section>
      <h3 className="text-4xl font-palanquin font-bold text-center ">What our
        <span className="text-coral-red "> Customers</span> say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center " >
        Hear genuine stories form our satisfied customers about their exceptional expeienes with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 ">
        {reviews.map((review, index) => (
          <ReviewCard 
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ) )}
      </div>
    </section>
  )
}

export default CastomerReviews
