import React from "react";
import Footer from "rc-footer";
import "rc-footer/assets/index.css";

const Ftr = () => {
  return (
    <Footer
      columns={[
        {
          title: "Customer Care",
          items: [
            { title: "sens us your feedback", description: "via e-mail" },
            { title: "FAQs" },
            { title: "Services" },
            { title: "Pricing" },
          ],
        },
        {
          title: "Inside Tech-punch Care",
          items: [
            { title: "About us" },
            { title: "Contacts" },
            { title: "Our developers" },
          ],
        },
        {
          title: "Find us",
          items: [
            {
              title: "Twitter",
              icon: (
                <img
                  src="https://raw.githubusercontent.com/jmnote/z-icons/master/svg/twitter.svg"
                  alt=""
                ></img>
              ),
            },
            {
              title: "Google",
              icon: (
                <img
                  src="https://raw.githubusercontent.com/jmnote/z-icons/master/svg/google.svg"
                  alt=""
                ></img>
              ),
            },

            {
              title: "GitHub",
              icon: (
                <img
                  src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png"
                  alt=""
                ></img>
              ),
            },
          ],
        },
      ]}
      bottom="© 2021 - B-Houssam"
      className="footer"
      backgroundColor="#096192"
    >
      {" "}
    </Footer>
  );
};

export default Ftr;
