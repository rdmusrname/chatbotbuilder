import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';
import { EnvVars } from 'env';

export default function ContactPage() {
  return (
    <Page title='About'>
      <PrivacyPolicyContainer>
        <RichText>
          <p><strong>{'About ' + EnvVars.SITE_NAME}</strong></p>
          <p>{'At ' + EnvVars.SITE_NAME + ', our mission is to revolutionize businesses with the power of AI-powered chatbots. We believe that intelligent conversational AI can transform the way companies interact with their customers and streamline their operations.'}</p>
          <p>{'Our chatbot builder empowers you to create sophisticated, custom AI chatbots without writing a single line of code. We leverage cutting-edge language models like GPT-4, Gemini 1.5, and Claude 3.5 to ensure your chatbots deliver human-like interactions and accurate responses.'}</p>
          <p>{'With our intuitive drag-and-drop interface, you can easily build complex conversational flows and integrate advanced AI capabilities. Customize your chatbot\'s personality, language, and appearance to match your brand identity, ensuring a seamless and engaging experience for your users.'}</p>
          <p>{'Deploy your chatbots across multiple platforms, including your website, mobile app, and popular messaging platforms like WhatsApp and Facebook Messenger. Reach your customers wherever they are and provide them with instant support, personalized recommendations, and a streamlined experience.'}</p>
          <p>{'Join the AI revolution and transform your business with ' + EnvVars.SITE_NAME + '.'}</p>
        </RichText>
      </PrivacyPolicyContainer>
    </Page>
  );
}

const PrivacyPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
