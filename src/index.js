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

function getMotivation(theme) {
  const list = motivations[theme] || motivations.discipline;
  return list[Math.floor(Math.random() * list.length)];
}

function html() {
  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>MOTIVATION-M-BOT</title>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #102d50;
  color: white;
}

header {
  text-align: center;
  padding: 40px 20px 25px;
}

.robot {
  font-size: 75px;
}

h1 {
  font-size: 32px;
  margin: 10px 0;
}

.subtitle {
  font-size: 18px;
  line-height: 1.5;
}

.card {
  max-width: 650px;
  margin: 20px auto;
  padding: 28px;
  background: white;
  color: #17253a;
  border-radius: 28px;
}

button {
  border: 0;
  border-radius: 25px;
  padding: 14px 18px;
  margin: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

#result {
  margin-top: 25px;
  padding: 24px;
  border-radius: 20px;
  background: #f1f5f9;
  font-size: 20px;
  line-height: 1.5;
  font-weight: bold;
}
</style>
</head>

<body>

<header>
  <div class="robot">🤖</div>
  <h1>MOTIVATION-M-BOT</h1>
