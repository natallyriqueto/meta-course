import { RatingCard } from "../RatingCard";
import reviewerPic1 from "@/assets/reviewer-pic1.jpg";
import reviewerPic2 from "@/assets/reviewer-pic2.jpg";
import reviewerPic3 from "@/assets/reviewer-pic3.jpg";
import reviewerPic4 from "@/assets/reviewer-pic4.jpg";
import "./styles.css";

export function Testimonials() {
    const reviews = [
        {
            name: "Marie",
            pic: reviewerPic1,
            review: "Great place!",
            ratingStars: 5
        },
        {
            name: "John",
            pic: reviewerPic2,
            review: "My favorite restaurant ever!",
            ratingStars: 5
        },
        {
            name: "Bob",
            pic: reviewerPic3,
            review: "Delicious food and great price.",
            ratingStars: 5
        },
        {
            name: "Peter",
            pic: reviewerPic4,
            review: "Just love it!",
            ratingStars: 5
        },
    ];

    return (
        <section id="testimonial">
            <div className="testimonialsContent">
                <h2>Testimonials</h2>
                <div className="testimonialsCard">
                    {reviews.map((item) => {
                        return <RatingCard
                            ratingStars={item.ratingStars}
                            name={item.name}
                            picture={item.pic}
                            review={item.review}
                        />
                    })}
                </div>
            </div>
        </section>
    )
}