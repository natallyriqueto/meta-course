import { CalendarBlank, CheckCircle, UsersThree, Wine } from "phosphor-react";
import { Button } from "@/components/Button";
import "./styles.css";
import { Link, useLocation } from 'react-router-dom';

export function ReservationConfirmation() {
    const location = useLocation();
    const { date, time, diners, occasion } = location.state;

    return (
        <div className="confirmationContainer">
            <CheckCircle size={42} color="green" />
            <h1>Reservation confirmed</h1>
            <div className="reservationInfo">
                <div>
                    <CalendarBlank size={25} color="#EE9972" />
                    <p>{date} - {time}</p>
                </div>
                <div>
                    <UsersThree size={25} color="#EE9972" />
                    <p>{diners} diners</p>
                </div>
                <div>
                    <Wine size={25} color="#EE9972" />
                    <p>{occasion}</p>
                </div>
            </div>
            <Link to="/">
                <Button text="Go back home" />
            </Link>
        </div>
    )
}