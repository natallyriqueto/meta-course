import "./styles.css";

interface ratingProps {
    ratingStars: number;
    name: string;
    picture: string;
    review: string;
}

export function RatingCard({ratingStars, name, picture, review}: ratingProps) {
    return (
        <div className="ratingContent">
            <div className="ratingStars">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
            </div>
            <div className="userInfo">
                <img src={picture} alt="reviewer profile pic" />
                <strong>{name}</strong>
            </div>
            <p>{review}</p>
        </div>
    )
}