import {
  FooterContainer,
  FooterContent,
  FooterConnect,
  SocialIcons,
  FooterSlogan,
  ContactDetails,
} from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterConnect>Connect With Us</FooterConnect>
        <SocialIcons>
          
          <a
            href="https://www.instagram.com/kv__sivakumar/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sivakumar-k-v-5b7766233/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
          </a>
        </SocialIcons>
        <ContactDetails>
          <h3>Email: sreejith.25ec@licet.com</h3>
          

          <h3>Phone: 9042671785,9344247937 </h3>
        </ContactDetails>
        <FooterSlogan>
          <p>Instamart: Crafting happiness!</p>
        </FooterSlogan>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
