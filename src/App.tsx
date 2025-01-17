/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import QRCode from "qrcode.react";

import "./App.css";

function App() {
  const [isBrowser, setIsBrowser] = useState<boolean>(true);
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const isIPad = /iPad|Macintosh/.test(userAgent) && "ontouchend" in document;
    const isMobile = /Mobile|iP(hone|od)/.test(userAgent);

    if (isMobile || isIPad) {
      setIsBrowser(false);
    } else {
      setIsBrowser(true);
    }
  }, []);

  const closePopup = () => {
    setIsPopupVisible(false);
    setSelectedDevice(null);
  };

  const handleNagigate = (deviceType: string) => {
    if (!isBrowser) {
      deviceType === "ANDROID"
        ? window.open(
            "https://play.google.com/store/apps/details?id=com.loanfactory.consumers"
          )
        : window.open(
            "https://apps.apple.com/us/app/loan-factory/id6503113271"
          );
    } else {
      setIsPopupVisible(true);
      deviceType === "ANDROID"
        ? setSelectedDevice("ANDROID")
        : setSelectedDevice("IOS");
    }
  };

  return (
    <div className="wrapper">
      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <div className="popup-content-header">
              <h2 className="popup-title">
                Scan QR Code for{" "}
                {selectedDevice === "ANDROID" ? "Android" : "IOS"}
              </h2>
              <img
                src="./close.png"
                className="close-icon"
                onClick={closePopup}
              />
            </div>
            <QRCode
              value={
                selectedDevice === "ANDROID"
                  ? "https://play.google.com/store/apps/details?id=com.loanfactory.consumers"
                  : "https://apps.apple.com/us/app/loan-factory/id6503113271"
              }
              size={300}
              fgColor="#000000"
              bgColor="#ffffff"
              level="L"
              includeMargin={true}
              className="qr-code"
            />
          </div>
        </div>
      )}
      <div className="container">
        <div className="ellipse-overlay"></div>
        <div className="overlay"></div>
        <header className="header">
          <img src="./loan-logo.png" className="logo" alt="Loan Logo" />
          <nav className="nav">
            <a
              href="https://www.loanfactory.com/quote"
              target="_blank"
              rel="noreferrer"
            >
              Quote
            </a>
            <a
              href="https://www.loanfactory.com/apply"
              target="_blank"
              rel="noreferrer"
            >
              Loan Application
            </a>
            <a
              href="https://www.loanfactory.com/find-loan-officers"
              target="_blank"
              rel="noreferrer"
            >
              Find a Loan Officer
            </a>
            <a
              href="https://www.loanfactory.com/homeready"
              target="_blank"
              rel="noreferrer"
            >
              Resources
            </a>
            <a
              href="https://www.loanfactory.com/lowest-rate"
              target="_blank"
              rel="noreferrer"
            >
              Lowest Rate
            </a>
          </nav>
          <button
            className="sign-in"
            onClick={(e) => {
              window.open("https://www.loanfactory.com/login", "_blank");
            }}
          >
            SIGN IN
          </button>
        </header>
        <main className="main">
          <div className="left">
            <h1>
              Get funded fast.
              <br />
              <p className="highlight-title">Streamlined loan applications</p>at
              your fingertips
            </h1>
            <div className="left-item">
              <p className="left-item--heading">
                Quick Loans, Anytime, Anywhere!
              </p>
              <div className="left-item-buttons">
                <img
                  src="./ios.png"
                  className="left-item-buttons--image"
                  alt="iOS"
                  onClick={() => handleNagigate("IOS")}
                />
                <img
                  src="./android.png"
                  className="left-item-buttons--image"
                  alt="Android"
                  onClick={() => handleNagigate("ANDROID")}
                />
              </div>
            </div>
          </div>
          <div className="right">
            <img src="mobile-image.png" className="mobile-image" alt="Mobile" />
            <div className="phone-1-container">
              <img src="phone11.png" className="phone-1" alt="Phone 1" />
              <div className="right-buble-1"></div>
              <div className="right-buble-2"></div>
            </div>
            <div className="phone-2-container">
              <img src="phone21.png" className="phone-2" alt="Phone 2" />
              <div className="right-buble-3"></div>
            </div>
          </div>
          <div className="social-links--mobile">
            <div className="social-links--mobile--item">
              <img
                src="./fb.png"
                style={{ width: 20, height: 20 }}
                alt="Facebook"
                onClick={() => {
                  window.open("https://www.facebook.com/LoanFactoryHQ");
                }}
              />
              <img
                src="./x.png"
                style={{ width: 20, height: 20 }}
                alt="X"
                onClick={() => {
                  window.open("https://x.com/LoanFactoryHQ");
                }}
              />
              <img
                src="./linkedin.png"
                style={{ width: 20, height: 20 }}
                alt="LinkedIn"
                onClick={() => {
                  window.open("https://www.linkedin.com/company/loanfactory");
                }}
              />
            </div>
            <p className="copyright-item--mobile">
              Copyright © 2024 Loan Factory.
              <br />
              All Rights Reserved.
            </p>
          </div>
        </main>
      </div>
      <footer className="footer">
        <div className="social-links">
          <div className="social-links-item--breakpoint">
            <p className="social-links--heading">Follow us on:</p>
            <div
              className="social-links--item"
              onClick={() => {
                window.open("https://www.facebook.com/LoanFactoryHQ");
              }}
            >
              <img
                src="./fb.png"
                style={{ width: 20, height: 20 }}
                alt="Facebook"
              />
              <a href="# ">Facebook</a>
            </div>
            <div
              className="social-links--item"
              onClick={() => {
                window.open("https://x.com/LoanFactoryHQ");
              }}
            >
              <img
                src="./x.png"
                style={{ width: 20, height: 20 }}
                alt="Twitter"
              />
              <a href="# ">Twitter</a>
            </div>
            <div
              className="social-links--item"
              onClick={() => {
                window.open("https://www.linkedin.com/company/loanfactory");
              }}
            >
              <img
                src="./linkedin.png"
                style={{ width: 20, height: 20 }}
                alt="LinkedIn"
              />
              <a href="# ">LinkedIn</a>
            </div>
          </div>
          <p className="copyright-item">
            Copyright © 2024 Loan Factory. All Rights Reserved.
          </p>
        </div>
        <div className="app-button--mobile">
          <div className="left-item-buttons">
            <img
              src="./ios.png"
              className="left-item-buttons--image"
              alt="iOS"
              onClick={() => handleNagigate("IOS")}
            />
            <img
              src="./android.png"
              className="left-item-buttons--image"
              alt="Android"
              onClick={() => handleNagigate("ANDROID")}
            />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
