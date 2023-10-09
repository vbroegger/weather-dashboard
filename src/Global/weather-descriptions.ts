interface WeatherDescription {
  day: {
    description: string;
    image: string;
  };
  night: {
    description: string;
    image: string;
  };
}

interface WeatherDescriptions {
  [index: number]: WeatherDescription;
}

export const weatherDescriptions: WeatherDescriptions = {
  0: {
    day: {
      description: "Solrigt",
      image: "http://openweathermap.org/img/wn/01d@2x.png"
    },
    night: {
      description: "Klart",
      image: "http://openweathermap.org/img/wn/01n@2x.png"
    }
  },
  1: {
    day: {
      description: "Hovedsageligt solrigt",
      image: "http://openweathermap.org/img/wn/01d@2x.png"
    },
    night: {
      description: "Hovedsageligt klart",
      image: "http://openweathermap.org/img/wn/01n@2x.png"
    }
  },
  2: {
    day: {
      description: "Delvist overskyet",
      image: "http://openweathermap.org/img/wn/02d@2x.png"
    },
    night: {
      description: "Delvist overskyet",
      image: "http://openweathermap.org/img/wn/02n@2x.png"
    }
  },
  3: {
    day: {
      description: "Overskyet",
      image: "http://openweathermap.org/img/wn/03d@2x.png"
    },
    night: {
      description: "Overskyet",
      image: "http://openweathermap.org/img/wn/03n@2x.png"
    }
  },
  45: {
    day: {
      description: "Tåget",
      image: "http://openweathermap.org/img/wn/50d@2x.png"
    },
    night: {
      description: "Tåget",
      image: "http://openweathermap.org/img/wn/50n@2x.png"
    }
  },
  48: {
    day: {
      description: "Rimtåge",
      image: "http://openweathermap.org/img/wn/50d@2x.png"
    },
    night: {
      description: "Rimtåge",
      image: "http://openweathermap.org/img/wn/50n@2x.png"
    }
  },
  51: {
    day: {
      description: "Let dis",
      image: "http://openweathermap.org/img/wn/09d@2x.png"
    },
    night: {
      description: "Let dis",
      image: "http://openweathermap.org/img/wn/09n@2x.png"
    }
  },
  53: {
    day: {
      description: "Dis",
      image: "http://openweathermap.org/img/wn/09d@2x.png"
    },
    night: {
      description: "Dis",
      image: "http://openweathermap.org/img/wn/09n@2x.png"
    }
  },
  55: {
    day: {
      description: "Kraftig dis",
      image: "http://openweathermap.org/img/wn/09d@2x.png"
    },
    night: {
      description: "Kraftig dis",
      image: "http://openweathermap.org/img/wn/09n@2x.png"
    }
  },
  56: {
    day: {
      description: "Let frysende dis",
      image: "http://openweathermap.org/img/wn/09d@2x.png"
    },
    night: {
      description: "Let frysende dis",
      image: "http://openweathermap.org/img/wn/09n@2x.png"
    }
  },
  57: {
    day: {
      description: "Frysende dis",
      image: "http://openweathermap.org/img/wn/09d@2x.png"
    },
    night: {
      description: "Frysende dis",
      image: "http://openweathermap.org/img/wn/09n@2x.png"
    }
  },
  61: {
    day: {
      description: "Let regn",
      image: "http://openweathermap.org/img/wn/10d@2x.png"
    },
    night: {
      description: "Let regn",
      image: "http://openweathermap.org/img/wn/10n@2x.png"
    }
  },
  63: {
    day: {
      description: "Regn",
      image: "http://openweathermap.org/img/wn/10d@2x.png"
    },
    night: {
      description: "Regn",
      image: "http://openweathermap.org/img/wn/10n@2x.png"
    }
  },
  65: {
    day: {
      description: "Kraftig regn",
      image: "http://openweathermap.org/img/wn/10d@2x.png"
    },
    night: {
      description: "Kraftig regn",
      image: "http://openweathermap.org/img/wn/10n@2x.png"
    }
  },
  66: {
    day: {
      description: "Let frysende regn",
      image: "http://openweathermap.org/img/wn/10d@2x.png"
    },
    night: {
      description: "Let frysende regn",
      image: "http://openweathermap.org/img/wn/10n@2x.png"
    }
  },
  67: {
    day: {
      description: "Frysende regn",
      image: "http://openweathermap.org/img/wn/10d@2x.png"
    },
    night: {
      description: "Frysende regn",
      image: "http://openweathermap.org/img/wn/10n@2x.png"
    }
  },
  71: {
    day: {
      description: "Let sne",
      image: "http://openweathermap.org/img/wn/13d@2x.png"
    },
    night: {
      description: "Let sne",
      image: "http://openweathermap.org/img/wn/13n@2x.png"
    }
  },
  73: {
    day: {
      description: "Sne",
      image: "http://openweathermap.org/img/wn/13d@2x.png"
    },
    night: {
      description: "Sne",
      image: "http://openweathermap.org/img/wn/13n@2x.png"
    }
  },
  75: {
    day: {
      description: "Kraftig sne",
      image: "http://openweathermap.org/img/wn/13d@2x.png"
    },
    night: {
      description: "Kraftig sne",
      image: "http://openweathermap.org/img/wn/13n@2x.png"
    }
  },
  77: {
    day: {
      description: "Snefnug",
      image: "http://openweathermap.org/img/wn/13d@2x.png"
    },
    night: {
      description: "Snefnug",
      image: "http://openweathermap.org/img/wn/13n@2x.png"
    }
  },
  80: {
    day: {
      description: "Let byge",
      image: "http://openweathermap.org/img/wn/09d@2x.png"
    },
    night: {
      description: "Let byge",
      image: "http://openweathermap.org/img/wn/09n@2x.png"
    }
  },
  81: {
    day: {
      description: "Byge",
      image: "http://openweathermap.org/img/wn/09d@2x.png"
    },
    night: {
      description: "Byge",
      image: "http://openweathermap.org/img/wn/09n@2x.png"
    }
  },
  82: {
    day: {
      description: "Kraftig byge",
      image: "http://openweathermap.org/img/wn/09d@2x.png"
    },
    night: {
      description: "Kraftig byge",
      image: "http://openweathermap.org/img/wn/09n@2x.png"
    }
  },
  85: {
    day: {
      description: "Let snebyge",
      image: "http://openweathermap.org/img/wn/13d@2x.png"
    },
    night: {
      description: "Let snebyge",
      image: "http://openweathermap.org/img/wn/13n@2x.png"
    }
  },
  86: {
    day: {
      description: "Snebyge",
      image: "http://openweathermap.org/img/wn/13d@2x.png"
    },
    night: {
      description: "Snebyge",
      image: "http://openweathermap.org/img/wn/13n@2x.png"
    }
  },
  95: {
    day: {
      description: "Tordenvejr",
      image: "http://openweathermap.org/img/wn/11d@2x.png"
    },
    night: {
      description: "Tordenvejr",
      image: "http://openweathermap.org/img/wn/11n@2x.png"
    }
  },
  96: {
    day: {
      description: "Let tordenvejr med hagl",
      image: "http://openweathermap.org/img/wn/11d@2x.png"
    },
    night: {
      description: "Let tordenvejr med hagl",
      image: "http://openweathermap.org/img/wn/11n@2x.png"
    }
  },
  99: {
    day: {
      description: "Tordenvejr med hagl",
      image: "http://openweathermap.org/img/wn/11d@2x.png"
    },
    night: {
      description: "Tordenvejr med hagl",
      image: "http://openweathermap.org/img/wn/11n@2x.png"
    }
  }
};
