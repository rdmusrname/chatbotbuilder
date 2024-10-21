import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { MdAccountBalance, MdLocalHospital, MdSchool, MdShoppingCart } from 'react-icons/md';
import { BsCpu, BsDiagram3Fill, BsPaintBucket, BsPuzzle } from 'react-icons/bs';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #3b185f;
    --secondary-color: #a12568;
    --background-color: #2a0944;
    --text-color: #ffffff;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    font-size: 16px;
    line-height: 1.6;
  }
`;

export default function Homepage() {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>ChatbotBuilder - Create AI-Powered Chatbots for Your Business</title>
        <meta
          name="description"
          content="Empower your business with ChatbotBuilder. Create custom AI chatbots for internal use, customer service, and sales using cutting-edge models like GPT-4, Gemini 1.5, and Claude 3.5."
        />
      </Head>
      <HomepageWrapper>
        <HeroSection>
          <h1>Revolutionize Your Business with AI-Powered Chatbots</h1>
          <p>ChatbotBuilder empowers businesses to create sophisticated, custom AI chatbots using cutting-edge language models. Enhance your customer service, streamline internal operations, and boost sales with intelligent conversational AI.</p>
          <Link href="/contact" passHref>
            <Button as="a">Get Started Free</Button>
          </Link>
          <ImageContainer>
            <Image src="/images/ai-illustration-1.png" alt="AI Language Model Illustration" width={800} height={480} layout="responsive" />
          </ImageContainer>
        </HeroSection>

        <FeaturesSection>
          <h2>Why Choose ChatbotBuilder?</h2>
          <FeatureGrid>
            <FeatureItem>
              <IconContainer>
                <BsCpu /> {/* Using microchip icon to represent AI models */}
              </IconContainer>
              <h3>State-of-the-Art AI Models</h3>
              <p>Harness the power of GPT-4, Gemini 1.5, Claude 3.5, and more. Our platform integrates the latest and most advanced language models to ensure your chatbots deliver human-like interactions and accurate responses.</p>
            </FeatureItem>
            <FeatureItem>
              <IconContainer>
                <BsPuzzle />
              </IconContainer>
              <h3>No-Code Builder</h3>
              <p>Create sophisticated chatbots without writing a single line of code. Our intuitive drag-and-drop interface makes it easy for anyone to build complex conversational flows and integrate advanced AI capabilities.</p>
            </FeatureItem>
            <FeatureItem>
              <IconContainer>
                <BsPaintBucket />
              </IconContainer>
              <h3>Customizable to Your Brand</h3>
              <p>Tailor your chatbot&apos;s personality, language, and appearance to match your brand identity. From casual and friendly to professional and formal, ensure your chatbot represents your company&apos;s unique voice.</p>
            </FeatureItem>
            <FeatureItem>
              <IconContainer>
                <BsDiagram3Fill />
              </IconContainer>
              <h3>Multi-Channel Deployment</h3>
              <p>Deploy your AI chatbots across multiple platforms seamlessly. Whether it&apos;s your website, mobile app, or popular messaging platforms like WhatsApp and Facebook Messenger, reach your customers wherever they are.</p>
            </FeatureItem>
          </FeatureGrid>
        </FeaturesSection>

        <UseCasesSection>
          <h2>Transforming Businesses Across Industries</h2>
          <p>ChatbotBuilder&apos;s AI-powered chatbots are revolutionizing operations and customer interactions in various sectors:</p>
          <UseCaseGrid>
            <UseCaseItem>
              <IconContainer>
                <MdShoppingCart />
              </IconContainer>
              <h3>E-commerce &amp; Retail</h3>
              <p>Provide 24/7 customer support, offer personalized product recommendations, and streamline the shopping experience.</p>
            </UseCaseItem>
            <UseCaseItem>
              <IconContainer>
                <MdLocalHospital />
              </IconContainer>
              <h3>Healthcare</h3>
              <p>Assist with appointment scheduling, provide basic health information, and offer mental health support.</p>
            </UseCaseItem>
            <UseCaseItem>
              <IconContainer>
                <MdAccountBalance />
              </IconContainer>
              <h3>Finance &amp; Banking</h3>
              <p>Handle account inquiries, assist with transactions, and provide personalized financial advice.</p>
            </UseCaseItem>
            <UseCaseItem>
              <IconContainer>
                <MdSchool />
              </IconContainer>
              <h3>Education</h3>
              <p>Offer 24/7 student support, assist with course selection, and provide instant answers to frequently asked questions.</p>
            </UseCaseItem>
          </UseCaseGrid>
          <ImageContainer>
            <Image src="/images/ai-illustration-2.png" alt="AI Applications Across Industries" width={800} height={480} layout="responsive" />
          </ImageContainer>
        </UseCasesSection>

        <TestimonialSection>
          <h2>What Our Clients Say</h2>
          <TestimonialGrid>
            <TestimonialItem>
              <p>{'ChatbotBuilder has transformed our customer service. We\'re now able to handle inquiries 24/7, and our response times have decreased by 80%. The AI\'s ability to understand context and provide accurate information is impressive.'}</p>
              <cite>- Sarah Johnson, Customer Service Manager at TechCorp</cite>
            </TestimonialItem>
            <TestimonialItem>
              <p>{'As a small business owner, I was skeptical about AI chatbots. But ChatbotBuilder\'s platform is so intuitive, I was able to create a customized chatbot for our website in just a few hours. It\'s like having an extra team member working round the clock!'}</p>
              <cite>- Michael Chen, Founder of GreenLeaf Organics</cite>
            </TestimonialItem>
          </TestimonialGrid>
        </TestimonialSection>

        <CTASection>
          <h2>Ready to Transform Your Business with AI?</h2>
          <p>Join thousands of businesses already leveraging the power of AI chatbots. With ChatbotBuilder, you&apos;re not just keeping up with the future - you&apos;re leading the way.</p>
          <Link href="/contact" passHref>
            <Button as="a">Start Your Free Trial</Button>
          </Link>
          <ImageContainer>
            <Image src="/images/ai-illustration-3.png" alt="Futuristic AI Concept" width={800} height={480} layout="responsive" />
          </ImageContainer>
        </CTASection>

        <Footer>
          <p>&copy; 2023 ChatbotBuilder. All rights reserved.</p>
          <FooterLinks>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/contact">Contact Us</Link>
          </FooterLinks>
        </Footer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const HeroSection = styled.section`
  background-color: var(--primary-color);
  padding: 6rem 2rem;
  text-align: center;
  border-radius: 10px;
  margin-top: 2rem;

  h1 {
    font-size: 32px;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.8rem;
    margin-bottom: 3rem;
  }
`;

const Button = styled.button`
  background-color: var(--secondary-color);
  color: var(--text-color);
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.6rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background-color: #c13584;
  }
`;

const FeaturesSection = styled.section`
  padding: 6rem 2rem;
  text-align: center;

  h2 {
    font-size: 24px;
    margin-bottom: 3rem;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`;

const FeatureItem = styled.div`
  background-color: var(--primary-color);
  padding: 3rem;
  border-radius: 8px;
  text-align: left;

  h3 {
    font-size: 20px;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.2rem;
  }
`;

const UseCasesSection = styled.section`
  padding: 6rem 2rem;
  text-align: center;

  h2 {
    font-size: 24px;
    margin-bottom: 1.5rem;
  }

  > p {
    font-size: 1.4rem;
    margin-bottom: 3rem;
  }
`;

const UseCaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
`;

const UseCaseItem = styled.div`
  background-color: var(--primary-color);
  padding: 3rem;
  border-radius: 8px;
  text-align: left;

  h3 {
    font-size: 20px;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.2rem;
  }
`;

const TestimonialSection = styled.section`
  padding: 6rem 2rem;
  text-align: center;

  h2 {
    font-size: 24px;
    margin-bottom: 3rem;
  }
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
`;

const TestimonialItem = styled.div`
  background-color: var(--primary-color);
  padding: 3rem;
  border-radius: 8px;
  text-align: left;

  p {
    font-size: 1.4rem;
    font-style: italic;
    margin-bottom: 1.5rem;
  }

  cite {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const CTASection = styled.section`
  background-color: var(--primary-color);
  padding: 6rem 2rem;
  text-align: center;
  border-radius: 10px;
  margin: 2rem 0;

  h2 {
    font-size: 24px;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.6rem;
    margin-bottom: 3rem;
  }
`;

const Footer = styled.footer`
  background-color: var(--background-color);
  padding: 3rem;
  text-align: center;

  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

const FooterLinks = styled.div`
  a {
    color: var(--text-color);
    text-decoration: none;
    margin: 0 1rem;
    font-size: 1.4rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;

  svg {
    font-size: 3rem;
  }
`;

const ImageContainer = styled.div`
  margin: 4rem 0;
`;
