import { Form } from "@/components/Form";
import "./styles.css";
import { Link } from "react-router-dom";

export function Reservation() {
    return (
        <div className="reservationContainer">
            <div className="reservationTitle">
                <Link to="/">
                    <span className="fa fa-arrow-left"></span>
                </Link>
                <h1>Reserve a table</h1>
            </div>
            <Form />
        </div>
    )
}