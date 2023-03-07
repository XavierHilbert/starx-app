export const json = {
  title: {
    "default": "STARx Parent Survey",
    "es": "Encuesta STARx para padres",
  },
  description:{
    "default": "A self administered version of the STARx survey for parents of patients.",
    "es": "Una versión autoadministrada de la encuesta STARx para padres de pacientes.",
  },
  pages: [
    {
      name: "page0",
      elements: [
        {
          type: "boolean",
          name: "dob.preq",
          title: {
            "default": "Is your child over 88 years of age?",
            "es": "¿Tiene su hijo 88 años o más?"
          },
          choices: ["Yes", "No"],
          isRequired: true,
        },
        {
          type: "boolean",
          name: "meds",
          title: {
            "default": "Does your child take medication?",
            "es": "¿Su hijo toma medicamentos?",
          }, 
          choices: [
            {
              value: 0,
              text: "Yes",
            },
            {
              value: 36,
              text: "No",
            },
          ],
          isRequired: true,
        },
      ],
    },
    {
      name: "page1",
      elements: [
        {
          type: "text",
          inputType: "integer",
          name: "patient.dob",
          title: {
            "default": "Please enter your child's year of birth",
            "es": "Por favor, introduzca le fecha de nacimiento de su hijo"
        },
          visibleIf: "{dob.preq} != Yes",
          min: 1933,
          max: 2023,
        },
        {
          type: "text",
          inputType: "integer",
          name: "patient.dod",
          title: {
            "default": "Please enter your child's year of diagnosis",
            "es": "Por favor ingrese su fecha de diagnóstico de su hijo"
          },
          min: 1933,
          max: 2023,
          visibleIf: "{dob.preq} != Yes",
        },
        {
          type: "dropdown",
          name: "patient.race",
          title: {
            "default": "Please enter your child's race",
            "es": "Por favor ingrese la raza de su hijo"
          },
          choices: [
            {
              value: "Prefer not to answer",
              text: {
                "default": "Prefer not to answer",
                "es": "Prefiero no responder"
            },
            },
            {
              value: "American Indian or Alaskan Native",
              text: {
                "default": "American Indian or Alaskan Native",
                "es": "Indio americano o nativo de Alaska",
              },
            },
            {
              value: "Asian",
              text: {
                "default": "Asian",
                "es": "Asiático",
              }
            },
            {
              value: "Black or African American",
              text: {
                "default": "Black or African American",
                "es": "Negro o afroamericano",
              }
            },
            {
              value: "Hispanic or Latino",
              text: {
                "default": "Hispanic or Latino",
                "es": "Hispano o latino",
              }
            },
            {
              value: "Native Hawaiian or Other Pacific Islander",
              text: {
                "deafult": "Native Hawaiian or Other Pacific Islander",
                "es": "Nativo hawaiano u otro isleño del Pacífico",
              }
            },
            {
              value: "White",
              text: {
                "deafult": "white",
                "es": "Blanco",
              }
            },
            {
              value: "Other",
              text: {
                "default": "other",
                "es": "Otra",
              }
            },
          ]
        },
        {
          type: "dropdown",
          name: "gender",
          title: {
            "default": "What is your child's self identified gender?",
            "es": "¿Cuál es su género autoidentificado de su hijo?"
          },
          choices: [
            {
              value: "Male",
              text: {
                "default": "Male",
                "es": "Hombre",
              }
            },
            {
              value: "Female",
              text: {
                "default": "Female",
                "es": "Mujer",
              }
            },
            {
              value: "Other",
              text: {
                "default": "Other",
                "es": "Otra",
              }
            },
            {
              value: "Prefer not to say",
              text: {
                "default": "Prefer not to say",
                "es": "Prefiero no responder",
              }
            },
          ],        
        },
        {
          type: "text",
          inputType: "number",
          name: "num.of.meds",
          title: {
            "default": "How many medications does your child take?",
            "es": "¿Cuántos medicamentos toma su hijo?",
          },
          visibleIf: "{meds} == 0",
          min: 1,
        },
      ],
    },
    {
      name: "page2",
      elements: [
        {
          type: "matrix",
          name: "section1",
          title:{
            "default": "Please check the one that shows how often you have done each thing in the past 3 months.",
            "es": "Por favor marque la frecuencia en cada situación durante los últimos 3 meses.",
          },
          columns: [
            {
              value: 1,
              text: {
                "default": "Never",
                "es": "Nunca",
              },            },
            {
              value: 2,
              text: {
                "default": "Almost Never",
                "es": "Casi nunca",
              },
            },
            {
              value: 3,
              text: {
                "default": "Sometimes",
                "es": "A veces",
              },
            },
            {
              value: 4,
              text: {
                "default": "Almost Always",
                "es": "Casi siempre",
              }
            },
            {
              value: 5,
              text: {
                "default": "Always",
                "es": "Siempre",
              },
            },
            {
              value: 0,
              text: {
                "default": "I do not take any medicine",
                "es": "No tomo ningún medicamento",
              }, 
            },
          ],
          rows: [
            {
              value: "q1",
              text:{
                "default": "How often did your child make an effort to understand what his/her doctor told them?",
                "es": "¿Con qué frecuencia trató su hijo de entender lo que decían sus médicos?",
              },
            },
            {
              value: "q2",
              text: {
                "default": "How often did your child take his/her medicines on your own?",
                "es": "¿Con qué frecuencia toma las medicinas por su cuenta?",
              },
              visibleIf: "{num.of.meds} != 0",
            },
            {
              value: "q3",
              text: {
                "default": "How often did your child ask his/her doctor or nurse questions about their illness, medicines or medical care?",
                "es": "¿Con qué frecuencia hace preguntas a su médico/enfermera/equipo de salud sobre su enfermedad, medicinas o atención médica?",
              },
            },
            {
              value: "q4",
              text: {
                "default": "How often did your child make their own appointments?",
                "es": "¿Con qué frecuencia solicita sus propias citas?",
              },
            },
            {
              value: "q5",
              text: {
                "default": "How often did your child need someone to remind him/her to take their medicines?",
                "es": "¿Con qué frecuencia necesita a alguien para recordarle a tomar sus medicinas?"
              },
              visibleIf: "{num.of.meds} != 0",
            },
            {
              value: "q6",
              text: {
                "default": "How often did your child use things like pillboxes, schedules, or alarm to help him/her take their medicines when they were supposed to?",
                "es": "¿Con qué frecuencia usa cosas como cajas para pastillas, calendarios o alarmas para ayudarle a recordar a tomar sus medicinas?",
              },
              visibleIf: "{num.of.meds} != 0",
            },
            {
              value: "q7",
              text: {
                "default": "How often did you use the internet, books or other guides to find out more about his/her illness?",
                "es": "¿Con qué frecuencia usa el Internet, libros u otras guías para averiguar más sobre su enfermedad?",
              },
            },
            {
              value: "q8",
              text: {
                "default": "How often did your child forget to take his/her medicines?",
                "es": "¿Con qué frecuencia olvida tomar sus medicinas?",
              },
              visibleIf: "{num.of.meds} != 0",
            },
            {
              value: "q9",
              text: {
                "default": "How often did your child work with his/her doctor to take care of new health problems that came up?",
                "es": "¿Con qué frecuencia discute o pregunta a su médico para ocuparse el manejo de nuevos problemas de salud que surgieron?",
              },
            },
          ],
          alternateRows: true,
          isAllRowRequired: true,
        },
        {
          type: "matrix",
          name: "section2",
          title: {
            "default": "Some patients know a lot about their heatlh and some patients do not. How much do you konw? Please check the best answer.",
            "es": "Algunos pacientes saben mucho acerca de su salud y algunos no saben mucho. Por favor marque la repuesta que describe mejor su situación HOY.",
          },
          columns: [
            {
              value: 1,
              text: {
                "default": "Nothing",
                "es": "Nada",
              },
            },
            {
              value: 2,
              text: {
                "default": "Not Much",
                "es": "Muy poco",
              },
            },
            {
              value: 3,
              text: {
                "default": "A Little",
                "es": "Poco",
              },
            },
            {
              value: 4,
              text: {
                "default": "Some",
                "es": "Algo",
              },
            },
            {
              value: 5,
              text: {
                "default": "A Lot",
                "es": "Mucho",
              },
            },
            {
              value: 0,
              text: {
                "default": "I do not take any medicine",
                "es": "No tomo ningún medicamento",
              }, 
            },
          ],
          rows: [
            {
              value: "q10",
              text: {
                "default": "How much do your child know about his/her illness?",
                "es": "¿Cuánto sabe acerca de su enfermedad?",
              },
            },
            {
              value: "q11",
              text: {
                "default": "How much do your child know about taking care of his/her illness?",
                "es": "¿Cuánto sabe sobre el cuidado de su enfermedad?",
              },
            },
            {
              value: "q12",
              text: {
                "default": "How much do your child know about what will happen if he/she do not take their medicine?",
                "es": "¿Cuánto sabe de lo que pasaría si no se toma sus medicinas?",
              },
              visibleIf: "{num.of.meds} != 0",
            },
          ],
          alternateRows: true,
          isAllRowRequired: true,
        },
        {
          type: "matrix",
          name: "section3",
          title: {
            "default": "Some patients may find it hard to do certain things. Please check what best describes how easy or hard you feel it would be for you.",
            "es": "Ciertas cosas son difíciles de hacer para algunos pacientes. ¿Qué tan fácil o difícil es hacer las siguientes cosas? Por favor marque la mejor respuesta que le describe HOY.",
          },
          columns: [
            {
              value: 1,
              text: {
                "default": "Very Hard",
                "es": "Muy difícil",
              },
            },
            {
              value: 2,
              text: {
                "default": "Somewhat Hard",
                "es": "Algo difícil",
              },
            },
            {
              value: 3,
              text: {
                "default": "Neither Hard nor Easy",
                "es": "Más o Menos",
              },
            },
            {
              value: 4,
              text: {
                "default": "Somewhat Easy",
                "es": "Algo fácil",
              },
            },
            {
              value: 5,
              text: {
                "default": "Very Easy",
                "es": "Muy fácil",
              },
            },
            {
              value: 0,
              text: {
                "default": "I do not take any medicine",
                "es": "No tomo ningún medicamento",
              }, 
            },
          ],
          rows: [
            {
              value: "q13",
              text: {
                "default": "How easy or hard is it for your child to talk to his/her doctor?",
                "es": "¿Qué tan fácil o difícil es hablar con su médico?",
              },
            },
            {
              value: "q14",
              text: {
                "default": "How easy or hard is it for your child to make a plan with his/her doctor to care for your health?",
                "es": "¿Qué tan fácil o difícil es hacer un plan de tratamiento con su médico para cuidar por su salud?",
              },
            },
            {
              value: "q15",
              text: {
                "default": "How easy or hard is it for your child see his/her doctor by himself or herself?",
                "es": "¿Qué tan fácil o difícil es ver a su médico usted mismo(a) solo(a), sin sus padres?",
              },
            },
            {
              value: "q16",
              text: {
                "default": "How easy or hard is it for your child to take his/her medicines the way they are supposed to be taken?",
                "es": "¿Qué tan fácil o difícil es tomar sus medicinas en la manera y tiempo correctos?",
              },

              visibleIf: "{num.of.meds} != 0",
            },
            {
              value: "q17",
              text: {
                "default": "How easy or hard is it for your child to take care of himself/herself?",
                "es": "¿Qué tan fácil o difícil es cuidar por usted mismo(a)?",
              },
            },
            {
              value: "q18",
              text: {
                "default": "How easy or hard do your child think it will be for you to move from pediatrics to adult-focused care?",
                "es": "¿Qué tan fácil o difícil será hacer un transición/cambio hacia los médicos de adultos?",
              },
            },
          ],
        },
      ],
    },
  ],
  showQuestionNumbers: "on",
  calculatedValues: [
    {
      name: "score1",
      expression:
        "{section1.q1} + {section1.q2} + {section1.q3} + {section1.q4} + {section1.q5}+ {section1.q6} + {section1.q7} + {section1.q8} + {section1.q9}",
        includeIntoResult: true,
    },
    {
      name: "score2",
      expression: "{section2.q10} + {section2.q11} + {section2.q12}",
      includeIntoResult: true,
    },
    {
      name: "score3",
      expression: "{section3.q13} + {section3.q14} + {section3.q15} + {section3.q16} + {section3.q17} + {section3.q18}",
      includeIntoResult: true,
    }
  ],
  completedHtml:
    "<h2>Thank you for completing the survey</h2></br><h2>Your child's readiness score is {score} </h2> </br> <h2> Contact your provider to interpret this score. </h2> </br><h2>For resources on how to improve your skills, visit <a href = https://www.med.unc.edu/transition/transition-tools/copy_of_educational-handouts-for-trxansition-indextm/>our resources page</a></h2>",
};
