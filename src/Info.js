import React from "react";
import useInputs from "./useInputs";

const Info = () => {
  const [state, onChange] = useInputs({ name: "", nickname: "" });
  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input type="text" name="name" value={name} onChange={onChange} />
        <input
          type="text"
          name="nickname"
          value={nickname}
          onChange={onChange}
        />
      </div>
      <div>
        <div>
          <b>이름: </b> {name}
        </div>
        <div>닉네임: {nickname}</div>
      </div>
    </div>
  );
};

export default Info;
