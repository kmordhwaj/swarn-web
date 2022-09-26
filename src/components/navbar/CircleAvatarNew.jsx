import React from "react";
import Avatar from "react-avatar";

const CircleAvatarNew = ({ listing, id }) => {
  return (
    <div className="circleAvatarNew">
      <Avatar
        src={listing.profileImageUrl ?? ""}
        avatharBgColor="grey"
        avatharTextColor="white"
        name={`${listing.firstName} ${listing.secondName}`}
        border="1px solid black"
        size="70"
        textSizeRatio={5}
        round={true}
        // imgHeight="20px"
        // imgWidth="10px"
      />
    </div>
  );
};

export default CircleAvatarNew;
