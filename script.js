let Radiología = [
  {
    "HORA": "11:00",
    "ESPECIALISTA": "IGNACIO SCHULZ",
    "PACIENTE": "FRANCISCA ROJAS",
    "RUT": "9878782-1",
    "PREVISION": "FONASA"
  },
  {
    "HORA": "11:30",
    "ESPECIALISTA": "FEDERICO SUBERCASEAUX",
    "PACIENTE": "PAMELA ESTRADA",
    "RUT": "15345241-3",
    "PREVISION": "ISAPRE"
  },
  {
    "HORA": "15:00",
    "ESPECIALISTA": "FERNANDO WURTHZ",
    "PACIENTE": "ARMANDO LUNA",
    "RUT": "16445345-9",
    "PREVISION": "ISAPRE"
  },
  {
    "HORA": "15:30",
    "ESPECIALISTA": "ANA MARIA GODOY",
    "PACIENTE": "MANUEL GODOY",
    "RUT": "17666419-0",
    "PREVISION": "FONASA"
  },
  {
    "HORA": "16:00",
    "ESPECIALISTA": "PATRICIA SUAZO",
    "PACIENTE": "RAMON ULLOA",
    "RUT": "14989389-K",
    "PREVISION": "FONASA"
  }
]

let Traumatología = [
  {
    "HORA": "9:00",
    "ESPECIALISTA": "RENE POBLETE",
    "PACIENTE": "ANA GELLONA",
    "RUT": "13123329-7",
    "PREVISION": "ISAPRE"
  },
  {
    "HORA": "09:30",
    "ESPECIALISTA": "MARIA SOLAR",
    "PACIENTE": "RAMIRO ANDRADE",
    "RUT": "12221341-K",
    "PREVISION": "FONASA"
  },
  {
    "HORA": "10:00",
    "ESPECIALISTA": "RAUL LOYOLA",
    "PACIENTE": "CARMEN ISLA",
    "RUT": "10112348-3",
    "PREVISION": "ISAPRE"
  },
  {
    "HORA": "10:30",
    "ESPECIALISTA": "ANTONIO LARENAS",
    "PACIENTE": "PABLO LOAYZA",
    "RUT": "13454234-1",
    "PREVISION": "ISAPRE"
  },
  {
    "HORA": "12:00",
    "ESPECIALISTA": "MATIAS ARAVENA",
    "PACIENTE": "SUSANA POBLETE",
    "RUT": "14345656-6",
    "PREVISION": "FONASA"
  }
]

let Dental = [
  {
    "HORA": "8:30",
    "ESPECIALISTA": "ANDREA ZUÑIGA",
    "PACIENTE": "MARCELA RETAMAL",
    "RUT": "11123425-6",
    "PREVISION": "ISAPRE"
  },
  {
    "HORA": "11:00",
    "ESPECIALISTA": "MARIA PIA ZAÑARTU",
    "PACIENTE": "ANGEL MUÑOZ",
    "RUT": "9878789-2",
    "PREVISION": "ISAPRE"
  },
  {
    "HORA": "11:30",
    "ESPECIALISTA": "SCARLETT WITTING",
    "PACIENTE": "MARIO KAST",
    "RUT": "7998789-5",
    "PREVISION": "FONASA"
  },
  {
    "HORA": "13:00",
    "ESPECIALISTA": "FRANCISCO VON TEUBER",
    "PACIENTE": "KARIN FERNANDEZ",
    "RUT": "18887662-K",
    "PREVISION": "FONASA"
  },
  {
    "HORA": "13:30",
    "ESPECIALISTA": "EDUARDO VIÑUELA",
    "PACIENTE": "HUGO SANCHEZ",
    "RUT": "17665461-4",
    "PREVISION": "FONASA"
  },
  {
    "HORA": "14:00",
    "ESPECIALISTA": "RAQUEL VILLASECA",
    "PACIENTE": "ANA SEPULVEDA",
    "RUT": "14441281-0",
    "PREVISION": "ISAPRE"
  }
]

// DESAFÍO 1
/*
console.log(Radiología.length);
console.log(Traumatología.length);
console.log(Dental.length);

console.log(Radiología[0].RUT, "-", Radiología[0].PREVISION);
console.log(Radiología[4].RUT, "-", Radiología[4].PREVISION);

console.log(Traumatología[0].RUT, "-", Traumatología[0].PREVISION);
console.log(Traumatología[Traumatología.length - 1].RUT, "-", Traumatología[Traumatología.length - 1].PREVISION);

console.log(Dental[0].RUT, "-", Dental[0].PREVISION);
console.log(Dental[Dental.length - 1].RUT, "-", Dental[Dental.length - 1].PREVISION); 
*/

// DESAFÍO 2

Traumatología.shift();
console.log(Traumatología);

Traumatología.pop();
console.log(Traumatología);

Dental.forEach(function(parametro){
  document.write(`<p>${parametro.HORA} - ${parametro.ESPECIALISTA} - ${parametro.PACIENTE} - ${parametro.RUT} - ${parametro.PREVISION}</p>`)
})

var pacientes = Radiología.concat(Traumatología, Dental);
console.log(pacientes)
pacientes.forEach(function(nombre) {
  document.write(`<p>${nombre.PACIENTE}</p>`);
})
  
let dental = Dental.map(function(previsiones) {
  if (previsiones.PREVISION === "ISAPRE") {
    previsiones.PREVISION = "FONASA";
  } else if (previsiones.PREVISION === "FONASA") {
    previsiones.PREVISION = "ISAPRE"
  }
    return previsiones
    
  }
)
console.log(dental)

dental.forEach(function(param) {
  document.write(`${param.RUT}; ${param.PACIENTE}`);
})
