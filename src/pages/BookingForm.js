import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import '../App.css';


function BookingForm({ availableTimes, updateTimes }) {
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
                <h1>Book Now</h1>
                <p className='lead-text'>Please fill in the form to reserve a table.</p>
            </div>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <div className='rows'>
                      <label>Choose date</label>
                      <input
                        type="date"
                        name="date"
                        value={formik.values.date}
                        onChange={ (e) => {
                          formik.handleChange(e);
                          updateTimes(e.target.value); //to change the time of the day when the date change
                        }}
                        onBlur={formik.handleBlur}
                      />
                      <span className="error-message">
                        {formik.touched.date && formik.errors.date ? formik.errors.date : null}
                      </span>
                    </div>
                    <div className='rows'>
                      <label>Choose time</label>
                      <select
                        name="time"
                        value={formik.values.time}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      >
                        <option value="" disabled>-- : --</option>
                          {availableTimes.map((time, index) => (
                              <option key={index} value={time}>{time}</option>
                          ))}
                      </select>
                      <span className='error-message'>
                        {formik.touched.time && formik.errors.time ? formik.errors.time : null}
                      </span>
                    </div>
                    <div className='rows'>
                      <label>Number of guests</label>
                      <input
                        type="number"
                        name="guests"
                        min="1"
                        max="20"
                        placeholder="1"
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
                      <button className="cta-reservation" type="submit">Make Your reservation</button>
                    </div>
            </form>
        </div>
        </div>
    </section>
  );
}

export default BookingForm;