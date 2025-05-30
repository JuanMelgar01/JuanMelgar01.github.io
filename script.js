function expandirAptitudes(elemento) {
  const seccion = elemento.closest('#Aptitudes');
  const estaExpandido = seccion.classList.contains('Aptitudes_expandido');
  if (estaExpandido) {
    seccion.classList.remove('Aptitudes_expandido', 'visible');
    seccion.classList.add('Aptitudes_contraido');
  } else {
    seccion.classList.remove('Aptitudes_contraido');
    seccion.classList.add('Aptitudes_expandido');

    // Esperar a que termine la animación (ajustado a la duración más larga: 0.5s)
    setTimeout(() => {
      seccion.classList.add('visible');
    }, 300); // ajusta si cambias duración del transition en CSS
  }

}
function expandirHabilidades(elemento) {
  const seccion = elemento.closest('#Habilidades');
  const estaExpandido = seccion.classList.contains('Habilidades_expandido');
  if (estaExpandido) {
    seccion.classList.remove('Habilidades_expandido', 'visible');
    seccion.classList.add('Habilidades_contraido');
  } else {
    seccion.classList.remove('Habilidades_contraido');
    seccion.classList.add('Habilidades_expandido');

    // Esperar a que termine la animación (ajustado a la duración más larga: 0.5s)
    setTimeout(() => {
      seccion.classList.add('visible');
    }, 300); // ajusta si cambias duración del transition en CSS
  }

}
function expandirContenido(id) {
  const Perfil = document.getElementById('Perfil');
  const Experiencia = document.getElementById('Experiencia');
  const Formacion = document.getElementById('Formacion');
  const Contacto = document.getElementById('Contacto');

  switch (id) {
    case 'Perfil':
      //Perfil.style.display = 'block';
      Perfil.className = 'Perfil_expandido';
      //Experiencia.style.display = 'none';
      Experiencia.className = 'Experiencia_contraido';
      //Formacion.style.display = 'none';
      Formacion.className = 'Formacion_contraido';
      //Contacto.style.display = 'none';
      Contacto.className = 'Contacto_contraido';
      
      break;
    case 'Experiencia':
      //Perfil.style.display = 'none';
      Perfil.className = 'Perfil_contraido';
      //Experiencia.style.display = 'block';
      Experiencia.className = 'Experiencia_expandido';
      //Formacion.style.display = 'none';
      Formacion.className = 'Formacion_contraido';
      //Contacto.style.display = 'none';
      Contacto.className = 'Contacto_contraido';
      
      break;
    case 'Formacion':
      //Perfil.style.display = 'none';
      Perfil.className = 'Perfil_contraido';
//Experiencia.style.display = 'none';
      Experiencia.className = 'Experiencia_contraido';
      //Formacion.style.display = 'block';
      Formacion.className = 'Formacion_expandido';
      //Contacto.style.display = 'none';
      Contacto.className = 'Contacto_contraido';
      
      break;
    case 'Contacto':
      //Perfil.style.display = 'none';
      Perfil.className = 'Perfil_contraido';
      //Experiencia.style.display = 'none';
      Experiencia.className = 'Experiencia_contraido';
      //Formacion.style.display = 'none';
      Formacion.className = 'Formacion_contraido';
      //Contacto.style.display = 'block';
      Contacto.className = 'Contacto_expandido';
      
      break;

  }





  // Esperar a que termine la animación (ajustado a la duración más larga: 0.5s)
  setTimeout(() => {
    //   seccion.classList.add('visible');
  }, 300); // ajusta si cambias duración del transition en CSS
}
