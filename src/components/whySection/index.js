import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "../whySection/servicesElements";

import Icon1 from "../../images/svg-4.svg";
import Icon2 from "../../images/svg-5.svg";
import Icon3 from "../../images/svg-6.svg";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>BUT WHY DO WE DO IT?</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1}></ServicesIcon>
            <ServicesH2>NEW SOURCE OF INFORMATION</ServicesH2>
            <ServicesP>
              Social medias become a major source of the data, easy to extract
              and use.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2}></ServicesIcon>
            <ServicesH2>GREATE IMPACT</ServicesH2>
            <ServicesP>
              The impact of social medias on business of all kinds is highly
              considerable.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3}></ServicesIcon>
            <ServicesH2>DECISION SUPPORT SYSTEMS</ServicesH2>
            <ServicesP>
              Decisional systems are considiring social medias, as a key factor
              in their strategies.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
