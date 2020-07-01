/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "react-router-dom";
import Container from "../../layout/container";
import Item from "../../layout/item";

import * as styles from "./about.styles";

const AboutContent = () => {
  return (
    <section className="about-page-component">
      <Container FlexDirection="column">
        <Item align="center">
          <h1 css={styles.aboutPageHeader}>About This App</h1>
          <h3 css={styles.aboutPageSubHeader}>
            what i learn buliding this app
          </h3>
        </Item>

        <Item>
          <Container>
            <p css={styles.aboutParagraf}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis
              quam faucibus, ullamcorper neque sit amet, sollicitudin ex. Aenean
              viverra elit condimentum rutrum iaculis. Nulla a pharetra lorem.
              Integer viverra lectus lacus, eu volutpat sapien imperdiet non.
              Aliquam luctus nisi vitae convallis egestas. Etiam ut ornare
              lacus. Phasellus et lacus ex.
            </p>
          </Container>
        </Item>

        <Item align="center">
          <Link to="/">
            <span css={styles.backToHome}>Back to home</span>
          </Link>
        </Item>
      </Container>
    </section>
  );
};

export default AboutContent;
