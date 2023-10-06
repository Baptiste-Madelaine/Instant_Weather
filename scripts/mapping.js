const weatherMappings = {
    0: {
      description: "Soleil",
      icon: "wi-day-sunny.svg"
    },
    1: {
      description: "Peu nuageux",
      icon: "wi-cloudy.svg"
    },
    2: {
      description: "Ciel voilé",
      icon: "wi-cloud.svg"
    },
    3: {
      description: "Nuageux",
      icon: "wi-cloudy.svg"
    },
    4: {
      description: "Très nuageux",
      icon: "wi-cloudy.svg"
    },
    5: {
      description: "Couvert",
      icon: "wi-cloudy.svg"
    },
    6: {
      description: "Brouillard",
      icon: "wi-fog.svg"
    },
    7: {
      description: "Brouillard givrant",
      icon: "wi-fog.svg"
    },
    10: {
      description: "Pluie faible",
      icon: "wi-rain.svg"
    },
    11: {
      description: "Pluie modérée",
      icon: "wi-rain.svg"
    },
    12: {
      description: "Pluie forte",
      icon: "wi-rain.svg"
    },
    13: {
      description: "Pluie faible verglaçante",
      icon: "wi-rain.svg"
    },
    14: {
      description: "Pluie modérée verglaçante",
      icon: "wi-rain.svg"
    },
    15: {
      description: "Pluie forte verglaçante",
      icon: "wi-rain.svg"
    },
    16: {
      description: "Bruine",
      icon: "wi-sprinkle.svg"
    },
    20: {
      description: "Neige faible",
      icon: "wi-snow.svg"
    },
    21: {
      description: "Neige modérée",
      icon: "wi-snow.svg"
    },
    22: {
      description: "Neige forte",
      icon: "wi-snow.svg"
    },
    30: {
      description: "Pluie et neige mêlées faibles",
      icon: "wi-rain-mix.svg"
    },
    31: {
      description: "Pluie et neige mêlées modérées",
      icon: "wi-rain-mix.svg"
    },
    32: {
      description: "Pluie et neige mêlées fortes",
      icon: "wi-rain-mix.svg"
    },
    40: {
      description: "Averses de pluie locales et faibles",
      icon: "wi-showers.svg"
    },
    41: {
      description: "Averses de pluie locales",
      icon: "wi-showers.svg"
    },
    42: {
      description: "Averses locales et fortes",
      icon: "wi-showers.svg"
    },
    43: {
      description: "Averses de pluie faibles",
      icon: "wi-showers.svg"
    },
    44: {
      description: "Averses de pluie",
      icon: "wi-showers.svg"
    },
    45: {
      description: "Averses de pluie fortes",
      icon: "wi-showers.svg"
    },
    46: {
      description: "Averses de pluie faibles et fréquentes",
      icon: "wi-showers.svg"
    },
    47: {
      description: "Averses de pluie fréquentes",
      icon: "wi-showers.svg"
    },
    48: {
      description: "Averses de pluie fortes et fréquentes",
      icon: "wi-showers.svg"
    },
    60: {
      description: "Averses de neige localisées et faibles",
      icon: "wi-snow.svg"
    },
    61: {
      description: "Averses de neige localisées",
      icon: "wi-snow.svg"
    },
    62: {
      description: "Averses de neige localisées et fortes",
      icon: "wi-snow.svg"
    },
    63: {
      description: "Averses de neige faibles",
      icon: "wi-snow.svg"
    },
    64: {
      description: "Averses de neige",
      icon: "wi-snow.svg"
    },
    65: {
      description: "Averses de neige fortes",
      icon: "wi-snow.svg"
    },
    66: {
      description: "Averses de neige faibles et fréquentes",
      icon: "wi-snow.svg"
    },
    67: {
      description: "Averses de neige fréquentes",
      icon: "wi-snow.svg"
    },
    68: {
      description: "Averses de neige fortes et fréquentes",
      icon: "wi-snow.svg"
    },
    70: {
      description: "Averses de pluie et neige mêlées localisées et faibles",
      icon: "wi-rain-mix.svg"
    },
    71: {
      description: "Averses de pluie et neige mêlées localisées",
      icon: "wi-rain-mix.svg"
    },
    72: {
      description: "Averses de pluie et neige mêlées localisées et fortes",
      icon: "wi-rain-mix.svg"
    },
    73: {
      description: "Averses de pluie et neige mêlées faibles",
      icon: "wi-rain-mix.svg"
    },
    74: {
      description: "Averses de pluie et neige mêlées",
      icon: "wi-rain-mix.svg"
    },
    75: {
      description: "Averses de pluie et neige mêlées fortes",
      icon: "wi-rain-mix.svg"
    },
    76: {
      description: "Averses de pluie et neige mêlées faibles et nombreuses",
      icon: "wi-rain-mix.svg"
    },
    77: {
      description: "Averses de pluie et neige mêlées fréquentes",
      icon: "wi-rain-mix.svg"
    },
    78: {
      description: "Averses de pluie et neige mêlées fortes et fréquentes",
      icon: "wi-rain-mix.svg"
    },
    100: {
      description: "Orages faibles et locaux",
      icon: "wi-thunderstorm.svg"
    },
    101: {
      description: "Orages locaux",
      icon: "wi-thunderstorm.svg"
    },
    102: {
      description: "Orages forts et locaux",
      icon: "wi-thunderstorm.svg"
    },
    103: {
      description: "Orages faibles",
      icon: "wi-thunderstorm.svg"
    },
    104: {
      description: "Orages",
      icon: "wi-thunderstorm.svg"
    },
    105: {
      description: "Orages forts",
      icon: "wi-thunderstorm.svg"
    },
    106: {
      description: "Orages faibles et fréquents",
      icon: "wi-thunderstorm.svg"
    },
    107: {
      description: "Orages fréquents",
      icon: "wi-thunderstorm.svg"
    },
    108: {
      description: "Orages forts et fréquents",
      icon: "wi-thunderstorm.svg"
    },
    120: {
      description: "Orages faibles et locaux de neige ou grésil",
      icon: "wi-thunderstorm.svg"
    },
    121: {
      description: "Orages locaux de neige ou grésil",
      icon: "wi-thunderstorm.svg"
    },
    122: {
      description: "Orages locaux de neige ou grésil",
      icon: "wi-thunderstorm.svg"
    },
    123: {
      description: "Orages faibles de neige ou grésil",
      icon: "wi-thunderstorm.svg"
    },
    124: {
      description: "Orages de neige ou grésil",
      icon: "wi-thunderstorm.svg"
    },
    125: {
      description: "Orages de neige ou grésil",
      icon: "wi-thunderstorm.svg"
    },
    126: {
      description: "Orages faibles et fréquents de neige ou grésil",
      icon: "wi-thunderstorm.svg"
    },
    127: {
      description: "Orages fréquents de neige ou grésil",
      icon: "wi-thunderstorm.svg"
    },
    128: {
      description: "Orages fréquents de neige ou grésil",
      icon: "wi-thunderstorm.svg"
    },
    130: {
      description: "Orages faibles et locaux de pluie et neige mêlées ou grésil",
      icon: "wi-thunderstorm.svg"
    },
    131: {
      description: "Orages locaux de pluie et neige mêlées ou grésil",
      icon: "wi-thunderstorm.svg"
    },
    132: {
      description: "Orages fort et locaux de pluie et neige mêlées ou grésil",
      icon: "wi-thunderstorm.svg"
    },
    133: {
      description: "Orages faibles de pluie et neige mêlées ou grésil",
      icon: "wi-thunderstorm.svg"
    },
    134: {
      description: "Orages de pluie et neige mêlées ou grésil",
      icon: "wi-thunderstorm.svg"
    },
    135: {
      description: "Orages forts de pluie et neige mêlées ou grésil",
      icon: "wi-thunderstorm.svg"
    },
    136: {
      description: "Orages faibles et fréquents de pluie et neige mêlées ou grésil",
      icon: "wi-thunderstorm.svg"
    },
    137: {
      description: "Orages fréquents de pluie et neige mêlées ou grésil",
      icon: "wi-thunderstorm.svg"
    },
    138: {
      description: "Orages forts et fréquents de pluie et neige mêlées ou grésil",
      icon: "wi-thunderstorm.svg"
    },
    140: {
      description: "Pluies orageuses",
      icon: "wi-thunderstorm.svg"
    },
    141: {
      description: "Pluie et neige mêlées à caractère orageux",
      icon: "wi-thunderstorm.svg"
    },
    142: {
      description: "Neige à caractère orageux",
      icon: "wi-thunderstorm.svg"
    },
    210: {
      description: "Pluie faible intermittente",
      icon: "wi-showers.svg"
    },
    211: {
      description: "Pluie modérée intermittente",
      icon: "wi-showers.svg"
    },
    212: {
      description: "Pluie forte intermittente",
      icon: "wi-showers.svg"
    },
    220: {
      description: "Neige faible intermittente",
      icon: "wi-snow.svg"
    },
    221: {
      description: "Neige modérée intermittente",
      icon: "wi-snow.svg"
    },
    222: {
      description: "Neige forte intermittente",
      icon: "wi-snow.svg"
    },
    230: {
      description: "Pluie et neige mêlées",
      icon: "wi-rain-mix.svg"
    },
    231: {
      description: "Pluie et neige mêlées",
      icon: "wi-rain-mix.svg"
    },
    232: {
      description: "Pluie et neige mêlées",
      icon: "wi-rain-mix.svg"
    },
    235: {
      description: "Averses de grêle",
      icon: "wi-hail.svg"
    }
  };
  
  function getWeatherInfo(code) {
    const mapping = weatherMappings[code];
    if (mapping) {
      return mapping;
    } else {
      return {
        description: "Code météo non trouvé",
        icon: "wi-na.svg"
      };
    }
  }
  