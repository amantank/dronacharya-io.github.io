import "./joinQuiz.css";
import React from "react";
import { IoArrowBack } from "react-icons/io5";

const JoinQuiz = (props) => {
  return (
    <>
      <IoArrowBack className="back-icon" onClick={props.function} />
      <div id="question">
        <p>
          this is a
          questionsf,jvhlsdhbvsdbvvdsbkjkkkkkkkjk.,dbfkjbsjvb;slkkv;jsdbvvlkDAkvjbsbdk;vjvbsdvbdvsdjjlsd
          kj
          dddddddddddddddddddddddddddddddddddddsdbvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvkajghjh
          oihwroigh ?.sjbvkja KJDbcADJkvjcbaSLC dklkva l/avaocad ak c dkc
        </p>
      </div>
      <div id="options">
        <div className="option">
          <p>Asmdhvkhsdbvbk.bsdkj/bk/sdv kjbkjgksbkvbvs</p>
        </div>
        <div className="option">
          <p>Bakdfhglisksb;vgiugiug foug foff sfuish/f</p>
        </div>
        <div className="option">
          <p>cSBMBDk. vkjbaDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDbcl</p>
        </div>
        <div className="option">
          <p>Dkrrhgiubskviujbks;9gr owrhhow</p>
        </div>
      </div>
    </>
  );
};

export default JoinQuiz;