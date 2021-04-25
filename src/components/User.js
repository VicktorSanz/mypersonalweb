
const User = (props) => {
  return (
    <>
      <header className="App-header">
        <p>
          USER...............
          <button onClick={() => props.history.push('/')}>HOME</button>
        </p>
      </header>
    </>
  );
}

export default User;