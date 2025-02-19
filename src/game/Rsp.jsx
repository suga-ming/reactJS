import { useState } from "react";
import Box from "./components/Box";

const choice = {
  r: {
    name: "Rock",
    img: "https://blog.kakaocdn.net/dn/pSJwo/btqXJV1lACE/nx5XrxkCLWXh9UsnoS8vbK/img.png",
  },
  s: {
    name: "Scissors",
    img: "https://blog.kakaocdn.net/dn/HfURw/btqXKvOTNWK/gWTwPXEg9QzSV0ilOuwuak/img.png",
  },
  p: {
    name: "Paper",
    img: "https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png",
  },
};

const Rsp = () => {
  const [select, setSelect] = useState(null);
  const [computer, setComputer] = useState(null);
  const [result, setResult] = useState(null);

  const play = (userchoice) => {
    setSelect(choice[userchoice]);
    let computerChoice = randomChoice();
    setComputer(computerChoice);
    let myResult = judgement(choice[userchoice], computerChoice);
    setResult(myResult);
  };

  const judgement = (user, computer) => {
    if (user.name == computer.name) {
      return "tie";
    } else if (user.name == "Rock")
      return computer.name == "Scissors" ? "win" : "lose";
    else if (user.name == "Scissors")
      return computer.name == "Paper" ? "win" : "lose";
    else if (user.name == "Paper")
      return computer.name == "Rock" ? "win" : "lose";
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };
  return (
    <div>
      <div className="main">
        <Box title="you" item={select} result={result} />
        <Box title="computer" item={computer} result={result} />
      </div>
      <div className="main">
        <button onClick={() => play("s")}>가위</button>
        <button onClick={() => play("r")}>바위</button>
        <button onClick={() => play("p")}>보</button>
      </div>
    </div>
  );
};

export default Rsp;
