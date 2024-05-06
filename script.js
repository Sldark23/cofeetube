// Lista de vídeos
const videos = [
  {
    title: "FRUTAS DO BLOX FRUITS VS FRUTAS DO ANIME ONE PIECE",
    src: "https://www.youtube.com/embed/xZTFARpT2go"
  },
  {
    title: "E se o Apocalipse Acontecer Hoje? / Explosão nuclear",
    src: "https://www.youtube.com/embed/JbBGWcOqRao"
  },
  {
    title: "Unleash The Live #3 - Steven Universo: Libere o Prisma",
    src: "https://www.youtube.com/embed/656nhLzbrHQ"
  },
  {
    title: "AJUDOU a vizinha DIVORCIADA e ela se APAIXONOU por ele!!",
    src: "https://www.youtube.com/embed/JJsfPya13pk"
  },
  {
    title: "Passei 24 Horas Debaixo D'água - Desafio",
    src: "https://www.youtube.com/embed/6_im_hGxGRk"
  },
  {
    title: "glamrocks react totheir all aftonstheory • tw in desc • og ✋😩",
    src: "https://www.youtube.com/embed/ClKp5zIj3yc"
  },
  {
    title: "Tower of Fantasy - DON'T MAKE THESE MISTAKES!!!",
    src: "https://www.youtube.com/embed/zejEqoB23Xg"
  },
  {
    title: "Travis Scott - goosebumps ft. Kendrick Lamar",
    src: "https://www.youtube.com/embed/xtsn5OLWV1k"
  },
  {
    title: "Marshmello - Alone (Official Music Video)",
    src: "https://www.youtube.com/embed/0uISYKI3ymk"
  },
  {
    title: "Calvin Harris - This Is What You Came For (Official Video) ft. Rihanna",
    src: "https://www.youtube.com/embed/nHh_PCUOQw4"
  },
  {
    title: "The Chainsmokers & Coldplay - Something Just Like This (Lyric)",
    src: "https://www.youtube.com/embed/GfdTfeWkptk"
  },
  {
    title: "Daft Punk - Get Lucky (Official Audio) ft. Pharrell Williams, Nile Rodgers",
    src: "https://www.youtube.com/embed/UV3R7eKqNFI"
  },
  {
    title: "Ed Sheeran - Thinking Out Loud [Official Video]",
    src: "https://www.youtube.com/embed/56h0lNdO-Kk"
  },
  {
    title: "Camila Cabello - Havana ft. Young Thug [Official Video]",
    src: "https://www.youtube.com/embed/kX3nB4PpJko"
  }
];

// Função para exibir vídeos aleatórios na tela
function exibirVideosAleatorios() {
  const container1 = document.getElementById("video-container1");
  const container2 = document.getElementById("video-container2");
  const container3 = document.getElementById("video-container3");
  const container4 = document.getElementById("video-container4");

  // Embaralha a lista de vídeos
  const shuffledVideos = videos.sort(() => Math.random() - 0.5).slice(0, 4);

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

// Chamada da função para exibir vídeos aleatórios
exibirVideosAleatorios();
