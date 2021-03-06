// CSS
import { useState, useRef, useEffect } from "react";
import UserList from "./UserList";
import "./App.css";
import CreateUser from "./CreateUser";

export default function App() {
  // 1. 초기값에 이용하던 기존 더미데이터를 삭제
  const [users, setUsers] = useState([]);

  // 2. 기존 users state를 API 호출 값으로 변경
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        json.forEach((item) => {
          item.no = item.id;
        });
        json.forEach((item) => {
          item.id = item.username;
        });
        setUsers(json);
      });
  }, []);

  const [inputs, setInputs] = useState({
    id: "",
    email: "",
  });
  const { id, email } = inputs;

  const onChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onCreate = () => {
    const user = {
      no: nextNo.current,
      id,
      email,
    };
    setUsers([user, ...users]);
    nextNo.current += 1;
  };

  const onRemove = (no) => {
    setUsers(
      users.filter((item) => {
        return item.no !== no;
      })
    );
  };

  // 4. KEY 수정
  const nextNo = useRef(0);
  nextNo.current = users.length + 1;
  // * useRef에 있는 current를 쓰는 이유:
  // current를 쓰지 않으면, 컴포넌트 렌더링 할때마다 nextNo가 0으로 초기화되기 때문에, current를 써서 유지시킨다.
  // 이런 이유로 원래 useRef에는 current가 포함되어 있음

  return (
    <>
      <CreateUser
        id={id}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} />
    </>
  );
}
