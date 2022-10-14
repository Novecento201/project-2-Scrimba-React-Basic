import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Profile from "./img/profile.png"
function App() {
  return (
    <div className="App">
      <img src={Profile} alt="profile" className="profile-img"/>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
