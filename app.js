const 
    tabla = document.querySelector('#tabla'),
    hoja_inicial = document.querySelector('#hoja-inicio'),
    hoja_final = document.querySelector('#hoja-fin'),
    generarBtn = document.querySelector('#generarBtn'),
    contenido = document.querySelector('#contenido');

    generarBtn.addEventListener('click', function() {
        let inicio = hoja_inicial.value;
        let final = hoja_final.value;
      
        if (inicio > final) {
          alert('No se puede generar! El inicio no puede ser mayor al final');
          return;
        }
      
        for (let i = inicio; i <= final; i++) {
          contenido.innerHTML += `
            <header>
              <h1>Validación Ripley - Regis</h1>
              <div class="submenu">
                <div class="hoja">
                  <p>Hoja ${i}</p> 
                </div>
                <div class="area-validada">
                  <p>______________</p>
                </div>
              </div>
            </header>
            <main>
              <table id="tabla_${i}">
              <thead>
                <th>TAG</th>
                <th>CONT. REGIS</th>
                <th>CONT. RIPLEY</th>
                <th>DIFERENCIAS</th>
                <th>VALIDADO</th>
            </thead>
              </table> 
            </main>
          `;
      
          const tabla = document.getElementById(`tabla_${i}`); 
      
          for (let j = 0; j < 19; j++) {
            tabla.innerHTML += `
              <tr>
                <td>.</td>
                <td>.</td>
                <td>.</td>
                <td>.</td>
                <td>.</td>
              </tr>
            `;
          }
        }
      });