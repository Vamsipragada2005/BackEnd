import './App.css';
import axios from 'axios';

function App() {

  const fetchData = () => {
    axios.get("http://localhost:1234/getStudents")
      .then((result) => console.log(result.stdData))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1>This is from frontend</h1>
      <button onClick={fetchData}>Fetch Data</button>
    </>
  );
};

export default App;