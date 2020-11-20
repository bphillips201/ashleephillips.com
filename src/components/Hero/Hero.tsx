import React from "react"
import BannerImage from "../BannerImage/BannerImage"
import LinkButton from "../LinkButton/LinkButton"
import * as styles from "./hero.module.scss"
import Wrapper from "../Wrapper/Wrapper"

const Hero: React.FC = () => (
  <Wrapper className={styles.hero} noPadY={true}>
    <div className={styles.cta}>
      <h1>Hi, my dudes</h1>
      <p>
        I’m a content strategist living on the California central coast. I speak
        about digital accessbility and geek out over calligraphy and Bob’s
        Burgers.
      </p>
      <LinkButton to="/work" title="View my work" template="primary">
        View my work
      </LinkButton>
      <LinkButton
        to="https://medium.com/@ashleeletters"
        title="Read my blog on Medium"
        template="secondary"
      >
        Read my Blog
      </LinkButton>
    </div>

    <BannerImage />
  </Wrapper>
)

export default Hero
