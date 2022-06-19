import Course from "./components/Course";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import NewsLetter from "./components/NewsLetter";
import Showcase from "./components/Showcase";
import TeacherGuide from "./components/TeacherGuide";
import "./sass/main.scss";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <Features />
      <TeacherGuide />
      <Showcase />
      <NewsLetter />
      <Course />
      <Footer />
    </div>
  );
}

export default App;
