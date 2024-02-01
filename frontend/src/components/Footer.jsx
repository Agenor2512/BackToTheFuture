import "../styles/Footer.css";

function Footer() {
  return <div className="footer_container">
    <footer className="footer">
      <p className="footer_copyright">©BathsGuide</p>
      <ul className="footer_nav">
        <li className="footer_nav_li">
          <p className="footer_nav_links" href="">
            Contact
          </p>
        </li>
        <li className="footer_nav_li">
          <p className="footer_nav_links" href="">
            Mentions Légales
          </p>
        </li>
      </ul>
    </footer>
  </div>
}

export default Footer
