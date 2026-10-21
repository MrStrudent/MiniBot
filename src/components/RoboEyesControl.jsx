function RoboEyesControl({mood, 
                          appliedMood,
                          commandStatus,
                          onMoodChange,
                          onSendCommand,
                          onReset,}){
  //expresiones disponibles
  const moods = [
    'DEFAULT',
    'HAPPY',
    'TIRED',
    'ANGRY',
  ];
   const hasPendingChanges = mood !== appliedMood;
  return(
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
              onClick={() => onMoodChange(item)}>
                {item}
              </button>
            ))}
          </div>
          
          <div className="command-summary">
            <p>Estado de orden</p>
            <h3>{commandStatus}</h3>
            <p>Ultimo mood aplicado: {' '}
              {appliedMood ?? 'Ninguno'}
            </p>
          </div>

          <div className="command-actions">
            <button
            className="send-button"
            onClick={onSendCommand}
            disabled={!hasPendingChanges}>
              Enviar orden
            </button>

            <button
            className="reset-button"
            onClick={onReset}>
              Reiniciar
            </button>
          </div>

          <p className="notice">
            Cambios locales, no envia a esp32-S3
          </p>
          
        </section>

        
  );
}

export default RoboEyesControl;