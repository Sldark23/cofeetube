// Função para fazer a requisição do arquivo JSON e exibir vídeos aleatórios
async function fetchAndDisplayRandomVideos() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/Sldark23/Lista-de-v-deo-Coffetube/main/v%C3%ADdeos.json');
    const data = await response.json();
    exibirVideosAleatorios(data);
  } catch (error) {
    console.error('Erro ao buscar e exibir vídeos:', error);
  }
}

// Chamada inicial para buscar e exibir vídeos aleatórios ao carregar a página
fetchAndDisplayRandomVideos();
