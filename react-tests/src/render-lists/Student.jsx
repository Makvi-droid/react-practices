function Student() {
  const users = [
    { id: 1, name: "Alice", age: 22 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 25 },
  ];

  let userList = users.map((user) => (
    <li key={user.id}>
      id: {user.id} name: {user.name} age: {user.age}
    </li>
  ));

  return (
    <>
      <ul>{userList}</ul>
    </>
  );
}

export default Student;
