import AnimationLoading from "./Components/AnimationLoading";
import "./index.css";
import Users from "./Pages/Users";
import AnimationUsers from "./Pages/AnimationUsers";

import { Audio, Oval, ThreeDots } from "react-loader-spinner";

const App = () => {
  return (
    <div className="App">
      {/* <Users /> */}
      {/* <AnimationLoading /> */}
      <AnimationUsers />
      <Audio width={100} />
      <Oval width={100} />
      <ThreeDots width={100} />
    </div>
  );
};

export default App;
