let guests = [
  { table: 1, names: ["Ana", "Amanda", "Kiara", "Chabelis", "Yareimy", "Alex", "Kriss", "Cristy", "Adriano"] },
  { table: 2, names: ["Ray", "Yoel", "Yiselis", "Denier", "Yanicelis", "Leo"] },
  { table: 3, names: ["Reinier", "Ernesto", "Judith", "César", "Elixon", "Javier", "Novia", "Oraci", "Colia", "Ángel", "Vladimir"] },
  { table: 4, names: ["Beta", "Samuel", "Mama de beta", "Jose Morejon", "Yudelkis", "Linet", "Jatniel", "Anita", "Daniel", "Willy", "Felicita"] },
  { table: 5, names: ["Gabriel", "Marcos", "Rocio", "Maria", "Gabriela Martinez", "Jorge", "Claudia", "John", "Gabriela Garcia", "Meralis", "Yaena"] },
  { table: 6, names: ["Yanelin", "Vivian", "Yanet", "Jose", "Freddy", "Danay", "Duniesky", "Georgina", "Kissi", "Zeinet", "Heivraham"] },
  { table: 7, names: ["Daniela Soto", "Penélope", "Leandro", "Lisandra Ortiz", "Yosvel", "Jason", "Susan", "Gianlucas", "Noelia", "Wikelme", "Lino"] },
  { table: 8, names: ["Marlén", "Yoel Mora", "Maylen Pérez", "Anays de la Torre", "Kelin Gómez", "Ana Glora Machin", "Rogelio Reyes", "Lesmes Pérez", "Yilien García", "Carol", "Jef"] },
  { table: 9, names: ["Dave", "Andrea", "Chedu", "Leticia", "Rosita", "Reynaldo", "Lázaro (barbero)", "Geili (esposa)", "Niño", "Yonny", "Nicolás", "Marlin"] },
  { table: 10, names: ["Elaine", "Michel", "Liam", "Elianet", "Emilio", "Dorcas", "Karla", "Yony", "Gloria", "Franky", "Sonia"] },
  { table: 11, names: ["Daitee", "Niña", "Niño", "Asistente", "Asistente", "Osmany", "Asistente de photos", "Yeitian", "Melissa Varona", "Abimael", "Lázaro (Lachi)"] },
  { table: 12, names: ["Yurania", "Roberto Blanco", "Elien Rodríguez", "Fabio Daniel", "Ayli", "Igzandro", "Erika", "Alejandra", "Meylin", "Sobrina", "Niño"] },
  { table: 13, names: ["Elmase", "Carline", "Henry Phanor", "Nathan François", "Arnold Etienne", "Arnold Accius", "Nehemie Baptiste", "Girl friend", "Jacky Jn Philippe", "Kettelyne Gellin", "Angie Angel"] },
  { table: 14, names: ["Jean Claude Paul", "Michelet", "Fender", "Ervens Fleurjean", "Roudline Charles", "Carlos Mercado", "Emmanuel", "Ernest", "Javier Jose", "Nelson"] }
];

// Cargar invitados de localStorage si existen
function loadGuests() {
  const saved = localStorage.getItem("guests");
  if (saved) guests = JSON.parse(saved);
  else localStorage.setItem("guests", JSON.stringify(guests));
}

// Renderizar la lista de invitados
function renderGuestList(filtered = guests) {
  const list = document.getElementById("guest-list");
  list.innerHTML = "";

  filtered.forEach(table => {
    table.names.forEach(name => {
      const li = document.createElement("li");
      li.textContent = `${name} - Mesa ${table.table}`;
      list.appendChild(li);
    });
  });
}

// Buscar invitados por nombre
function searchGuests() {
  const value = document.getElementById("search").value.toLowerCase();
  const filtered = guests.flatMap(table =>
    table.names
      .filter(name => name.toLowerCase().includes(value))
      .map(name => ({ table: table.table, names: [name] }))
  );
  renderGuestList(filtered);
}

// Configurar el idioma
function setLanguage(lang) {
  const content = document.getElementById("main-content");
  const select = document.getElementById("language-select");
  content.style.display = "block";
  select.style.display = "none";

  if (lang === "en") {
    document.getElementById("title").textContent = "Guest List";
    document.getElementById("search").placeholder = "Search by name";
  } else {
    document.getElementById("title").textContent = "Lista de Invitados";
    document.getElementById("search").placeholder = "Buscar por nombre";
  }

  renderGuestList();
}

// Llamar a loadGuests y renderizar la lista al cargar la página
window.onload = () => {
  loadGuests();
  renderGuestList(); // Renderiza la lista de invitados
};
