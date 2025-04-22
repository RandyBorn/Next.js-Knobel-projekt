import Navbar from "@/components/Navbar";
import React from "react";
// import WindowResizeLogger from "@/components/WindowResizeLogger";
// import UserInfoForm from "@/components/UserInfoForm";

function AboutPage() {
  return (
    <>
      <Navbar />
      <section className="aboutpage border-2 border-b-blue-100 bg-blue-200 display flex flex-col justify-center items-center">
        <h3>The size of the Screen could be important...</h3>
        <div className="aboutbody  ">
          <section className="aboutsection md:bg-blue-500 text-red-700 m-6 border-8 border-b-blue-800-300">
            <h2>About</h2>
            <p>
              width: 786px
              <br />
              screen.width: 786px
              <br />
            </p>
          </section>
          <div className="aboutfirst">
            <div className="aboutfirstin">{/* <WindowResizeLogger /> */}</div>
          </div>
          <div className="aboutsecond">{/* <UserInfoForm /> */}</div>
          <div>
            <section className="aboutsection text-red-700 m-6 border-8 border-b-blue-800-300">
              <p>Anzahl logischer Prozessoren: 8</p>
              <p>Ram: 8GB</p>
              <p>
                Browser nutzen oft nur einen fest zugeteilten Teil des Rams aus
                Desktop PC´s sind das oft max. 8GB
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
