export interface Question {
    id?:number,
    question: string,
    type:number
};

export const questions:Question[] = [
   {
    id:1,
    question: "Tengo una vida gratificante fuera de mi trabajo.",
    type: 1
   },
  
   {
    id:2,
    question: "Aparto y me comprometo a pasar tiempo con mis amigos.",
    type: 4
   },
   {
    id:3,
    question: "Estoy consciente de problemas o conflictos emocionales y estoy haciendo algo para resolverlos.",
    type: 7
   },
   {
    id:4,
    question: "Tengo noches y fines de semana libres/ tomo vacaciones regularmente.",
    type: 2
   },
  
   {
    id:5,
    question: "Mi trabajo es gratificante y satisfactorio.",
    type: 6
   },
   {
    id:6,
    question: "Me río en voz alta todos los días.",
    type: 5
   },
  
   {
    id:7,
    question: "Aparto un tiempo especial para pasar con mis relaciones (esposo, hijos, familia, amigos cercanos) cada semana.",
    type: 3
   },
  ];
