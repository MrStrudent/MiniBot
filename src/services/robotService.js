export async function checkServer(){
  const response = await fetch('/api/health');

  if(!response.ok){
    throw new Error('Nose pudo consultar el servidor');
  }

  return await response.json();
}

export async function sendMood(mood) {
  const response = await fetch('/api/commands',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({mood})
  });

  const data = await response.json();
  if(!response.ok){
    throw new Error(data.message || 'Error al enviar la orden');
  }
  return data;
}