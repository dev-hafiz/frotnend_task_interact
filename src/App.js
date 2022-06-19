import Features from "./components/Features";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import TeacherGuide from "./components/TeacherGuide";
import "./sass/main.scss";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <Features />
      <TeacherGuide />
    </div>
  );
}

export default App;
