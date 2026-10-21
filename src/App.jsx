import { useState } from 'react'
import './App.css'

function App() {
  //expresion simulada
  const [mood, setMood] = useState('DEFAULT');
  //estado simulado del robot
  const [robotStatus, setRobotStatus] = useState('En espera');

  //expresiones disponibles
  const moods = [
    'DEFAULT',
    'HAPPY',
    'TIRED',
    'ANGRY',
  ];
  function changeMood(newMood){
    setMood(newMood);
    setRobotStatus('Orden simulada');
  }
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Minibot<span>.</span></h2>
        <p className="menu-label">Control</p>
        <div className="menu-item active">
          <span>◈</span> Dashboard
        </div>

        <div className="menu-item">
          <span>◎</span> RoboEyes
        </div>
        <div clasName="menu-item">
          <span>⚙</span> Configuracion
        </div>

        <div className="sidebar-footer">
          <span className="status-dot"></span>
          Modo de simulacion
        </div>
      </aside>
      <main className="main-content">
        <header className="topbar">
          <div>
          <p className="eyebrow">Robotics / CONTROL CENTER</p>
          <h1>Panel de control</h1>
          </div>

          <div className="connection">
          <span className="status-dot"></span>
          Sin servidor
        </div>

        </header>
        <section className="welcome">
          <div>
            <p className="eyebrow">Sistema de control</p>
            <h2>Hola, Maestro</h2>
            <p>
              Control de expresiones visuales del MiniBot
            </p>
          </div>
          <div className="robot-icon">◉</div>
        </section>

        <section className="stats">
          <article className="stat-card">
            <p>Estado del robot</p>
            <h3>{robotStatus}</h3>
            <span>Simulacion local</span>
          </article>

          <article className="stat-card">
            <p>Mood actual</p>
            <h3>{mood}</h3>
            <span>Expresion actual</span>
          </article>
        </section>


        <section className="control-panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Interfaz visual</p>
              <h2>Control de RoboEyes</h2>
            </div>

            <span className="simulation-tag">
              Simulacion
            </span>
          </div>

          <div className="eye-preview">
            <div className={`eyes mood-${mood.toLowerCase()}`}>
              <div className="eye"></div>
              <div className="eye"></div>
            </div>

            <p>MOOD ACTUAL: {mood}</p>
          </div>

          <h3 className="control-title">
            Selecciona una expresion
          </h3>

          <div className="mood-buttons">
            {moods.map((item) =>(
              <button
              key={item}
              className={
                mood === item
                ? 'mood-button selected'
                : 'mood-button'
              }
              onClick={() => changeMood(item)}>
                {item}
              </button>
            ))}
          </div>
          <p className="notice">
            Cambios locales, no envia a esp32-S3
          </p>
        </section>

      </main>
    </div>
  );
}

export default App
