import React from "react";
import AddUser from "../components/AddUser";
import EditingInformationUser from "../components/EditingInformationUser";
import UserInfo from "../components/UserInfo";
import dataUsersJson from "../data/users.json";
import dataUsersTypesJson from "../data/usersTypes.json";
import useInput from "../hooks/useInput";
import setting from "../svg/gear-settings-svgrepo-com.svg";

function UsersAdm() {
  const [dataUsers, setdataUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const userIdValue = useInput("");
  const userLoginValue = useInput("");
  const userPassValue = useInput("");
  const userNameValue = useInput("");
  const userTypeValue = useInput("0");
  const userDateValue = useInput("");
  async function filterUsers(e) {
    e.preventDefault();
    let rez = JSON.parse(localStorage.getItem("dataUsers"));
    if (userIdValue.value !== "") {
      rez = rez.filter((item) =>
        String(item.id).includes(userIdValue.value, 0)
      );
    }
    if (userLoginValue.value !== "") {
      rez = rez.filter((item) =>
        item.login.toLowerCase().includes(userLoginValue.value.toLowerCase(), 0)
      );
    }
    if (userPassValue.value !== "") {
      rez = rez.filter((item) =>
        item.password
          .toLowerCase()
          .includes(userPassValue.value.toLowerCase(), 0)
      );
    }
    if (userNameValue.value !== "") {
      rez = rez.filter((item) =>
        item.name.toLowerCase().includes(userNameValue.value.toLowerCase(), 0)
      );
    }
    if (userTypeValue.value !== "0") {
      rez = rez.filter((item) => item.type_id === +userTypeValue.value);
    }
    if (userDateValue.value !== "") {
      rez = rez.filter((item) =>
        item.last_visit_date
          .toLowerCase()
          .includes(userDateValue.value.toLowerCase(), 0)
      );
    }
    setLoading(false);
    setTimeout(() => {
      setdataUsers(rez);
      setLoading(true);
    }, 5000);
  }
  function clearUsers(e) {
    e.preventDefault();
    userIdValue.setValue("");
    userLoginValue.setValue("");
    userPassValue.setValue("");
    userNameValue.setValue("");
    userTypeValue.setValue("0");
    userDateValue.setValue("");
  }
  React.useEffect(() => {
    if (localStorage.getItem("dataUsers") === null) {
      localStorage.setItem("dataUsers", JSON.stringify(dataUsersJson));
    }
    setdataUsers(JSON.parse(localStorage.getItem("dataUsers")));
    setLoading(true);
  }, []);

  return (
    <div>
      <h2>Фильтер</h2>
      <form className="filter">
        <input
          onChange={userIdValue.onChange}
          value={userIdValue.value}
          placeholder="Поиск по id пользователя"
          type="text"
        />
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
          <option value="0">Все</option>
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
        <button className="button__text" onClick={filterUsers}>
          Поиск
        </button>
        <button className="button__text" onClick={clearUsers}>
          Очистить
        </button>
      </form>
      <AddUser dataUsers={dataUsers} setdataUsers={setdataUsers}></AddUser>
      <h2>Users</h2>

      {loading ? (
        dataUsers.map((item, index) => {
          return (
            <UserInfo
              item={item}
              key={index + "-" + item.login}
              setdataUsers={setdataUsers}
            ></UserInfo>
          );
        })
      ) : (
        <div className="load-wrapp">
          <div className="load-4">
            <p>Loading</p>
            <div className="ring-1"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UsersAdm;
