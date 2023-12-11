import { useState, useEffect } from "react";

import Header from "./components/Header";
import Button from "./components/Button";
import Section from "./components/Section";
import DescriptionBox from "./components/DescriptionBox";
import ArticleBox from "./components/ArticleBox";
import Footer from "./components/Footer";

export default function App() {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [window.innerWidth]);

  return (
    <>
      <Header
        items={["Home", "About", "Contact", "Blog", "Careers"]}
        button={<Button parentClass="header" />}
        screenWidth={screenWidth}
      />
      <Section
        title="Next generation digital banking"
        description="Take your financial life online. Your EasyBank account will be a one-stop
        shop for spending, saving, budgeting, investing, and much more."
        class="main-section"
        button={<Button parentClass="main-section" />}
        titleNum={1}
      />
      <Section
        title="Why choose Easybank?"
        description="We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before"
        class="description-section"
        titleNum={2}
        boxes={[
          <DescriptionBox
            title="Online Banking"
            description="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
          />,
          <DescriptionBox
            title="Simple Budgeting"
            description="See exactly where your money goes each month. Receive notifications when you're close to hitting your limits."
          />,
          <DescriptionBox
            title="Fast Onboarding"
            description="We don't do branches. Open your account in minutes online and start taking control of your finances right away."
          />,
          <DescriptionBox
            title="Open API"
            description="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
          />,
        ]}
      />
      <Section
        title="Latest Articles"
        class="articles-section"
        titleNum={2}
        boxes={[
          <ArticleBox
            title="Receive money in any currency with no fees"
            author="Claire Robinson"
            description="The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single..."
            imageName="Currency"
          />,
          <ArticleBox
            title="Treat yourself without worrying about money"
            author="Wilson Hutton"
            description="Our simple budgeting feature allows you to separate out spending and set realistic limits each month. That means you..."
            imageName="Restaurant"
          />,
          <ArticleBox
            title="Take your Easybank card wherever you go"
            author="Wilson Hutton"
            description="We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you..."
            imageName="Plane"
          />,
          <ArticleBox
            title="Our invite-only Beta accounts are now live!"
            author="Claire Robinson"
            description="After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site..."
            imageName="Confetti"
          />,
        ]}
      />
      <Footer
        items={[
          "About Us",
          "Contact",
          "Blog",
          "Careers",
          "Support",
          "Privacy Policy",
        ]}
        button={<Button parentClass="footer" />}
      />
    </>
  );
}
