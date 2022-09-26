import React from "react";
import Avatar from "react-avatar";

const TestCircleAvatar = () => {
  return (
    <div className="circleAvatarNew">
      <Avatar
        src={`${process.env.PUBLIC_URL}/images/profile_default.png`}
         avatharBgColor="grey"
         avatharTextColor="white"
        name=""
        border="1px solid black"
        size="70"
        textSizeRatio={5}
        round={true}
      />
    </div>
  );
};

export default TestCircleAvatar;
