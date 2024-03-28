import "./styles.css";

interface cardProps {
    img: string;
    title: string;
    description: string;
    price: string;
}

export function Card({ img, title, description, price }: cardProps) {
    return (
        <div>
            <div className="cardImageContainer">
                <img src={img} alt="greek salad" />
            </div>
            <div className="cardInfo">
                <div className="titleContainer">
                    <strong className="cardTitle">{title}</strong>
                    <p className="priceTag">${price}</p>
                </div>
                <p className="cardDescription">{description}</p>
                <strong>Order a delivery</strong>
            </div>
        </div>
    )
}