function Header(props) {
  return (
    <>
      <h1 className="font-medium text-3xl">Hello {props.data}!</h1>
      <p>I help you manage your activities :)</p>
    </>
  );
}

export default Header;
