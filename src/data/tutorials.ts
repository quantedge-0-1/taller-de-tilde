import type { TutorialProject } from "@/types";

export const tutorials: TutorialProject[] = [
  {
    id: "bolsa-macrame",
    title: "Bolsa de Macramé",
    description:
      "Crea una hermosa bolsa de macramé con solo dos nudos básicos. Perfecta para el mercado o la playa.",
    level: "Principiante",
    duration: "3 horas",
    emoji: "🪢",
    color: "#C4956A",
    materials: [
      "Hilo de macramé natural de 3mm (50 metros)",
      "Argolla de metal de 20cm",
      "Tijeras",
      "Cinta métrica",
    ],
    steps: [
      {
        number: 1,
        title: "Preparar los hilos",
        description:
          "Corta 16 hilos de 3 metros cada uno. Dóblalos por la mitad y únelos a la argolla metálica con un nudo lark's head (cabeza de alondra). Deberás tener 32 hebras colgando.",
        tips: [
          "Asegura la argolla a un gancho o perchero para trabajar más cómodo",
          "Agrupa los hilos en grupos de 4 para no confundirte",
          "Mantén la tensión uniforme al hacer el nudo inicial",
        ],
      },
      {
        number: 2,
        title: "Crear la base con nudo cuadrado",
        description:
          "Trabaja en grupos de 4 hilos. Haz nudos cuadrados alternados durante 15 filas para crear la red de la bolsa. El nudo cuadrado se hace con los 2 hilos exteriores sobre los 2 interiores.",
        tips: [
          "El nudo cuadrado = nudo derecho + nudo izquierdo",
          "Alterna los grupos en cada fila para crear la red",
          "Cuenta las filas para mantener uniformidad",
        ],
      },
      {
        number: 3,
        title: "Crear el cuerpo de la bolsa",
        description:
          "Continúa con nudos cuadrados sin alternar durante 20 filas más para crear las paredes de la bolsa. Aquí puedes variar la tensión para crear texturas diferentes.",
        tips: [
          "Nudos más juntos = bolsa más cerrada",
          "Nudos más separados = bolsa más abierta y liviana",
          "Puedes añadir cuentas de madera entre nudos para decorar",
        ],
      },
      {
        number: 4,
        title: "Cerrar la base y terminar",
        description:
          "Une todos los hilos en el centro de la base con un nudo de remate fuerte. Recorta los flecos al mismo largo (unos 8cm) y deshiláchala para crear un fleco decorativo. ¡Tu bolsa está lista!",
        tips: [
          "El nudo de cierre debe ser muy firme para que no se abra",
          "Usa un peine para suavizar el fleco final",
          "Puedes remojar la bolsa terminada para que los nudos asienten mejor",
        ],
      },
    ],
  },
  {
    id: "panuelo-seda",
    title: "Pañuelo de Seda Pintado",
    description:
      "Transforma un pañuelo de seda natural en una obra de arte única con tintes textiles y técnica de sal.",
    level: "Principiante",
    duration: "2 horas + secado",
    emoji: "🎨",
    color: "#9888C4",
    materials: [
      "Pañuelo de seda natural 90×90cm",
      "Tintes para seda (rosa, violeta, azul)",
      "Sal gruesa",
      "Alcohol isopropílico",
      "Cuencos de plástico",
      "Plástico de protección",
    ],
    steps: [
      {
        number: 1,
        title: "Preparar el espacio y la tela",
        description:
          "Cubre la mesa con plástico. Humedece el pañuelo de seda con agua limpia y extiéndelo sobre la superficie. La seda húmeda absorbe mejor el tinte.",
        tips: [
          "No escurras demasiado: la tela debe estar húmeda, no empapada",
          "Trabaja en un lugar bien ventilado",
          "Ten cerca toallas de papel para limpiar derrames",
        ],
      },
      {
        number: 2,
        title: "Aplicar los colores",
        description:
          "Con un pincel o cuentagotas, aplica los colores en manchas irregulares sobre la seda. Deja que los colores se mezclen naturalmente en los bordes. No te preocupes por la 'imperfección': eso es exactamente lo que queremos.",
        tips: [
          "Los colores se mezclarán solos en la seda húmeda",
          "Aplica primero los colores más claros y luego los oscuros",
          "Deja espacios sin color para crear contraste",
        ],
      },
      {
        number: 3,
        title: "Técnica de sal",
        description:
          "Mientras los colores aún están húmedos, esparce sal gruesa sobre la tela. Observa cómo la sal absorbe el tinte y crea patrones estrellados mágicos. Deja secar durante al menos 30 minutos.",
        tips: [
          "Cuanta más sal, más efecto estrellado",
          "No toques la tela mientras seca con la sal",
          "Espera a que esté completamente seca antes de quitar la sal",
        ],
      },
      {
        number: 4,
        title: "Fijado y terminación",
        description:
          "Quita la sal cepillando suavemente. Fija los colores según las instrucciones del tinte (generalmente con plancha o vapor durante 3-5 minutos). Lava a mano con agua fría y jabón neutro. ¡Tu pañuelo único está listo!",
        tips: [
          "Cada pañuelo es único: ¡nunca saldrán dos iguales!",
          "Plánchalo con la tela húmeda para mejores resultados",
          "Guárdalo enrollado, no doblado, para evitar arrugas permanentes",
        ],
      },
    ],
  },
  {
    id: "bufanda-tejida",
    title: "Bufanda de Punto Jersey",
    description:
      "Tu primera prenda tejida a dos agujas: una bufanda cálida y acogedora con punto jersey básico.",
    level: "Principiante",
    duration: "1 semana",
    emoji: "🧣",
    color: "#C4956A",
    materials: [
      "Lana gruesa (2 ovillos de 100g, color a elección)",
      "Agujas de tejer N° 6",
      "Aguja de coser con ojo grande",
      "Tijeras",
    ],
    steps: [
      {
        number: 1,
        title: "Montar los puntos",
        description:
          "Monta 20 puntos en la aguja usando el método del pulgar. Asegúrate de que queden uniformes y no demasiado apretados. Esta cantidad dará una bufanda de aproximadamente 15cm de ancho.",
        tips: [
          "Deja una cola de hilo de unos 20cm para rematar después",
          "Los puntos no deben quedar apretados en la aguja",
          "Cuenta los puntos al terminar para asegurarte de que son 20",
        ],
      },
      {
        number: 2,
        title: "Tejer el punto jersey",
        description:
          "Fila 1 (lado derecho): teje todos los puntos al derecho. Fila 2 (lado revés): teje todos los puntos al revés. Alterna estas dos filas. Esto crea el punto jersey liso que ves en los suéteres.",
        tips: [
          "Identifica siempre el lado derecho de la labor",
          "Usa un marcador de fila para no perder la cuenta",
          "Teje con tensión uniforme: ni muy apretado ni muy suelto",
        ],
      },
      {
        number: 3,
        title: "Continuar hasta el largo deseado",
        description:
          "Sigue tejiendo punto jersey hasta que la bufanda tenga al menos 150cm de largo. Esto toma varias sesiones de tejido. ¡Disfruta del proceso! Es un momento perfecto para escuchar música o ver una película.",
        tips: [
          "Mide desde el principio con cinta métrica",
          "Puedes cambiar de color añadiendo un nuevo ovillo en cualquier fila",
          "Si te equivocas, desahoga los puntos hasta el error y vuelve a tejer",
        ],
      },
      {
        number: 4,
        title: "Cerrar y rematar",
        description:
          "Cierra los puntos: teje 2 puntos juntos al derecho y pasa el primero sobre el segundo. Repite hasta el final. Corta el hilo dejando 20cm y pásalo por el último punto. Enhebra la aguja y esconde las hebras sueltas por el revés de la labor.",
        tips: [
          "El cierre no debe quedar ni muy apretado ni muy suelto",
          "Bloquea la bufanda: humedécela y extiéndela plana para que asiente",
          "¡Felicidades, tejiste tu primera prenda!",
        ],
      },
    ],
  },
  {
    id: "cojin-bordado",
    title: "Cojín con Bordado Floral",
    description:
      "Crea un cojín decorativo con un motivo floral bordado a mano. Un regalo perfecto hecho con amor.",
    level: "Intermedio",
    duration: "5 horas",
    emoji: "🌸",
    color: "#6B5B9E",
    materials: [
      "Tela de lino crudo (2 rectángulos de 40×40cm)",
      "Hilos de bordar (rosa, verde, crema, dorado)",
      "Relleno de guata (fibra sintética)",
      "Aro de bordar 25cm",
      "Aguja de bordar N° 5",
    ],
    steps: [
      {
        number: 1,
        title: "Diseñar y transferir el bordado",
        description:
          "Dibuja un ramo de flores en papel. Céntralo en uno de los rectángulos de lino y transfiérelo usando papel de calco o papel de carbón textil. El motivo debe quedar a unos 8cm del borde para dejar margen de costura.",
        tips: [
          "Mantén el diseño sencillo para empezar",
          "Flores redondas y hojas alargadas son fáciles de bordar",
          "El lino acepta bien la tinta soluble en agua para marcar",
        ],
      },
      {
        number: 2,
        title: "Bordar las flores",
        description:
          "Coloca la tela en el aro de bordar bien tensada. Borda los pétalos con punto satinado: rellena cada pétalo con puntadas paralelas muy juntas. Usa tonos rosados para las flores y dorado para los centros.",
        tips: [
          "El punto satinado requiere paciencia: puntadas cortas y paralelas",
          "Cambia la dirección del relleno según el pétalo para mayor textura",
          "El aro debe mantener la tela siempre bien tensa",
        ],
      },
      {
        number: 3,
        title: "Bordar las hojas y tallos",
        description:
          "Borda los tallos con punto de tallo (puntadas inclinadas que se superponen ligeramente) en verde oscuro. Las hojas se rellenan con punto satinado en verde más claro. Añade pequeños puntos de nudo francés como relleno o flores secundarias.",
        tips: [
          "El punto de tallo es perfecto para líneas curvas",
          "Varía los verdes: claro para el centro de la hoja, oscuro para el borde",
          "Los nudos franceses dan textura y dimensión",
        ],
      },
      {
        number: 4,
        title: "Confeccionar el cojín",
        description:
          "Coloca los dos rectángulos de lino cara con cara. Cose a máquina los cuatro lados dejando una apertura de 15cm en uno de ellos. Da vuelta, rellena con guata hasta que quede firme pero no duro. Cose la apertura a mano con puntada invisible.",
        tips: [
          "El relleno debe ser abundante para que el cojín tenga forma",
          "La costura a mano para cerrar debe quedar invisible",
          "Puedes añadir botones decorativos como cierre alternativo",
        ],
      },
    ],
  },
  {
    id: "delantal-costura",
    title: "Delantal de Costura Personalizado",
    description:
      "Crea tu propio delantal de trabajo para el atelier. Con bolsillos para hilos, tijeras y todo lo que necesitas.",
    level: "Intermedio",
    duration: "4 horas",
    emoji: "✂️",
    color: "#8B5C2A",
    materials: [
      "Tela de lona o denim (1 metro)",
      "Cinta al bies de 3 metros",
      "Hilo de coser resistente",
      "Botón grande decorativo (opcional)",
    ],
    steps: [
      {
        number: 1,
        title: "Cortar las piezas",
        description:
          "Corta el cuerpo del delantal (70×55cm), dos tiras largas para atar a la cintura (80×8cm cada una), una tira para el cuello (60×8cm) y tres bolsillos de diferentes tamaños para agujas, tijeras e hilos.",
        tips: [
          "Marca con tiza antes de cortar para mayor precisión",
          "El denim es más resistente pero más difícil de coser",
          "Los bolsillos deben ser funcionales: no demasiado pequeños",
        ],
      },
      {
        number: 2,
        title: "Preparar y coser los bolsillos",
        description:
          "Dobla el borde superior de cada bolsillo 2cm y cóselo para hacer un acabado limpio. Plancha los márgenes de los lados y la base hacia dentro. Coloca los bolsillos en el delantal y cóselos a máquina por tres lados.",
        tips: [
          "El bolsillo superior puede tener divisiones para organizar agujas",
          "Refuerza las esquinas superiores de los bolsillos con un triángulo de refuerzo",
          "Plancha bien cada doblez antes de coser",
        ],
      },
      {
        number: 3,
        title: "Ribetear los bordes",
        description:
          "Aplica la cinta al bies por todo el perímetro del delantal para dar un acabado profesional y resistente. La cinta al bies se dobla por la mitad sobre el borde y se cose a máquina o a mano.",
        tips: [
          "La cinta al bies debe quedar con la misma tensión en todo el borde",
          "En las esquinas, haz un pequeño pliegue en diagonal",
          "Elige un color de cinta que contraste o coordine con la tela",
        ],
      },
      {
        number: 4,
        title: "Añadir cintas y bordado personalizado",
        description:
          "Cose las cintas de la cintura y el cuello bien reforzadas. Opcionalmente, borda tu nombre o un motivo floral en el bolsillo principal. ¡Tu delantal es tu firma como costurera!",
        tips: [
          "Las cintas deben estar muy bien reforzadas: recibirán mucho tirón",
          "Un nombre bordado convierte el delantal en algo tuyo para siempre",
          "Plancha el delantal terminado para presentación perfecta",
        ],
      },
    ],
  },
];

export function getTutorialById(id: string): TutorialProject | undefined {
  return tutorials.find((t) => t.id === id);
}
