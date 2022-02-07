import NavBar from "./Navbar";
import SocialLinks from "./SocialLinks";

export default function Header({ title, town, name }) {
  return (
    <>
      <header id="header">
        <div className="container">
          <h1>
            <a href="index.html">{name}</a>
          </h1>
          <h2>
            I'm a passionate <span>{title}</span> from {town}
          </h2>
          <NavBar />
          <SocialLinks />
        </div>
      </header>
    </>
  );
}
