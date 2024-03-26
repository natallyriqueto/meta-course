import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.tsx";

export function Router() {
    return (
        <Routes> 
            <Route path="/" element={<Home />}></Route>
            {/* <Route path="/booking" element={<BookingPage />}></Route> */}
        </Routes>
    )
}