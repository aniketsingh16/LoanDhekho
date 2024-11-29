import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import styled from "styled-components";
import { SvgIcon } from "../../common/SvgIcon";
import Link from "next/link";

// Styled Components
const FooterWrapper = styled.footer`
  background-color: rgb(241, 242, 243);
  padding-top: 35px;
  padding-bottom: 5px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem; /* Increased gap between sections */

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const Section = styled.div`
  margin-bottom: 2rem; /* Adds space between sections */
`;

const Heading = styled.h3`
  font-size: 1.25rem;
  padding-bottom: 3px;
  font-weight: bold;
  color: #2d3748;
`;

const Paragraph = styled.p`
  color: #4a5568;
`;

export const Chat = styled("p")`
  color: #18216d;
  max-width: fit-content;
  border-bottom: 1px solid #18216d;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-bottom: 1px solid rgb(255, 130, 92);
    color: rgb(255, 130, 92);
  }
`;

const LinkList = styled.ul`
  padding: 0;
  list-style-type: none;
`;

const LinkItem = styled.li`
  margin-bottom: 0.5rem;
`;

const LinkButton = styled.button`
  color: black; /* Set text color to black */
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.125rem; /* Increased font size */
  transition: color 0.3s ease;
  display: block;

  &:hover {
    color: #3182ce; /* Retaining blue color on hover */
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem; /* Adds space after Contact Info */
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
`;

const Icon = styled.div`
  color: #3182ce;
  margin-right: 0.75rem;
`;

const FollowUs = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem; /* Adds space after Follow Us */
`;

const SocialButton = styled.button`
  background-color: white;
  padding: 0.5rem;
  border-radius: 50%;
  text-color: #3182ce;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;

  &:hover {
    background-color: #3182ce;
    color: white;
  }
`;

const BottomSection = styled.div`
  margin-top: 3rem;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }

  p {
    font-size: 0.875rem; /* Smaller font size for copyright text */
    color: #4a5568;
  }
`;

const Separator = styled.div`
  height: 1px;
  background-color: #e2e8f0;
  margin: 2rem 0;
`;
const CustomLink = styled(Link)`
  background-color: rgb(241, 242, 243);

`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Grid>
          <Section>
            {/* <Heading>About Us</Heading> */}
            <SvgIcon src="LoanDhekho.png" width="220px"/>
            
            {/* <Paragraph>
              We are dedicated to providing exceptional services and creating
              meaningful experiences for our customers.
            </Paragraph> */}
          </Section>

          <Section>
            <Heading>Quick Links</Heading>
            <LinkList>
              {["Home", "Services", "Products", "Blog", "Contact"].map((link) => (
                <LinkItem key={link}>
                  <LinkButton onClick={() => console.log(`Navigate to ${link}`)}>
                    {link}
                  </LinkButton>
                </LinkItem>
              ))}
            </LinkList>
          </Section>

          <Section>
            <Heading>Contact Info</Heading>
            <ContactInfo>
              <ContactItem>
                <Icon>
                  <HiLocationMarker size={20} />
                </Icon>
                <span>B-48, Shop no. 1, Ekta Park Shalimar Garden Ext. 2, Sahibabad, Uttar Pradesh</span>
                {/* <span>Shalimar Garden Ext. 2,</span> */}
              </ContactItem>
              <ContactItem>
                <Icon>
                  <HiPhone size={20} />
                </Icon>
                <span>+91 85069 17256</span>
              </ContactItem>
              <ContactItem>
                <Icon>
                  <HiMail size={20} />
                </Icon>
                <span>
                <CustomLink href="mailto:support@loandhekho.com"> support@loandhekho.com </CustomLink>
                </span>
              </ContactItem>
            </ContactInfo>
          </Section>

          <Section>
            <Heading>Follow Us</Heading>
            <FollowUs>
              {[
                { Icon: FaFacebook, label: "Facebook" },
                { Icon: FaTwitter, label: "Twitter" },
                { Icon: FaInstagram, label: "Instagram" },
                { Icon: FaLinkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <SocialButton key={label} aria-label={label}>
                  <Icon size={20} />
                </SocialButton>
              ))}
            </FollowUs>
          </Section>
        </Grid>

        <Separator />

        <BottomSection>
          <p>© {new Date().getFullYear()} LoanDekho.com All rights reserved.</p>
        </BottomSection>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
