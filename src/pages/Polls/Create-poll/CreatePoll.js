import React, { useEffect, useState, useRef } from "react";
import Header from "../../../components/Header/Header.js";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import axios from "axios";
import "./CreatePoll.css";

function CreatePoll() {
  const [options, setOptions] = useState([]);
  const [questionErr, setQuestionErr] = useState(null);
  const [optionErr, setOptionErr] = useState(null);
  const [question, setQuestion] = useState("");
  const [formClosed, setFormClosed] = useState(false);
  const [option, setOption] = useState("");
  const [fileErr, setFileErr] = useState(null);
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);
  const inputRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const handleQuestionChange = (e) => {
    setQuestionErr(null);
    setQuestion(e.target.value);
  };

  const handleOptionChange = (e) => {
    setOption(e.target.value);
    setOptionErr(null);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage && selectedImage.type.includes('image/')) {
      setImage(selectedImage);
      setFileErr(null);
    } else {
      setImage(null);
      setFileErr("Please upload an image!");
    }
  };

  const handleUseQuestion = (e) => {
    e.preventDefault();
    if (question) {
      setFormClosed(true);
    } else {
      setQuestionErr("Enter a question");
    }
  };

  const handleAddOption = (e) => {
    e.preventDefault();
    if (!option) {
      setOptionErr("Enter an option");
      return;
    }

    const updatedOptions = [...options];
    updatedOptions.push({ option, image });
    setOptions(updatedOptions);
    setOption("");

    if (image) {
      const updatedImages = [...images];
      updatedImages.push(image);
      setImages(updatedImages);
      setImage(null);
      inputRef.current.value = null;
    }

    if (updatedOptions.length < 2) {
      setOptionErr("Enter another option");
    }
  };

  const createPoll = async () => {
    const finalOptions = options.map((opt) => {
      if (opt.image) {
        return { text: opt.option, photo: opt.image.name };
      } else {
        return { text: opt.option };
      }
    });

    try {
      const res = await fetch("voteable-backend.onrender.com/v1/create-poll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: question,
          options: finalOptions,
          owner: { name: localStorage.getItem('name'), password: localStorage.getItem('password'), gender: localStorage.getItem('gender') }
        }),
      });

      if (res.ok) {
        navigate("/polls");
      }

      const data = res.data;
      if (data.error === "You have to login / signup to create a poll") {
        setOptionErr("You have to login to create a poll");
      }
    } catch (error) {
      console.error("Error creating poll:", error);
    }
  };

  return (
    <div className="joinOuterContainer">
      <Header />
      <div className="form" style={{ marginTop: "10%" }}>
        <h1 style={{ marginBottom: "5px" }}>Create Poll</h1>
        <h2>{question}</h2>
        {!formClosed ? (
          <form onSubmit={handleUseQuestion}>
            <input
              type="text"
              placeholder="Question"
              className="qInput"
              value={question}
              onChange={handleQuestionChange}
              onBlur={() => {
                if (!question) {
                  setQuestionErr("Enter a question");
                }
              }}
            />
            {questionErr && <p className="passp">{questionErr}</p>}
            <button className="button mt-20">Use question</button>
          </form>
        ) : null}
        {formClosed ? (
          <form onSubmit={handleAddOption}>
            <ol type="1">
              {options.map((option, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginBottom: '15px'
                  }}
                >
                  {option.image && (
                    <img
                      className="optionImg"
                      src={URL.createObjectURL(option.image)}
                      alt="Option Image"
                    />
                  )}
                  <li style={{ marginLeft: '25px' }}>{option.option}</li>
                </div>
              ))}
            </ol>
            <input
              type="text"
              placeholder="Option"
              className="qInput"
              value={option}
              onBlur={() => {
                if (!option && options.length < 2) {
                  setOptionErr("Enter an option");
                }
              }}
              onChange={handleOptionChange}
            />
            <div className='fileUpload'>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Control
                  type="file"
                  onChange={handleImageChange}
                  ref={inputRef}
                  name='my-file'
                />
              </Form.Group>
            </div>
            {optionErr && <p className="passp">{optionErr}</p>}
            {fileErr && <p className="passp">{fileErr}</p>}
            <button className="button mt-20">Add option</button>
          </form>
        ) : null}
        <button
          className="button mt-20"
          onClick={() => {
            if (!question) {
              setQuestionErr("Enter a question");
            }
            if (!option && options.length > 0) {
              setOptionErr("");
            }

            if (options.length < 2) {
              setOptionErr("You need to add more than 1 option");
            }

            createPoll();
          }}
        >
          Create Poll
        </button>
      </div>
    </div>
  );
}

export default CreatePoll;
