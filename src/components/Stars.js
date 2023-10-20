

const Stars = (props) => {
  const { stars } = props;
  let starsArr = [];
  for (let i = 1; i <= 5; i++) {
    starsArr.push([i, stars[i - 1]]);
  }
  return (
    <div className="stars">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      {starsArr.map((elem) => (
        <span
          key={elem[0]}
          className={`fa fa-star ${elem[1] ? "active" : ""}`}
        ></span>
      ))}
    </div>
  );
};

export default Stars;