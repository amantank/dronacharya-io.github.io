import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUserAuth } from "../../context/AuthContext";
import { UserSubmissionCard } from "./userSubmissionCard";
import LoginSignUpPopUp from "../../components/PopUps/LoginSignUpPopUp";
import Lottie from "react-lottie";
import notFound from "../../lotties/astwo.json";
import solarsystem from "../../lotties/solarsystem.json";
import "./scroreCard.css";
import space from "../../lotties/space.json";

export const Scorecard = () => {
  const { user, googleSignIn } = useUserAuth();
  const [submissionsData, setSubmitionsData] = useState([]);
  console.log(user);

  useEffect(() => {
    async function fetch() {
      try {
        const res = await axios.get(
          "http://localhost:8800/api/users/getUser/" + user.userData._id
        );
        console.log(res);
        setSubmitionsData(res.data.quizzesSubmitted);
      } catch (err) {
        console.log(err.message);
      }
    }
    return () => {
      fetch();
    };
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: notFound,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const Solarsystem = {
    loop: true,
    autoplay: true,
    animationData: solarsystem,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  
  const Space = {
    loop: true,
    autoplay: true,
    animationData: space,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };



  return (
    <>
      {user ? (
        submissionsData.length > 0 ? (
          <>
          <div className="cards">
            {submissionsData
              ?.map((quiz, i) => {
                return (
                  <>
                    <UserSubmissionCard
                      key={i}
                      quizName={quiz.name}
                      id={quiz.id}
                      runTime={quiz.runTime}
                      startDate={quiz.startDate}
                    />
                  </>
                );
              })
              .reverse()}
          </div>
        </>
        ) : (
          <div id="scoreCard__notFound-parentDiv">
              <div id="scoreCard__notfoundTest-space">
                  <Lottie isClickToPauseDisabled={true}  options={Space} height="100%" width="100%" />
              </div>
              <div id="scoreCard__notfoundTest-solarSystem">
                  <Lottie isClickToPauseDisabled={true}  options={Solarsystem} height="100%" width="100%" />
              </div>
              <div id="scoreCard__notfoundTest-astronaut">
                  <Lottie isClickToPauseDisabled={true}  options={defaultOptions} height={400} width={400} />
              </div>
              <div id="scoreCard__notfoundTest-text-div" >
                <h2 id="scoreCard__notfoundTest-text" >There is so much <span>Space</span> here because you have not attempted any Test yet!</h2>
              </div>
          </div>
        )
      ) : (
        <LoginSignUpPopUp/>
      )}
    </>
  );
};
