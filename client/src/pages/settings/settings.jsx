import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useUserAuth } from "../../context/AuthContext.js";
import { useNavigate } from "react-router-dom";

export const Settings = () => {
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: undefined,
    username: undefined,
    _id: 0,
  });

  async function deleteAccount() {
    user.userData.quizzesCreated.filter(async (quiz) => {
      await axios.delete(
        "http://localhost:8800/api/quizzes/deleteQuiz/" + quiz.id
      );
    });
    await axios.delete(
      "http://localhost:8800/api/users/deleteUser/" + user.userData._id
    );
    logOut();
    navigate("../");
  }

  useEffect(() => {
    async function Fetch() {
      setLoading(true);
      try {
        const res = await axios.get(
          "http://localhost:8800/api/users/getUser/" + user.userData._id
        );
        console.log(res);
        setData(res.data);
      } catch (err) {
        setData(err);
      }
      setLoading(false);
    }

    return () => {
      Fetch();
    };
  }, []);

  return (
    <>
      <div id="abc">
        {loading ? (
          <p>loading</p>
        ) : (
          <>
            <img src={user.photoURL} alt="profile" id="profileImage" />
            <p>{user.displayName}</p>
            <p>{data.email}</p>
            <button
              onClick={() => {
                deleteAccount();
              }}
            >
              Delete Account
            </button>
          </>
        )}
      </div>
    </>
  );
};
