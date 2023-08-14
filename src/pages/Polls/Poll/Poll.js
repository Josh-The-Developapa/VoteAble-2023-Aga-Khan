import React, { useState, useEffect } from "react";
import Header from "../../../components/Header/Header.js";
import { useParams, useNavigate } from "react-router-dom";
import { CircularProgress } from '@mui/material';
import "./Poll.css";
function Poll(props) {
  const { pollId } = useParams();
  const navigate = useNavigate();
  const [pollNotFound, setPollNotFound] = useState();
  const [question, setQuestion] = useState();
  const [options, setOptions] = useState();
  const [option, setOption] = useState({});
  const [signupFirstErr, setSignupFirstErr] = useState();
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    async function poll() {
      setIsLoading(true);
      const res = await fetch(`http://localhost:8000/v1/poll/${ pollId }`, {
        method: "GET",
      });
      setIsLoading(false);
      const data = await res.json();
      if (data.error) {
        setPollNotFound("Poll not found, ID is incorrect");
      } else {
        setQuestion(data.data.question);
        setOptions(data.data.options);
      }
      console.log(data);
    }
    poll();
  }, [pollId]);

  async function vote() {
    const optiontext = option.text;
    const res = await fetch(`http://localhost:8000/v1/vote/${ pollId }`, {
      method: "POST",
      body: JSON.stringify({
        answer: optiontext,
        user: {
          name: localStorage.getItem('name') ? localStorage.getItem('name') : null,
          password: localStorage.getItem('password') ? localStorage.getItem('password') : null,
          gender: localStorage.getItem('gender') ? localStorage.getItem('gender') : null
        }
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(optiontext, option);

    const data = await res.json();
    if (res.ok) {
      setSignupFirstErr("Voted");
    }
    if (data.error === "Login First to access polls") {
      console.log(data);
      setSignupFirstErr("You have to login first");
    }
    if (data.error === "Already voted") {
      console.log(data);
      setSignupFirstErr("Already voted");
    }

    if (data.error === "Please choose an option") {
      console.log(data);
      setSignupFirstErr("Please choose an option");
    }
  }
  return (
    <div className="joinOuterContainer">
      <Header />
      {isLoading ? (
        <CircularProgress
          style={{
            color: "white",
            // position: "absolute",
            // top: "20%",
            // left: "40%",
          }}
        />
      ) : (
        <div className="pollC" style={{ marginTop: "10%" }}>
          <h2>{pollNotFound ? pollNotFound : question}</h2>
          {signupFirstErr === "Voted" ? (
            <h2
              style={{
                marginTop: "-10px",
                marginBottom: "20px",
                color: "#4600b6",
              }}
            >
              Voted
            </h2>
          ) : (
            <p className="passp" style={{ marginBottom: "10px" }}>
              {signupFirstErr}
            </p>
          )}
          <div className="options">
            {options
              ? options.map((option) => {
                return (
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', padding: '5px', borderBottom: '2px black solid', marginBottom: '12px' }}>
                    {option.photo ? <img src={`http://localhost:8000/uploads/${ option.photo }`} className='optionImg' /> : ''}
                    <input
                      style={{ accentColor: '#4600b6', cursor: 'pointer' }}
                      className="option"
                      type="radio"
                      value={option.text}
                      name="option"
                      onClick={() => {
                        setOption(option);
                      }}
                    />
                    <p>{option.text}</p>
                    <br></br>
                    <br></br>
                  </div>
                );
              })
              : ""}
          </div>
          {pollNotFound ? (
            ""
          ) : (
            <button className={"vBTN"} onClick={vote}>
              <p>Vote</p>
            </button>
          )}

          {!pollNotFound ? (
            <button
              className={"vBTN"}
              onClick={() => {
                navigate(`/poll/results/${ pollId }`);
              }}
            >
              <p>Results</p>
            </button>
          ) : (
            ""
          )}
        </div>
      )}

    </div>
  );
}

export default Poll;
