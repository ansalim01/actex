import React from "react";
import EditingInformationUser from "../components/EditingInformationUser";
import dataUsersJson from "../data/users.json";
import dataUsersTypesJson from "../data/usersTypes.json";

import setting from "../svg/gear-settings-svgrepo-com.svg";
import garbage from "../svg/recycling-bin-wit-cover-svgrepo-com.svg";
function UserInfo({ item, setdataUsers }) {
  const [active, setActive] = React.useState(false);
  function searchTypaId(typeId) {
    const rez = dataUsersTypesJson.find((item) => item.id === +typeId);
    return rez.name;
  }
  function toggleChangeUser(e) {
    setActive(!active);
    console.log(JSON.parse(localStorage.getItem("dataUsers")));
    console.log(dataUsersJson);
  }
  function deleteUser(e) {
    let data = JSON.parse(localStorage.getItem("dataUsers"));
    data = data.filter((i) => {
      if (i.id !== item.id) {
        return true;
      }
    });
    localStorage.setItem("dataUsers", JSON.stringify(data));
    setdataUsers(data);
  }
  return (
    <div className="">
      <div className="user">
        <div className="user__info">
          <div className="user__id">
            Уникальный идентификатор пользователя: {item.id}
          </div>
          <div className="user__login">Логин: {item.login}</div>
          <div className="user__password">Пароль: {item.password}</div>
          <div className="user__name">Имя пользователя: {item.name}</div>
          <div className="user__type-id">
            Тип пользователя: {searchTypaId(item.type_id)}
          </div>
          <div className="user__last-visit-date">
            Дата последнего визита: {item.last_visit_date}
          </div>
        </div>
        <div className="user__link">
          <button className="button__img" onClick={toggleChangeUser}>
            <img src={setting} alt="" />
          </button>
          <button className="button__img" onClick={deleteUser}>
            <img src={garbage} alt="" />
          </button>
        </div>
      </div>
      {active ? (
        <EditingInformationUser
          user={item}
          setdataUsers={setdataUsers}
        ></EditingInformationUser>
      ) : (
        ""
      )}
    </div>
  );
}

export default UserInfo;
