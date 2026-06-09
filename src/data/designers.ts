import type { Designer } from "@/types";

export const designers: Designer[] = [
  {
    id: "coco-chanel",
    name: "Coco Chanel",
    years: "1883 – 1971",
    origin: "Francia",
    emoji: "⚜️",
    color: "#1C1C1E",
    accentColor: "#C4956A",
    philosophy:
      "La elegancia no es ser notada, es ser recordada. Chanel liberó a la mujer de la rigidez decorativa y apostó por la comodidad con clase.",
    biography:
      "Gabrielle Bonheur Chanel, conocida como Coco, nació en Saumur, Francia. Comenzó su carrera como costurera y diseñadora de sombreros antes de fundar su casa de moda en París en 1910. Revolucionó la moda femenina al introducir prendas cómodas y funcionales en una época dominada por corsés y excesos decorativos. Su traje de tweed, el pequeño vestido negro y el perfume N°5 son íconos inmortales de la cultura.",
    keyDesigns: [
      "El pequeño vestido negro (1926)",
      "El traje de tweed Chanel",
      "El bolso 2.55 con cadena dorada",
      "Perfume Chanel N°5",
      "Las sandalias con puntera bicolor",
    ],
    techniques: [
      "Uso del jersey de punto (inusual para su época)",
      "Forros interiores que caen perfectamente",
      "Trenzado con cadena de metal en los dobladillos",
      "Drapeado suave sin estructura rígida",
      "Acabados con galón y botones dorados",
    ],
    legacy:
      "Chanel redefinió lo que significa ser una mujer elegante. Su filosofía de que la simplicidad es la máxima sofisticación sigue vigente un siglo después. La Maison Chanel continúa siendo uno de los pilares de la alta moda mundial.",
    exercise:
      "Inspírate en Chanel: diseña una chaqueta de tweed en papel usando solo tres colores: beige, negro y dorado. Añade un borde de galón y botones dorados. Recuerda que menos es más.",
  },
  {
    id: "christian-dior",
    name: "Christian Dior",
    years: "1905 – 1957",
    origin: "Francia",
    emoji: "🌹",
    color: "#8B1A1A",
    accentColor: "#9888C4",
    philosophy:
      "Soñé con una moda de flores: mujeres que se asemejan a las flores, con hombros suaves como pétalos, cinturas ceñidas, faldas llenas como corolas.",
    biography:
      "Christian Dior nació en Granville, Normandía. Después de años trabajando para otras casas de moda, lanzó su propia maison en 1946. En 1947 presentó su primera colección, bautizada por la prensa como 'New Look', que transformó radicalmente la moda de posguerra con siluetas femeninas, lujosas y opulentas. Su influencia definió la feminidad durante décadas.",
    keyDesigns: [
      "El New Look (Bar Jacket, 1947)",
      "Vestido de baile Zemire",
      "El vestido de línea A",
      "La silueta Tulip (1953)",
      "El vestido de noche Princess",
    ],
    techniques: [
      "Estructura interna de corsé en los cuerpos",
      "Faldas con múltiples capas de tul",
      "Hombros naturales y redondeados",
      "Cintura perfectamente marcada con entretela rígida",
      "Uso magistral de la seda y el tafetán",
    ],
    legacy:
      "Dior devolvió el optimismo y el glamour a una Europa devastada por la guerra. Creó una visión de feminidad lujosa que sigue siendo referencia en la alta costura. Hoy la Maison Dior es dirigida por Maria Grazia Chiuri, quien honra ese legado.",
    exercise:
      "Dibuja una silueta inspirada en el New Look: cintura muy marcada, falda a media pantorrilla con mucho vuelo. Usa telas con textura para el boceto: papel de seda pegado como si fuera tafetán.",
  },
  {
    id: "yves-saint-laurent",
    name: "Yves Saint Laurent",
    years: "1936 – 2008",
    origin: "Francia / Argelia",
    emoji: "🕶️",
    color: "#2C3E6A",
    accentColor: "#C4956A",
    philosophy:
      "La moda pasa, el estilo permanece. Saint Laurent fue el primero en trasladar la cultura pop, el arte y la calle a la alta costura.",
    biography:
      "Yves Henri Donat Mathieu-Saint-Laurent nació en Orán, Argelia. Asistió a la Chambre Syndicale de la Couture en París y a los 21 años fue nombrado director artístico de Dior tras la muerte de Christian Dior. En 1961 fundó su propia maison junto a Pierre Bergé. Fue pionero en introducir el prêt-à-porter de lujo y en celebrar la diversidad cultural en la moda.",
    keyDesigns: [
      "Le Smoking (esmoquin femenino, 1966)",
      "Vestidos Mondrian (1965)",
      "La colección Safari (1968)",
      "La colección rusa (1976)",
      "Los vestidos de inspiración africana",
    ],
    techniques: [
      "Estructura masculina aplicada a la figura femenina",
      "Bloques de color geométrico (inspirados en Mondrian)",
      "Drapeado fluido en tejidos ligeros",
      "Combinación de estampados culturales",
      "Sastrería impecable en chaquetas",
    ],
    legacy:
      "YSL revolucionó la concepción de género en la moda al vestir a la mujer con poder y autoridad sin perder feminidad. El Musée Yves Saint Laurent en París y Marrakech preserva su trabajo como arte.",
    exercise:
      "Recrea una versión personal de los vestidos Mondrian: divide un rectángulo en bloques geométricos y coloréalos en rojo, azul, amarillo y negro. Mantén líneas limpias y contrastes fuertes.",
  },
  {
    id: "gianni-versace",
    name: "Gianni Versace",
    years: "1946 – 1997",
    origin: "Italia",
    emoji: "🔱",
    color: "#8B1A1A",
    accentColor: "#C4956A",
    philosophy:
      "No quiero ser tímido con la moda. Quiero que la gente se vea hermosa, fuerte y gloriosa. Versace celebraba el exceso con maestría.",
    biography:
      "Giovanni Maria Versace nació en Reggio Calabria, Italia. Aprendió costura junto a su madre modista y en 1978 fundó su casa de moda en Milán. Versace creó un universo de glamour extremo, colores vibrantes y estampados icónicos que se convirtieron en símbolo de los años 80 y 90. Sus vestidos fueron el sueño de las supermodelos de la era dorada.",
    keyDesigns: [
      "El vestido de oro con imperdibles (Elizabeth Hurley, 1994)",
      "Estampado de Medusa",
      "Vestido de baño dorado de Madonna",
      "La chaqueta bondage (1992)",
      "Colección Versace x Superman (1995)",
    ],
    techniques: [
      "Cuero y metal combinados",
      "Estampados de gran escala en sedas pesadas",
      "Bordados con lentejuelas y pedrería",
      "Imperdibles y elementos metálicos como accesorio",
      "Cortes que exhiben el cuerpo con confianza",
    ],
    legacy:
      "Versace elevó el sexapil a arte y convirtió cada desfile en un espectáculo global. Donatella Versace continúa el legado de su hermano con la misma energía salvaje y colorida.",
    exercise:
      "Diseña un estampado inspirado en Versace: usa la cabeza de Medusa como elemento central, rodeada de cadenas doradas, laureles y grecas griegas. Sé audaz con los colores: negro, oro y rojo.",
  },
  {
    id: "valentino",
    name: "Valentino Garavani",
    years: "1932 – presente",
    origin: "Italia",
    emoji: "🌺",
    color: "#8B0000",
    accentColor: "#C4956A",
    philosophy:
      "El rojo Valentino no es un color, es una declaración. La elegancia italiana en su forma más pura: estructura, color y romanticismo.",
    biography:
      "Valentino Clemente Ludovico Garavani nació en Voghera, Italia. Estudió moda en París y trabajó con Guy Laroche y Jean Dessès antes de fundar su propia maison en Roma en 1959. Valentino creó un universo de rojo intenso, encajes, bordados y romanticismo extremo que vistió a las mujeres más influyentes del siglo XX, incluyendo a Jacqueline Kennedy.",
    keyDesigns: [
      "El rojo Valentino (firma icónica)",
      "Vestido de novia de Jacqueline Kennedy (1968)",
      "Colección White de 1968",
      "Vestidos de encaje bordado",
      "La chaqueta de rosas tridimensionales",
    ],
    techniques: [
      "Encaje bordado en Valentino Red",
      "Flores de tela aplicadas tridimensionalmente",
      "Estructura sin costuras visibles",
      "Bordado a mano con pedrería",
      "Uso magistral del organza en capas",
    ],
    legacy:
      "Valentino definió el glamour italiano con un romanticismo eterno. Su rojo inconfundible es una de las identidades visuales más poderosas de la historia de la moda. Piccioli, su sucesor, lleva ese legado al siglo XXI.",
    exercise:
      "Crea un boceto de un vestido de noche en Valentino Red. Añade flores de tela en el hombro, encaje en el escote y una falda larga con vuelo suave. El objetivo: máximo romanticismo.",
  },
  {
    id: "giorgio-armani",
    name: "Giorgio Armani",
    years: "1934 – presente",
    origin: "Italia",
    emoji: "⬛",
    color: "#3A3A3A",
    accentColor: "#B8A088",
    philosophy:
      "La elegancia no es llamar la atención, sino ser recordado. Armani desestructuró el traje y liberó al cuerpo con sastrería perfecta.",
    biography:
      "Giorgio Armani nació en Piacenza, Italia. Estudió medicina antes de dedicarse a la moda, trabajando primero en Rinascente y luego como asistente de Nino Cerruti. En 1975 fundó su propia maison. Armani revolucionó la sastrería masculina y luego la femenina con una visión sin géneros, fluida y sofisticada. Vistió a Richard Gere en American Gigolo y transformó para siempre la relación entre moda y cine.",
    keyDesigns: [
      "El traje desestructurado (sin entretela rígida)",
      "El blazer femenino oversize",
      "Colección Le Fumoir (pantalón de mujer)",
      "Los vestidos de Cate Blanchett en los Oscar",
      "La línea Emporio Armani (democratización del lujo)",
    ],
    techniques: [
      "Desestructuración: eliminar entretelas y hombros rígidos",
      "Sastrería italiana con caída natural",
      "Paleta neutra: beige, gris, negro, camel",
      "Drapeado en jersey de seda",
      "Mezcla de tejidos de diferente peso en una misma prenda",
    ],
    legacy:
      "Armani demostró que el lujo no necesita adornos: la calidad del tejido y la perfección del corte son suficientes. Su filosofía minimalista influyó en toda una generación de diseñadores.",
    exercise:
      "Diseña un traje femenino inspirado en Armani: blazer de hombros suaves, pantalón de tiro alto y blusa de seda. Usa solo tres colores de su paleta: gris perla, camel y blanco roto.",
  },
  {
    id: "karl-lagerfeld",
    name: "Karl Lagerfeld",
    years: "1933 – 2019",
    origin: "Alemania",
    emoji: "🤍",
    color: "#1C1C1E",
    accentColor: "#9888C4",
    philosophy:
      "Quien use joyas reales no tiene imaginación. Lagerfeld fue un maestro de la reinvención, dando nueva vida a Chanel durante cuatro décadas.",
    biography:
      "Karl Otto Lagerfeld nació en Hamburgo, Alemania. A los 14 años se mudó a París donde comenzó su carrera. Trabajó para Balmain, Patou, Chloé y Fendi antes de convertirse en director creativo de Chanel en 1983. Lagerfeld reinventó Chanel para la era moderna sin traicionar su esencia, y simultáneamente mantuvo Fendi y su propia línea. Su figura icónica con coleta, gafas oscuras y guantes blancos era tan famosa como sus diseños.",
    keyDesigns: [
      "Chanel Métiers d'Art (colecciones pre-otoño)",
      "El bolso Chanel 2.55 reinventado",
      "Colección Chanel Karl's punk (2008)",
      "Fendi Baguette renovado",
      "Desfiles Chanel como espectáculos de arte",
    ],
    techniques: [
      "Reinterpretación de archivos Chanel con ojos modernos",
      "Mezcla de materiales inesperados (tweed con cuero)",
      "Proporciones exageradas y sorprendentes",
      "Uso de materiales no convencionales (denim, neopreno)",
      "El sketch a mano como herramienta de trabajo diaria",
    ],
    legacy:
      "Lagerfeld fue el gran traductor de la herencia de Chanel para el siglo XXI. Demostró que respetar la tradición y ser moderno no son opuestos. Sus sketches son considerados obras de arte.",
    exercise:
      "Haz un sketch rápido a mano de un outfit inspirado en Lagerfeld: chaqueta Chanel de tweed actualizada con detalles punk (cadenas, cremalleras), falda corta y botas altas. No te preocupes por la perfección: ¡dibuja rápido!",
  },
  {
    id: "cristobal-balenciaga",
    name: "Cristóbal Balenciaga",
    years: "1895 – 1972",
    origin: "España",
    emoji: "🕊️",
    color: "#2C3E6A",
    accentColor: "#9888C4",
    philosophy:
      "Un modista debe ser arquitecto para el plano, escultor para la forma, pintor para el color, músico para la armonía y filósofo para la medida.",
    biography:
      "Cristóbal Balenciaga Eizaguirre nació en Getaria, País Vasco. Aprendió costura de su madre y en 1919 abrió su primera tienda en San Sebastián. Huyó de la Guerra Civil española y abrió su maison en París en 1937. Balenciaga fue considerado el 'maestro de maestros' por sus colegas Chanel, Dior y Givenchy. Su comprensión de la arquitectura de la ropa era incomparable.",
    keyDesigns: [
      "El abrigo sin mangas (1967)",
      "El vestido baby-doll (1957)",
      "El traje de infanta española",
      "El vestido balón (1950)",
      "El abrigo cuadrado",
    ],
    techniques: [
      "Construcción escultórica: la prenda se sostiene sola",
      "Espacio entre la prenda y el cuerpo (no ajustada)",
      "Siluetas geométricas y arquitectónicas",
      "Gazar de seda (tela que él popularizó)",
      "Mangas raglán y kimono propias",
    ],
    legacy:
      "Balenciaga fue y es considerado el más grande técnico de la historia de la costura. Su dominio de la forma sin precedentes influyó en toda la moda del siglo XX. Hoy la casa Balenciaga, bajo Demna, honra su legado con innovación radical.",
    exercise:
      "Estudia la silueta del abrigo cuadrado de Balenciaga: forma geométrica, hombros cuadrados, sin cintura marcada. Dibuja tres variaciones de esta silueta usando diferentes longitudes. Observa cómo la forma crea poder.",
  },
];

export function getDesignerById(id: string): Designer | undefined {
  return designers.find((d) => d.id === id);
}
