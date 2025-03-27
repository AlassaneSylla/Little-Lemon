import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import './App.css';

function Reservation() {

    const formik = useFormik({
        initialValues: {
            date: "",
            time: "",
            guests: "",
            occasion: ""
        },
        validationSchema: Yup.object().shape({
            date: Yup.date().required("date required"),
            time: Yup.string().required("time required"),
            guests: Yup.number()
              .min(1, "at least 1 guest")
              .max(20, "maximum 20 guests")
              .required("number of guests required"),
            occasion: Yup.string().required("the occasion required"),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log("Reservation sent :", values);
            resetForm();
        },
    });

    return (
        <section className="form-section">
            <div className='container'>
                <div>
                    <h1>Reservation Form</h1>
                    <p className='lead-text'>Please fill in the form to reserve a table.</p>
                </div>
                <div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='rows'>
                          <label>Date</label>
                          <input
                            type="date"
                            name="date"
                            value={formik.values.date}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          <span className="error-message">
                            {formik.touched.date && formik.errors.date ? formik.errors.date : null}
                          </span>
                        </div>

                        <div className='rows'>
                          <label>Time</label>
                          <select
                            name="time"
                            value={formik.values.time}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          >
                            <option value="">Select a time</option>
                            <option value="18:00">6:00 PM</option>
                            <option value="19:00">7:00 PM</option>
                            <option value="20:00">8:00 PM</option>
                            <option value="21:00">9:00 PM</option>
                            <option value="21:00">10:00 PM</option>
                          </select>
                          <span className='error-message'>
                            {formik.touched.time && formik.errors.time ? formik.errors.time : null}
                          </span>
                        </div>

                        <div className='rows'>
                          <label>Number of guest(s)</label>
                          <input
                            type="number"
                            name="guests"
                            min="1"
                            max="20"
                            value={formik.values.guests}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          <span className='error-message'>
                            {formik.touched.guests && formik.errors.guests ? formik.errors.guests : null}
                          </span>
                        </div>

                        <div className='rows'>
                          <label>Occasion</label>
                          <select
                            name="occasion"
                            value={formik.values.occasion}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          >
                            <option value="">Select an occasion</option>
                            <option value="birsthday">Birsthday</option>
                            <option value="anniversary">Annivarsary</option>
                            <option value="engagement">Engagement</option>
                            <option value="other">Other</option>
                          </select>
                          <span className='error-message'>
                            {formik.touched.occasion && formik.errors.occasion ? formik.errors.occasion : null}
                          </span>
                        </div>

                        <div className='rows'>
                          <button className="cta-reservation" type="submit">Reserve</button>
                        </div>
                </form>
            </div>
            </div>
        </section>
    );
}

export default Reservation;