const motivations = {
  discipline: [
    "La discipline te fait avancer même quand la motivation disparaît.",
    "Une petite action aujourd'hui vaut mieux qu'une grande intention demain.",
    "Fais maintenant ce que ton futur toi te remerciera d'avoir fait.",
    "La constance transforme les petits efforts en grands résultats."
  ],

  confiance: [
    "Crois en ta capacité d'apprendre, de progresser et de recommencer.",
    "Tu n'as pas besoin d'être parfait pour commencer.",
    "Chaque étape franchie renforce ta confiance.",
    "Ne laisse pas un mauvais jour définir ton potentiel."
  ],

  réussite: [
    "La réussite se construit avec des actions répétées.",
    "Continue. Même lentement, tu avances.",
    "Transforme ton objectif en petites actions réalisables.",
    "Ce que tu construis aujourd'hui peut changer ton avenir."
  ],

  courage: [
    "Le courage, ce n'est pas l'absence de peur : c'est avancer malgré elle.",
    "N'abandonne pas simplement parce que le chemin est difficile.",
    "Tu es plus capable que tu ne le crois.",
    "Chaque difficulté peut devenir une leçon."
  ]
};

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateMotivation(category) {
  const key = category && motivations[category]
    ? category
    : randomItem(Object.keys(motivations));

  return {
    category: key,
    message: randomItem(motivations[key]),
    date: new Date().toISOString()
  };
}

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/") {
      return new Response(
        JSON.stringify({
          bot: "MOTIVATION-M-BOT",
          status: "online",
          message: "Le bot fonctionne correctement.",
          endpoints: [
            "/motivation",
            "/motivation?category=discipline",
            "/motivation?category=confiance",
            "/motivation?category=reussite",
            "/motivation?category=courage"
          ]
        }, null, 2),
        {
          headers: {
            "Content-Type": "application/json; charset=UTF-8"
          }
        }
      );
    }

    if (url.pathname === "/motivation") {
      const category = url.searchParams.get("category");
      const result = generateMotivation(category);

      return new Response(JSON.stringify(result, null, 2), {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          "Cache-Control": "no-store"
        }
      });
    }

    return new Response(
      JSON.stringify({
        error: "Route introuvable"
      }),
      {
        status: 404,
        headers: {
          "Content-Type": "application/json; charset=UTF-8"
        }
      }
    );
  }
};
