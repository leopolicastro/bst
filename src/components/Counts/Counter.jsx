import Button from "../Button/Button";

function Counter({ setCount }) {
  const decreaseCount = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="flex">
      <Button onClick={decreaseCount} text="-" color="primary" />
      <Button onClick={resetCount} text="Reset" color="danger" />
      <Button onClick={increaseCount} text="+" color="success" />
    </div>
  );
}

export default Counter;
