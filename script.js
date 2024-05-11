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

    // Função para exibir vídeos aleatórios na tela
    function exibirVideosAleatorios(videosList) {
      const container1 = document.getElementById("video-container1");
      const container2 = document.getElementById("video-container2");
      const container3 = document.getElementById("video-container3");
      const container4 = document.getElementById("video-container4");

      // Limpa os contêineres antes de exibir novos vídeos
      container1.innerHTML = "";
      container2.innerHTML = "";
      container3.innerHTML = "";
      container4.innerHTML = "";

      // Embaralha a lista de vídeos
      const shuffledVideos = videosList.sort(() => Math.random() - 0.5).slice(0, 4);

      // Exibe os vídeos nos contêineres
      for (let i = 0; i < shuffledVideos.length; i++) {
        const video = shuffledVideos[i];
        const iframe = document.createElement("iframe");
        iframe.src = video.src;
        iframe.width = "560";
        iframe.height = "315";
        iframe.allowfullscreen = true;

        // Adiciona o vídeo ao contêiner correspondente
        if (i === 0) {
          container1.appendChild(iframe);
        } else if (i === 1) {
          container2.appendChild(iframe);
        } else if (i === 2) {
          container3.appendChild(iframe);
        } else if (i === 3) {
          container4.appendChild(iframe);
        }
      }
    }

    // Função para pesquisar vídeos
    function pesquisarVideos() {
      const searchTerm = document.getElementById("search-input").value.toLowerCase();

      // Filtra os vídeos com base no termo de pesquisa
      const filteredVideos = videos.filter(video => video.title.toLowerCase().includes(searchTerm));

      // Exibe os vídeos filtrados
      exibirVideosAleatorios(filteredVideos);
    }

    // Chamada inicial para buscar e exibir vídeos aleatórios ao carregar a página
    fetchAndDisplayRandomVideos();
