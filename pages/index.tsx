import Head from 'next/head';
import Image from 'next/image';
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
    font-size: 18px;
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
          <Button>Get Started Free</Button>
          <Image src="/images/ai-illustration-1.png" alt="AI Language Model Illustration" width={800} height={480} layout="responsive" />
        </HeroSection>

        <FeaturesSection>
          <h2>Why Choose ChatbotBuilder?</h2>
          <FeatureGrid>
            <FeatureItem>
              <h3>State-of-the-Art AI Models</h3>
              <p>Harness the power of GPT-4, Gemini 1.5, Claude 3.5, and more. Our platform integrates the latest and most advanced language models to ensure your chatbots deliver human-like interactions and accurate responses.</p>
            </FeatureItem>
            <FeatureItem>
              <h3>No-Code Builder</h3>
              <p>Create sophisticated chatbots without writing a single line of code. Our intuitive drag-and-drop interface makes it easy for anyone to build complex conversational flows and integrate advanced AI capabilities.</p>
            </FeatureItem>
            <FeatureItem>
              <h3>Customizable to Your Brand</h3>
              <p>Tailor your chatbot&apos;s personality, language, and appearance to match your brand identity. From casual and friendly to professional and formal, ensure your chatbot represents your company&apos;s unique voice.</p>
            </FeatureItem>
            <FeatureItem>
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
              <h3>E-commerce &amp; Retail</h3>
              <p>Provide 24/7 customer support, offer personalized product recommendations, and streamline the shopping experience.</p>
            </UseCaseItem>
            <UseCaseItem>
              <h3>Healthcare</h3>
              <p>Assist with appointment scheduling, provide basic health information, and offer mental health support.</p>
            </UseCaseItem>
            <UseCaseItem>
              <h3>Finance &amp; Banking</h3>
              <p>Handle account inquiries, assist with transactions, and provide personalized financial advice.</p>
            </UseCaseItem>
            <UseCaseItem>
              <h3>Education</h3>
              <p>Offer 24/7 student support, assist with course selection, and provide instant answers to frequently asked questions.</p>
            </UseCaseItem>
          </UseCaseGrid>
          <Image src="/images/ai-illustration-2.png" alt="AI Applications Across Industries" width={800} height={480} layout="responsive" />
        </UseCasesSection>

        <TestimonialSection>
          <h2>What Our Clients Say</h2>
          <TestimonialGrid>
            <TestimonialItem>
              <p>"ChatbotBuilder has transformed our customer service. We&apos;re now able to handle inquiries 24/7, and our response times have decreased by 80%. The AI&apos;s ability to understand context and provide accurate information is impressive."</p>
              <cite>- Sarah Johnson, Customer Service Manager at TechCorp</cite>
            </TestimonialItem>
            <TestimonialItem>
              <p>"As a small business owner, I was skeptical about AI chatbots. But ChatbotBuilder&apos;s platform is so intuitive, I was able to create a customized chatbot for our website in just a few hours. It&apos;s like having an extra team member working round the clock!"</p>
              <cite>- Michael Chen, Founder of GreenLeaf Organics</cite>
            </TestimonialItem>
          </TestimonialGrid>
        </TestimonialSection>

        <CTASection>
          <h2>Ready to Transform Your Business with AI?</h2>
          <p>Join thousands of businesses already leveraging the power of AI chatbots. With ChatbotBuilder, you&apos;re not just keeping up with the future - you&apos;re leading the way.</p>
          <Button>Start Your Free Trial</Button>
          <Image src="/images/ai-illustration-3.png" alt="Futuristic AI Concept" width={800} height={480} layout="responsive" />
        </CTASection>

        <Footer>
          <p>&copy; 2023 ChatbotBuilder. All rights reserved.</p>
          <FooterLinks>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/contact">Contact Us</a>
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
  padding: 4rem 2rem;
  text-align: center;
  border-radius: 10px;
  margin-top: 2rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  img {
    margin-top: 2rem;
    border-radius: 10px;
  }
`;

const Button = styled.button`
  background-color: var(--secondary-color);
  color: var(--text-color);
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 5px;

  &:hover {
    background-color: #c13584;
  }
`;

const FeaturesSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FeatureItem = styled.div`
  background-color: var(--primary-color);
  padding: 2rem;
  border-radius: 8px;
  text-align: left;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
  }
`;

const UseCasesSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  > p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  img {
    margin-top: 2rem;
    border-radius: 10px;
  }
`;

const UseCaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const UseCaseItem = styled.div`
  background-color: var(--primary-color);
  padding: 2rem;
  border-radius: 8px;
  text-align: left;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
  }
`;

const TestimonialSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const TestimonialItem = styled.div`
  background-color: var(--primary-color);
  padding: 2rem;
  border-radius: 8px;
  text-align: left;

  p {
    font-size: 1.1rem;
    font-style: italic;
    margin-bottom: 1rem;
  }

  cite {
    font-size: 1rem;
    font-weight: bold;
  }
`;

const CTASection = styled.section`
  background-color: var(--primary-color);
  padding: 4rem 2rem;
  text-align: center;
  border-radius: 10px;
  margin: 2rem 0;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  img {
    margin-top: 2rem;
    border-radius: 10px;
  }
`;

const Footer = styled.footer`
  background-color: var(--background-color);
  padding: 2rem;
  text-align: center;

  p {
    margin-bottom: 1rem;
  }
`;

const FooterLinks = styled.div`
  a {
    color: var(--text-color);
    text-decoration: none;
    margin: 0 1rem;
    font-size: 1.1rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;
