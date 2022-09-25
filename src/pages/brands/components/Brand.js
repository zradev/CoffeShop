const Brand = (props) => {
  return (
    <>
      <div className="brand">
        <img src={props.img} alt="" />
        <a href={props.href}>
          <button>Website</button>
        </a>
      </div>
    </>
  );
};

export default Brand;
