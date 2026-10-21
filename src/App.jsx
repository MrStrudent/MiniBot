import { useState } from 'react'
import './App.css'

import Sidebar from './components/Sidebar';
import StatusCard from './components/StatusCard';
import RoboEyesControl from './components/RoboEyesControl';

function App() {
 
//expresion simulada
  const [mood, setMood] = useState('DEFAULT');
  //estado simulado del robot
  const [robotStatus, setRobotStatus] = useState('En espera');
  function changeMood(newMood){
    setMood(newMood);
    setRobotStatus('Orden simulada');
  }
  
  

  return (
    <div className="dashboard">

      <Sidebar />

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
          
          <StatusCard
          title="Estado del robot"
          value={robotStatus}
          description="Simulacion local" />

          <StatusCard
          title="Mood actual"
          value={mood}
          description="Expresion seleccionada" />

          <StatusCard
          title="Conectividad"
          value="Desconectado"
          description="Servidor aun no configurado" />

        </section>

        <RoboEyesControl
        mood={mood}
        onMoodChange={changeMood} />

          <article className="stat-card">
            <p>Mood actual</p>
            <h3>{mood}</h3>
            <span>Expresion actual</span>
          </article>
      </main>
    </div>
  );
}

export default App
