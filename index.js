const Box = (props) => {
  //  Write your code here.
  const { name, className } = props;
  return (
    <div className={className}>
      <p>{name}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div>
    <h1 className="heading">Boxes</h1>
    <div className="bg-color">
      <Box name="Small" className="small" />
      <Box name="Medium" className="medium" />
      <Box name="Large" className="large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
