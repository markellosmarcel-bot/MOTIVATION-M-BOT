const motivations = {
  discipline: [
    "La discipline te fait avancer même quand la motivation disparaît.",
    "Une petite action aujourd’hui vaut mieux qu’une grande intention demain.",
    "Fais maintenant ce que ton futur toi te remerciera d’avoir commencé."
  ],
  confiance: [
    "Crois en ta capacité d’apprendre, de progresser et de réussir.",
    "Tu n’as pas besoin d’être parfait pour commencer.",
    "Chaque étape franchie renforce ta confiance."
  ],
  reussite: [
    "La réussite se construit avec des actions répétées.",
    "Continue. Même lentement, tu avances.",
    "Transforme ton objectif en petites actions concrètes."
  ],
  argent: [
    "Apprends une compétence utile et transforme-la progressivement en valeur.",
    "Construis quelque chose qui peut servir aux autres.",
    "La patience et la régularité comptent autant que l’ambition."
  ],
  courage: [
    "Le courage, c’est avancer malgré le doute.",
    "N’attends pas de ne plus avoir peur pour commencer.",
    "Aujourd’hui, fais simplement la prochaine étape."
  ],
  travail: [
    "Concentre-toi sur la prochaine tâche, pas sur toute la montagne.",
    "Travaille intelligemment, régulièrement et avec patience.",
    "Chaque journée productive construit ton projet."
  ]
};

function getMotivation(theme = "discipline") {
  const list = motivations[theme] || motivations.discipline;
  return list[Math.floor(Math.random() * list.length)];
}

function page() {
  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>MOTIVATION-M-BOT</title>
<style>
*{box-sizing:border-box}
body{
  margin:0;
  font-family:Arial,sans-serif;
  background:#102d50;
  color:white;
}
header{
  text-align:center;
  padding:45px 20px 25px;
}
h1{font-size:30px;margin:10px 0}
.subtitle{font-size:18px;line-height:1.5;opacity:.9}
.card{
  background:white;
  color:#18263b;
  margin:20px auto;
  padding:28px;
  border-radius:28px;
  max-width:650px;
}
.robot{
  text-align:center;
  font-size:80px;
}
h2{font-size:25px}
button{
  border:0;
  border-radius:30px;
  padding:14px 20px;
  margin:6px;
  font-size:16px;
  font-weight:bold;
  background:#eef2f7;
  color:#18263b;
}
button:hover{transform:scale(1.03)}
#result{
  margin-top:25px;
  padding:25px;
  background:#f2f6fb;
  border-radius:20px;
  font-size:21px;
  line-height:1.5;
  font-weight:bold;
}
</style>
</head>
<body>

<header>
  <div class="robot">🤖</div>
  <h1>MOTIVATION-M-BOT</h1>
  <p class="subtitle">
    Ton allié pour avancer.<br>
    Une motivation à la fois.
  </p>
</header>

<section class="card">
  <h2>De quoi as-tu besoin aujourd'hui ?</h2>

  <button onclick="motivation('discipline')">🔥 Discipline</button>
  <button onclick="motivation('confiance')">🌟 Confiance</button>
  <button onclick="motivation('reussite')">🚀 Réussite</button>
  <button onclick="motivation('argent')">💼 Argent</button>
  <button onclick="motivation('courage')">💪 Courage</button>
  <button onclick="motivation('travail')">🎯 Travail</button>

  <div id="result">
    Choisis un thème pour recevoir ta motivation.
  </div>
</section>

<script>
async function motivation(theme){
  const result = document.getElementById("result");
  result.textContent = "🤖 Je prépare ta motivation...";

  try {
    const response = await fetch("/api/motivation?theme=" + theme);
    const data = await response.json();
    result.textContent = "✨ " + data.message;
  } catch(e) {
    result.textContent = "Une erreur est survenue. Réessaie.";
  }
}
</script>

</body>
</html>`;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/api/motivation") {
      const theme = url.searchParams.get("theme") || "discipline";

      return new Response(
        JSON.stringify({
          theme,
          message: getMotivation(theme)
        }),
        {
          headers: {
            "content-type": "application/json;charset=UTF-8",
            "access-control-allow-origin": "*"
          }
        }
      );
    }

    return new Response(page(), {
      headers: {
        "content-type": "text/html;charset=UTF-8"
      }
    });
  }
};
