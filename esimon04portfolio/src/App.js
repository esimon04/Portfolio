import './App.css';
import Projects from "./Projects";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        }}>
          <Projects />
      </div>
      
    </main>
  );
}