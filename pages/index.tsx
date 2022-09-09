import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Basic from '../componants/Basic'
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Home: NextPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [category, setCategory] = useState("");
  const [feedback, setFeedback] = useState("");

  const handlePost = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const contentType = "application/json";

    let ebookreq = {
      userId:"123456789012345",
      name,
      email,
      contact,
      category,
      feedback,
    };
    let response = await fetch("/api/form", {
      method: "POST",
      headers: {
        Accept: contentType,
        "Content-Type": contentType,
      },
      body: JSON.stringify(ebookreq),
    });
    let dataa = await response.json();

    if (dataa.success) {
      // setName("");
      // setEmail("");
      // setContact("");
      // setCategory("");
      // setFeedback("");
      toast.success(dataa.message);
      console.log(dataa.message);
    } else {
      return toast.error(dataa.message);
    }
  };
  return (
    <div className="flex min-h-screen flex-col items-center py-2">
      <Head>
        <title>RIC RKMGEC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <div className='container flex flex-col'>
      <div className="items-center font-semibold pt-6 text-xl">Individual/ Group Information</div>
      
      <Basic/>
      <Basic/>
      <div className="container">
                <h2>
                  Feedback
                </h2>
                <form onSubmit={handlePost} >
                  <input
                    className="form-control"
                    placeholder="Name"
                    type="text"
                    required={true}
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <br />
                  <input
                    className="form-control"
                    placeholder="Email"
                    type="email"
                    required={true}
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <br />
                  <input
                    className="form-control"
                    placeholder="Contact Number"
                    type="number"
                    required={true}
                    name="contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                  <br />

                  <div className="radiogroup">
                    <div className="wrapper">
                      <input className="state" type="radio" required={true} id="x" name="category"
                        value={category}
                        onChange={() => setCategory('suggestion')} />
                      <label className="label" htmlFor="x">
                        <div className="indicator"></div>
                        <span className="text">Suggestion</span>
                      </label>
                      </div>
                      <div className="wrapper">
                        <input className="state" type="radio" required={true} id="y" name="category"
                          value={category}
                          onChange={(e) => setCategory('error')} />
                        <label className="label" htmlFor="y">
                          <div className="indicator"></div>
                          <span className="text">Error</span>
                        </label>
                        </div>
                        <div className="wrapper">
                          <input className="state" type="radio" required={true} id="z" name="category"
                            value={category}
                            onChange={() => setCategory('others')} />
                          <label className="label" htmlFor="z">
                            <div className="indicator"></div>
                            <span className="text">Others</span>
                          </label>
                        </div>
                      </div>



                      <input
                        className="form-control"
                        placeholder="Elaborate your Feddback"
                        type="text"
                        required={true}
                        name="feedback"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                      />
                      <button className="btn" type="submit">
                        Submit Feedback
                      </button>
                      <br />
                    </form>
                  </div>
      </div>
      </div>

      </div>
  )
}

export default Home
