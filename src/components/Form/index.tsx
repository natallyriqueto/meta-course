import { Button } from "../Button";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { FormErrorMessage } from "../FormErrorMessage";
import { fetchAPI, submitAPI } from "@/utils/mockApi.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./styles.css";

export function Form() {
    const [availableTimes, setAvailableTimes] = useState([]);
    const navigate = useNavigate();

    async function handleAvailableTimes(e) {
        const times = await fetchAPI(new Date());
        if (times.length > 0) {
            setAvailableTimes(times);
        }
    }

    const formik = useFormik({
        initialValues: {
          fullname: "",
          phone: "",
          occasion: "birthday",
          diners: 1,
          date: "",
          time: ""
        },
        onSubmit: async values => {
            const response = submitAPI(values);
            if (response) {
                navigate('/reservation-confirmation',
                { state: {
                    date: values.date,
                    time: values.time,
                    diners: values.diners,
                    occasion: values.occasion
                }});
            }
        },
        validationSchema: Yup.object().shape({
            fullname: Yup.string().required("Full name is required"),
            phone: Yup.string().required("Phone number is required"),
            occasion: Yup.string().required("Occasion is required"),
            diners: Yup.string().required("Numbers of diners is required"),
            date: Yup.string().required("Date is required"),
            time: Yup.string().required("Time is required"),
        }),
      });
    
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="inputContainer">
                <label htmlFor="">Full name</label>
                <input
                    id="fullname"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.fullname}
                    placeholder="ex: Marie Johnson"
                    className={formik.errors.fullname && "inputError"}
                />
                <FormErrorMessage message={formik.errors.fullname} />
            </div>
            <div className="inputContainer">
                <label htmlFor="phone">Phone</label>
                <input
                    type="text"
                    id="phone"
                    placeholder="ex: (000) 000-0000"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    className={formik.errors.phone && "inputError"}
                />
                <FormErrorMessage message={formik.errors.phone} />
            </div>
            <div className="inputContainer">
                <label htmlFor="date" className="iconLabel">
                    <span className="fa fa-calendar"></span>
                    Reservation Date
                </label>
                <input
                    type="date"
                    id="date"
                    onChange={(e) => {
                        handleAvailableTimes(e);
                        formik.handleChange(e)
                    }}
                    value={formik.values.date}
                    className={formik.errors.date && "inputError"}
                />
                <FormErrorMessage message={formik.errors.date} />
            </div>
            {availableTimes.length > 0 &&
               <div className="inputContainer">
                    <label htmlFor="time">Reservation Time</label>
                    <select
                        id="time"
                        onChange={formik.handleChange}
                        value={formik.values.time}
                    >
                        {availableTimes.map((item) => {
                            return <option key={item} value={item}>{item}</option>
                        })}
                    </select>
                    <FormErrorMessage message={formik.errors.time} />
                </div>
            }
            <div className="inputContainer">
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    defaultValue="anniversary"
                    onChange={formik.handleChange}
                    value={formik.values.occasion}
                >
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="inputContainer">
                <label className="iconLabel" htmlFor="diners">
                    <span className="fa fa-users"></span>
                    How many diners?
                </label>
                <div className="dinersContainer">
                    <strong>
                        {formik.values.diners}
                        {formik.values.diners > 1 ? " diners" : " diner"}
                    </strong>
                    <input
                        onChange={formik.handleChange}
                        value={formik.values.diners}
                        type="range"
                        id="diners"
                        name="diners"
                        min="1"
                        max="10"
                    />
                </div>
                <FormErrorMessage message={formik.errors.diners} />
            </div>
            <Button text="Confirm Reservation" />
        </form>
    )
}