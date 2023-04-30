import React, { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import bggImg from "../assets/images/bgg.jpg";
import Header from "./Header";
import { Button, Form, FormGroup } from "react-bootstrap";
import DatePicker from "react-datepicker";

const Booking = () => {
    const [startDate, setStartDate] = useState(new Date());
  // const {id} = useParams()
  // console.log(id)

  const placeBooking = useLoaderData();
  console.log(placeBooking);
  const { title, id, description, img } = placeBooking;
  return (
    <div
      style={{
        backgroundImage: `url(${bggImg})`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Header />

      <div className="w-75 mx-auto d-flex justify-content-between">
        <div className="w-75 text-white mt-5">
          <h1 className="mb-3 fs-1 fw-bold bg-danger p-2 rounded">{title}</h1>
          <p>{description}</p>
        </div>
        <div className="w-100">
          <Form className="w-75 mx-auto bg-white p-3 mt-4 rounded">
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Origin</Form.Label>
              <Form.Control type="Text" placeholder="Enter Origin" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Destination</Form.Label>
              <Form.Control type="text" placeholder="Enter Destination" />
            </Form.Group>
            <FormGroup className="d-flex mb-3">
                <label htmlFor="">From: </label>
            <DatePicker className="w-75 ms-2" selected={startDate} onChange={(date) => setStartDate(date)} />
            <label htmlFor="">To: </label>
            <DatePicker className="w-75 ms-2" selected={startDate} onChange={(date) => setStartDate(date)} />
            </FormGroup>
           <Link to='/details'> <Button className="w-100" variant="success" type="submit">
              Start Booking
            </Button></Link>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
