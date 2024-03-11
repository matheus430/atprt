const catalogoGatos = [
  {
    id: 1,
    nome: "Fuba",
    arquivoImagem: "cat1.jpg",
    disponivel: true,
  },
  {
    id: 2,
    nome: "Rajada",
    arquivoImagem: "cat2.jpg",
    disponivel: true,
  },
  {
    id: 3,
    nome: "Lara",
    arquivoImagem: "cat3.jpg",
    disponivel: true,
  },
  {
    id: 4,
    nome: "Cleo",
    arquivoImagem: "cat4.jpg",
    disponivel: true,
  },
  {
    id: 5,
    nome: "Soneca",
    arquivoImagem: "cat5.jpg",
    disponivel: true,
  },
  {
    id: 6,
    nome: "Nevoada",
    arquivoImagem: "cat6.jpg",
    disponivel: true,
  },
  {
    id: 7,
    nome: "Meia-Noite",
    arquivoImagem: "cat7.jpg",
    disponivel: true,
  },
  {
    id: 8,
    nome: "Zap",
    arquivoImagem: "cat8.jpg",
    disponivel: true,
  },
  {
    id: 9,
    nome: "Trigue",
    arquivoImagem: "cat9.jpg",
    disponivel: true,
  },
];

// criando card dinamicamente
for (let i = 0; i < catalogoGatos.length; i++) {
  const recebeGato = catalogoGatos[i];
  const cartaoGato = `
    <div>
      <img src="${recebeGato.arquivoImagem}" alt="" class="stilo-card"/>
      <legend class="alinha-card" id="stilo-legend">${recebeGato.nome}</legend>
      <button class="alinha-card" id="stilo-button" onclick="selectOption(${i})">adotar</button>
    </div>`;

  document.getElementById("container-produto").innerHTML += cartaoGato;
}

// criando opcoes dos gatos dinamicamente

const selectAnimalEscolha = document.getElementById("selectanimalEscolha");

for (const selectPet of catalogoGatos) {
  const optionElement = document.createElement("option");
  optionElement.value = selectPet.id;
  optionElement.text = selectPet.nome;

  selectAnimalEscolha.add(optionElement);
}

// criando uma forma de exibir no form o gato selecionado

const showSelectedPet = document.getElementById("showSelectedPet");

selectAnimalEscolha.addEventListener("change", function () {
  const selectedOptionIndex = selectAnimalEscolha.selectedIndex;
  const selectedPet = catalogoGatos[selectedOptionIndex - 1]; // Subtraindo 1 porque o primeiro option tem valor vazio
  showSelectedPet.textContent = `Selecionado: ${selectedPet.nome}`;
});

// tentando criar interatividade para o botao adotar

function selectOption(index) {
  //pegando meu select pelo id
  const select = document.getElementById("selectanimalEscolha");
  //pegando meu span pelo id
  const span = document.getElementById("showSelectedPet");
  // pegando nomes dos gatos pelo index
  const nomeSelecionado = catalogoGatos[index].nome;

  // Limpa o select e adiciona a opção selecionada

  select.innerHTML = "";

  const criandoOption = document.createElement("option");
  criandoOption.value = index;
  criandoOption.text = nomeSelecionado;
  select.appendChild(criandoOption);
  // atualizando o span dinamicamente ao executar function do button
  span.innerHTML = "";
  const createText = document.createTextNode(
    `Selecionado: ${nomeSelecionado} `
  );
  span.appendChild(createText);
}

// criando alerta para ser exibido ao enviar form

function alertSubmitForm() {
  // peguei button pelo id para manipular
  let pegandoSubmitForm = document.getElementById("enviar");
  // peguei form pela tag para manipular
  let pegandoForm = document.getElementsByTagName("form");
  // adicionando evento que ocorrera com o click
  pegandoSubmitForm.addEventListener("click", () => {
    // controlando o fluxo permitindo envio somente se true/ completo, se false envio brecado
    if (pegandoForm === true) {
      alert("Recebemos sua solicitação, aguarde o período para retorno.");
    } else {
      alert("Faltando preencher algo");
    }
  });
}
