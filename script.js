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

// Seleciona um vídeo aleatório da lista
const video = videos[Math.floor(Math.random() * videos.length)];

// Cria um elemento de iframe para exibir o vídeo
const iframe = document.createElement("iframe");
iframe.src = video.src;
iframe.width = "560";
iframe.height = "315";
iframe.allowfullscreen = true;

// Adiciona o vídeo ao contêiner na página HTML
const container = document.getElementById("video-container");
container.appendChild(iframe);
const container1 = document.getElementById("video-container1");
container.appendChild(iframe);
const container2 = document.getElementById("video-container2");
container.appendChild(iframe);
const container3 = document.getElementById("video-container3");
container.appendChild(iframe);
