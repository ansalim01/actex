import React from "react";
import useInput from "../hooks/useInput";
import dataUsersTypesJson from "../data/usersTypes.json";

function EditingInformationUser({ user, setdataUsers }) {
  const userLoginValue = useInput(user.login);
  const userPassValue = useInput(user.password);
  const userNameValue = useInput(user.name);
  const userTypeValue = useInput(user.type_id);
  const userDateValue = useInput(user.last_visit_date.slice(0, 10));
  //   user.last_visit_date
  function changeUser(e) {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem("dataUsers")));
    const data = JSON.parse(localStorage.getItem("dataUsers"));
    console.log(user);
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === user.id) {
        console.log(true);

        data[i].login = userLoginValue.value;
        data[i].password = userPassValue.value;
        data[i].name = userNameValue.value;
        data[i].type_id = +userTypeValue.value;
        data[i].last_visit_date = userDateValue.value;
      }
    }
    localStorage.setItem("dataUsers", JSON.stringify(data));
    setdataUsers(data);
    console.log(JSON.parse(localStorage.getItem("dataUsers")));
  }
  return (
    <div className="">
      <form>
        <input
          onChange={userLoginValue.onChange}
          value={userLoginValue.value}
          placeholder="Поиск по Логину пользователя"
          type="text"
        />

        <input
          onChange={userPassValue.onChange}
          value={userPassValue.value}
          placeholder="Поиск по Паролю пользователя"
          type="text"
        />
        <input
          onChange={userNameValue.onChange}
          value={userNameValue.value}
          placeholder="Поиск по имени пользователя"
          type="text"
        />
        <select
          name="select"
          size="1"
          onChange={userTypeValue.onChange}
          value={userTypeValue.value}
        >
          {dataUsersTypesJson.map((item, index) => (
            <option value={item.id} key={item.id + "-" + index}>
              {item.name}
            </option>
          ))}
        </select>
        <input
          onChange={userDateValue.onChange}
          value={userDateValue.value}
          placeholder="Поиск по Дата пользователя"
          type="date"
        />
        <button className="button__text" onClick={changeUser}>
          Изменить
        </button>
      </form>
    </div>
  );
}

export default EditingInformationUser;
