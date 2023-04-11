import Header from "../app/components/header/Header";
import "../app/globals.css";
import Project from "./components/project/Project";
import Main from "./components/main/Main";
import Section from "./components/section/Section";

export default function Home() {
  return (
    <body className="">
      <Header />
      <Main />
      <Section />
      <Project />
    </body>
  );
}
