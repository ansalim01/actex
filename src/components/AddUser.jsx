import React from "react";
import useInput from "../hooks/useInput";
import dataUsersJson from "../data/users.json";
import dataUsersTypesJson from "../data/usersTypes.json";
import arrowDown from "../svg/arrow-down-svgrepo-com.svg";
import arrowUp from "../svg/arrow-up-svgrepo-com.svg";

function AddUser({ dataUsers, setdataUsers }) {
  const [active, setActive] = React.useState(false);
  const [error, setError] = React.useState(false);
  const userLoginValue = useInput("");
  const userPassValue = useInput("");
  const userNameValue = useInput("");
  const userTypeValue = useInput("0");
  const userDateValue = useInput("");

  function toggleAddUser(e) {
    setActive(!active);
  }
  function AddDataUser(e) {
    e.preventDefault();
    setError(false);
    if (
      userLoginValue.value === "" ||
      userPassValue.value === "" ||
      userNameValue.value === "" ||
      userTypeValue.value === "0" ||
      userDateValue.value === ""
    ) {
      setError(true);
      console.log(true);
      return;
    }
    const newUser = {
      id: dataUsers[dataUsers.length - 1].id + 1,
      login: userLoginValue.value,
      password: userPassValue.value,
      name: userNameValue.value,
      type_id: userTypeValue.value,
      last_visit_date: userDateValue.value,
    };

    localStorage.setItem("dataUsers", JSON.stringify([...dataUsers, newUser]));
    setdataUsers([...dataUsers, newUser]);

    userLoginValue.setValue("");
    userPassValue.setValue("");
    userNameValue.setValue("");
    userTypeValue.setValue("0");
    userDateValue.setValue("");
  }
  return (
    <div>
      <button className="button__img" onClick={toggleAddUser}>
        Новый пользователь
        <img src={active ? arrowUp : arrowDown} alt="" />
      </button>
      {active ? (
        <form className="addForm">
          <label>
            Login:
            <input
              onChange={userLoginValue.onChange}
              value={userLoginValue.value}
              placeholder="Логин пользователя"
              type="text"
            />
          </label>
          <label>
            Password:
            <input
              onChange={userPassValue.onChange}
              value={userPassValue.value}
              placeholder="Парол пользователя"
              type="text"
            />
          </label>
          <label>
            Name:
            <input
              onChange={userNameValue.onChange}
              value={userNameValue.value}
              placeholder="Имя пользователя"
              type="text"
            />
          </label>
          <label>
            Type:
            <select
              name="select"
              size="1"
              onChange={userTypeValue.onChange}
              value={userTypeValue.value}
            >
              <option value="0">Все</option>
              {dataUsersTypesJson.map((item, index) => (
                <option value={item.id} key={item.id + "-" + index}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Last visit date:
            <input
              onChange={userDateValue.onChange}
              value={userDateValue.value}
              placeholder="Дата пользователя"
              type="date"
            />
          </label>
          <button
            className={error ? "button__text button__error" : "button__text"}
            onClick={AddDataUser}
          >
            {/* error */}
            Добавить пользователя
          </button>
          {error ? (
            <div className="text__error"> * все поля должны быть заполнены</div>
          ) : (
            ""
          )}
        </form>
      ) : (
        ""
      )}
    </div>
  );
}

export default AddUser;
