import { useEffect, useState } from 'react'
import './App.css'

import Sidebar from './components/Sidebar';
import StatusCard from './components/StatusCard';
import RoboEyesControl from './components/RoboEyesControl';
import { checkServer } from './services/robotService';
function App() {
 
//Mood a seleccionar
  const [mood, setMood] = useState('DEFAULT');

  //ultimo mood aplicado
  const [appliedModd, setAppliedMood] = useState(null);
  //Resultado de la ultima operacion
  const [commandStatus, setCommandStatus] = useState(
    'Sin ordenes'
  );
  //ordenes simuladas
  const [commandCount, setCommandCount] = useState(0);
  //estado simulado del robot
  const [robotStatus, setRobotStatus] = useState('En espera');
  //Seleccionar expresion
  function changeMood(newMood){
    setMood(newMood);
    if(newMood !== appliedModd){
      setCommandStatus('Pendiente de envio');
    }else{
      setCommandStatus('Sin cambios pendientes');
    }
  }
  
  function sendCommand(){
    setCommandStatus('Procesando orden...');
    //simulacion de que la orden se completo
    setAppliedMood(mood);
    setCommandStatus('Completada');
    setCommandCount(previous => previous + 1);
  }

  //Reestablecer la seleccion a default
  function resetMood(){
    changeMood('DEFAULT');
  }
  const [serverStatus, setServerStatus] = useState('Comprobando...');

  useEffect(() => {
    checkServer()
      .then(() =>{
        setServerStatus('Servidor conectado');
      })
      .catch(() =>{
        setServerStatus('Servidor desconectado');
      });
  }, []);

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
          title="Orden seleccionada"
          value={mood}
          description="Expresion deseada" />

          <StatusCard
          title="Ultima orden aplicada"
          value={appliedModd ?? 'Ninguna'}
          description="Resultado de la simulacion" />

          <StatusCard
          title="Ordenes completadas"
          value={commandCount}
          description="Contador local" />

          <StatusCard
            title="Servidor Flask"
            value={serverStatus}
            description="Comunicacion con el backend" />
            
        </section>

        <RoboEyesControl
        mood={mood}
        appliedMood={appliedModd}
        commandStatus={commandStatus}
        onMoodChange={changeMood}
        onSendCommand={sendCommand}
        onReset={resetMood} />

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
