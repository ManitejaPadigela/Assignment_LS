import React, { useContext } from "react";

import Card from "../../shared/components/UIElements/Card";
import { AuthContext } from "../../shared/context/auth-context";
import "./UserItem.css";

const UserItem = (props) => {
  const auth = useContext(AuthContext);
  let classNew = "";
  if (auth.userId === props.id) {
    classNew = "user-item_logged";
  }
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <div className="user-item__info">
          <h2 className={classNew}>{props.name}</h2>
        </div>
      </Card>
    </li>
  );
};

export default UserItem;
