// Captura os elementos da tela
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.querySelector('button[type="submit"]');

// Função que será chamada ao clicar no botão
const handleButtonClick = (event) => {
  event.preventDefault(); // Impede o comportamento padrão do formulário
  const email = emailInput.value;
  const password = passwordInput.value;

  const userDetails = {
    email,
    password,
  };

  // Exibe os dados no console
  console.log(userDetails);
};

// Adiciona um evento ao botão
submitButton.addEventListener("click", handleButtonClick);
