const horizontal = document.createElement('div');
horizontal.style.height = '400px';
horizontal.style.backgroundColor = 'black';
cuerpo.appendChild(horizontal);

const divSections = document.createElement('div');
divSections.className = ('divSections')
cuerpo.appendChild(divSections);

// articulo1
const articulo1 = document.createElement('art');
articulo1.className = ('articulos')
// h2Art1
const h2Art1 = document.createElement('h2');
h2Art1.textContent = 'Art1';
h2Art1.className = 'H2';

articulo1.appendChild(h2Art1);
divSections.appendChild(articulo1);

// articulo2
const articulo2 = document.createElement('art');
articulo2.className = ('articulos')
// h2Art1
const h2Art2 = document.createElement('h2');
h2Art2.textContent = 'Art2';
h2Art2.className = 'H2';

articulo2.appendChild(h2Art2);
divSections.appendChild(articulo2);