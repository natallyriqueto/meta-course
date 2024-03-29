import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Reservation } from "./pages/Reservation";
import { DefaultLayout } from "./layout/DefaultLayout";
import { ReservationConfirmation } from "./pages/ReservationConfirmation";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/reservation" element={<Reservation />} />
                <Route path="/reservation-confirmation" element={<ReservationConfirmation />} />
            </Route>
        </Routes>
    )
}