import React from "react";
import Navbar from "../../layout/Navbar/Navbar";
import { aboutUsData } from "../../utils/config";
import {
  Container,
  AboutTitle,
  AboutTitleContainer,
  AboutTitleParagraph,
  AboutUsContent,
  CardContainer,
  Card,
} from "./style";

const AboutUs = () => {
  return (
    <>
      <Navbar />

      <Container>
        <AboutTitleContainer>
          <AboutTitle>About Us</AboutTitle>
          <AboutTitleParagraph>
            Our website site has a range of properies to suit your needs .
          </AboutTitleParagraph>
        </AboutTitleContainer>
        <AboutUsContent>
          Lorem ipsum dolor sit amet consectetur. Arcu velit nibh suspendisse
          nulla nulla pellentesque tristique. Placerat lorem tristique leo vitae
          sollicitudin.Lorem ipsum dolor sit amet consectetur. Arcu velit nibh
          suspendisse nulla nulla pellentesque tristique. Placerat lorem
          tristique leo vitae sollicitudin.Lorem ipsum dolor sit amet
          consectetur. Arcu velit nibh suspendisse nulla nulla pellentesque
          tristique. Placerat lorem tristique leo vitae sollicitudin.Placerat
          lorem tristique leo vitae sollicitudin.Lorem ipsum dolor sit amet
          consectetur. Arcu velit nibh suspendisse nulla nulla pellentesque
          tristique. Placerat lorem tristique leo vitae sollicitudin.
        </AboutUsContent>
        <CardContainer>
          {aboutUsData.map((data) => (
            <Card key={data.id}>
              <data.image />
              <AboutUsContent>{data.content}</AboutUsContent>
            </Card>
          ))}
        </CardContainer>
      </Container>
    </>
  );
};

export default AboutUs;
