import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <main className="main-container">
      <ContactHeader />
      <ContactForm />
      </main>
    </div>
  );
}

export default App;
