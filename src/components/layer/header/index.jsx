import './header.css';

function Header(props) {
  const { data } = props;

  return (
    <header className="App-header header-format">
      <div>{data.title}</div>
      <div>{data.content}</div>
    </header>
  )
}

export default Header;