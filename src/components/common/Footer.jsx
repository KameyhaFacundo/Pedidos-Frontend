import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-light py-4 text-center bg-color">
      <div className="d-flex row mt-4">
        <section className="col-12 col-lg-4 col-sm-12 mb-4 mt-4">
          <img
            className="w-50"
            src="https://res.cloudinary.com/dgzimgpia/image/upload/v1695305076/logo3_lm4xzi.png"
            alt="logo"
            onError={(e) => {
              e.target.src = "https://i.stack.imgur.com/lnYep.png";
            }}
          />
        </section>
        <section className="col-12 col-lg-4 col-sm-6 mb-4 mt-4">
          <article className="d-flex justify-content-center">
            <ul className="list-inline d-flex flex-wrap justify-content-center">
              <li className="nav-item social-logo mx-2">
                <Link className="nav-link mx-2" to={"/*"}>
                  <img
                    src="https://www.instant-gaming.com/themes/igv2/images/icons/socials/icon-igr.svg"
                    alt="instagram-logo"
                    onError={(e) => {
                      e.target.src = "https://i.stack.imgur.com/lnYep.png";
                    }}
                  />
                </Link>
              </li>
              <li className="nav-item social-logo mx-2">
                <Link className="nav-link mx-2" to={"/*"}>
                  <img
                    src="https://www.instant-gaming.com/themes/igv2/images/icons/socials/icon-fb.svg"
                    alt="facebook-logo"
                    onError={(e) => {
                      e.target.src = "https://i.stack.imgur.com/lnYep.png";
                    }}
                  />
                </Link>
              </li>
              <li className="nav-item social-logo mx-2">
                <Link className="nav-link mx-2" to={"/*"}>
                  <img
                    src="https://www.instant-gaming.com/themes/igv2/images/icons/socials/icon-yt.svg"
                    alt="youtube-logo"
                    onError={(e) => {
                      e.target.src = "https://i.stack.imgur.com/lnYep.png";
                    }}
                  />
                </Link>
              </li>
            </ul>
          </article>
          <article className="d-flex justify-content-center">
            <ul className="list-inline">
              <li className="my-4">
                <Link to={"/*"}>
                  <img
                    className="img-download"
                    src="https://gaming-cdn.com/themes/igv2/modules/footer/images/apple.svg"
                    alt="apple-download"
                    onError={(e) => {
                      e.target.src = "https://i.stack.imgur.com/lnYep.png";
                    }}
                  />
                </Link>
              </li>
              <li className="my-4">
                <Link to={"/*"}>
                  <img
                    className="img-download"
                    src="https://gaming-cdn.com/themes/igv2/modules/footer/images/android.svg"
                    alt="playstore-download"
                    onError={(e) => {
                      e.target.src = "https://i.stack.imgur.com/lnYep.png";
                    }}
                  />
                </Link>
              </li>
            </ul>
          </article>
        </section>
        <section className="col-12 col-lg-4 col-sm-6 mt-4">
          <ul className="navbar-nav">
            <li className="nav-item">
              <p>
                <Link className="nav-link" to={"/*"}>
                  Terminos y Condiciones
                </Link>
              </p>
            </li>
            <li className="nav-item">
              <p>
                <Link className="nav-link" to={"/*"}>
                  Politica y Privacidad
                </Link>
              </p>
            </li>
            <li className="nav-item">
              <p>
                <Link className="nav-link" to={"/*"}>
                  +54 381-679456
                </Link>
              </p>
            </li>
          </ul>
        </section>
      </div>
      <div>
        <p>&copy; Todos los derechos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
