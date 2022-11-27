import { useEffect, useState } from "react";
import AnimationLoading from "../Components/AnimationLoading";

const Users = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  return (
    <div className="App">
      <div className="data-container">
        <div className="data">
          {isLoading ? (
            <AnimationLoading />
          ) : (
            <div className="data-content">Some Data</div>
          )}
        </div>
      </div>
      {/* <button onClick={handleFetch} disabled={isLoading}>
        Fetch Users
      </button> */}
    </div>
  );
};

export default Users;
