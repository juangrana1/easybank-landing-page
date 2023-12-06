import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Button from "./components/Button";

export default function App() {
  return (
    <>
      <Header
        items={["Home", "About", "Contact", "Blog", "Careers"]}
        button={<Button parentClass="header" />}
      />
      <MainSection
        title="Next generation digital banking"
        description="Take your financial life online. Your EasyBank account will be a one-stop
        shop for spending, saving, budgeting, investing, and much more."
        button={<Button parentClass="main-section" />}
      />
    </>
  );
}
