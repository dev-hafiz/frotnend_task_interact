import Course from "./components/Course";
import Features from "./components/Features";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
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
      <Showcase/>
      <Course/>
    </div>
  );
}

export default App;
