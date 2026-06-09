import type { City } from "@/types";

export const cities: City[] = [
  {
    id: "paris",
    name: "París",
    country: "Francia",
    emoji: "🗼",
    tagline: "La capital eterna del arte y la elegancia",
    color: "#2C3E6A",
    accentColor: "#C4956A",
    history:
      "París lleva más de dos siglos siendo la capital mundial de la alta costura. Todo comenzó con Charles Frederick Worth, el primer gran costurero que firmaba sus creaciones, en el siglo XIX. Desde entonces, la ciudad ha sido el escenario donde nacen las tendencias que el resto del mundo adopta. La Rue du Faubourg Saint-Honoré, la Avenue Montaigne y el barrio de Le Marais son el corazón latente de la moda parisina.",
    trends: [
      "Chic sin esfuerzo: elegancia natural y sin exageración",
      "La raya y el punto marinero como básicos eternos",
      "El beige y el negro como paleta sofisticada",
      "Accesorios de cuero de alta calidad como inversión",
      "Moda circular: vintage y segunda mano de lujo",
    ],
    iconicDesigns: [
      "El traje Chanel de tweed con borde de galón",
      "El New Look de Dior con falda midi y cintura marcada",
      "Le Smoking de Yves Saint Laurent",
      "El abrigo de Balenciaga",
      "El bolso Hermès Birkin",
    ],
    culturalInfluences: [
      "El Impresionismo y el arte como referencia visual constante",
      "La filosofía de vida bohemia y artística",
      "La haute gastronomie y el placer como valores centrales",
      "La arquitectura haussmanniana y sus colores beige y gris",
      "La femme fatale literaria de Flaubert y Zola",
    ],
    inspiration:
      "Para vestirte comme une parisienne: elige una prenda de calidad antes que cinco mediocres. Combina algo viejo con algo nuevo. El accesorio perfecto puede transformar el outfit más sencillo. Y nunca, jamás, te esfuerces demasiado.",
  },
  {
    id: "milan",
    name: "Milán",
    country: "Italia",
    emoji: "🏛️",
    tagline: "Donde la artesanía italiana se convierte en arte",
    color: "#6B3A3A",
    accentColor: "#C4956A",
    history:
      "Milán se consolidó como capital de la moda italiana en los años 70 cuando diseñadores como Giorgio Armani, Gianni Versace y Gianfranco Ferré trasladaron sus atelier a la ciudad. La Via della Spiga y el Quadrilatero della Moda son los epicentros del lujo milanés. A diferencia de París, Milán celebra la wearability: prendas para vivir y brillar, no solo para admirar.",
    trends: [
      "Sastrería impecable como base de cualquier look",
      "Cuero artesanal: bolsos, zapatos y cinturones de autor",
      "Paleta sofisticada: camel, beige, terracota y negro",
      "Mezcla de tejidos de alta calidad",
      "El vestido que funciona de día y noche",
    ],
    iconicDesigns: [
      "El traje desestructurado de Armani",
      "El vestido dorado con imperdibles de Versace",
      "El Valentino Red en vestido de noche",
      "Los zapatos Salvatore Ferragamo",
      "El bolso Prada de nylon negro",
    ],
    culturalInfluences: [
      "El Renacimiento italiano y su celebración de la belleza humana",
      "La tradición artesanal de cuero florentino",
      "La ópera y el teatro: espectáculo en cada gesto",
      "El diseño industrial y la Triennale di Milano",
      "La cultura del aperitivo y el dolce far niente",
    ],
    inspiration:
      "La moda milanesa te enseña que la calidad nunca pasa de moda. Invierte en un bolso de cuero genuino, en una chaqueta de sastre bien construida, en zapatos que duren décadas. El lujo italiano es para siempre.",
  },
  {
    id: "london",
    name: "Londres",
    country: "Reino Unido",
    emoji: "🎡",
    tagline: "La rebelde elegante que siempre rompe las reglas",
    color: "#1C4A3A",
    accentColor: "#9888C4",
    history:
      "Londres es la capital del street style y la vanguardia. Desde los Swinging Sixties de Mary Quant con la minifalda, hasta el punk de Vivienne Westwood en los 70, la ciudad siempre fue incubadora de revoluciones estéticas. Carnaby Street y King's Road son legendarios. La London Fashion Week mezcla lo comercial con lo experimental como ninguna otra.",
    trends: [
      "El tartan escocés y el tweed británico reinventados",
      "Capas inesperadas y mezcla de estilos",
      "Estampados florales para todas las estaciones",
      "El oversized como declaración de intenciones",
      "Moda sostenible y upcycling como movimiento cultural",
    ],
    iconicDesigns: [
      "La minifalda de Mary Quant (1964)",
      "El traje punk de Vivienne Westwood",
      "El coat Burberry con su cuadro Houndstooth",
      "El vestido floral de Alexander McQueen",
      "La bolsa Mulberry Bayswater",
    ],
    culturalInfluences: [
      "La música: desde los Beatles hasta el punk y el britpop",
      "Las subculturas: mods, punks, skinheads, goths",
      "La tradición de Savile Row y la sastrería masculina",
      "El teatro y el West End como referentes visuales",
      "El multiculturalismo londinense y la mezcla de influencias globales",
    ],
    inspiration:
      "Londres te da permiso para ser completamente tú misma. Mezcla el florido con el estampado, lo vintage con lo moderno, lo formal con lo deportivo. La única regla es que no hay reglas.",
  },
  {
    id: "nueva-york",
    name: "Nueva York",
    country: "Estados Unidos",
    emoji: "🗽",
    tagline: "La capital del uniforme elegante y la moda que funciona",
    color: "#1C1C1E",
    accentColor: "#C4956A",
    history:
      "Nueva York llegó al mapa de la moda de la mano del prêt-à-porter americano en los años 40. Seventh Avenue fue el corazón de la industria. Diseñadores como Ralph Lauren, Calvin Klein, Donna Karan y Marc Jacobs definieron una estética urbana, funcional y sofisticada que el mundo adoptó. El New York Fashion Week es uno de los cuatro grandes de la industria.",
    trends: [
      "El total look negro como uniforme de poder",
      "Denim premium: una pieza de calidad para siempre",
      "El athleisure: deportivo de alta calidad para el día",
      "Minimalismo práctico: prendas versátiles y duraderas",
      "El blazer oversize como pieza definitoria",
    ],
    iconicDesigns: [
      "El polo de Ralph Lauren",
      "Los jeans Calvin Klein",
      "El power suit de Donna Karan",
      "La sudadera con capucha de Marc Jacobs para Perry Ellis",
      "El corsé exterior de Jean Paul Gaultier para Madonna",
    ],
    culturalInfluences: [
      "La inmigración y la mezcla cultural en las calles de Brooklyn",
      "El jazz, el hip-hop y la música como motor de moda",
      "La cultura del trabajo: prendas que funcionen 12 horas",
      "Central Park y la vida al aire libre como escenario",
      "El cine neoyorquino y sus personajes icónicos",
    ],
    inspiration:
      "Nueva York te enseña que la moda debe funcionar en la vida real. Construye tu armario con básicos perfectos: un buen denim, una camisa blanca impecable, un blazer clásico. Luego añade una pieza que te defina.",
  },
  {
    id: "tokio",
    name: "Tokio",
    country: "Japón",
    emoji: "🌸",
    tagline: "Donde la tradición milenaria dialoga con el futuro",
    color: "#8B1A3A",
    accentColor: "#9888C4",
    history:
      "Tokio es la capital mundial de la moda más innovadora y conceptual. Los barrios de Harajuku, Shibuya y Aoyama son laboratorios de estilos únicos. Diseñadores como Rei Kawakubo (Comme des Garçons), Issey Miyake, Yohji Yamamoto y Kenzo revolucionaron la moda occidental al introducir conceptos filosóficos japoneses: el wabi-sabi, la imperfección, el espacio vacío como elemento de diseño.",
    trends: [
      "Kawaii: la estética de lo adorable llevada al extremo",
      "Avant-garde: deconstrucción y asimetría",
      "El kimono y el yukata modernizados",
      "Harajuku style: mezcla libre y sin límites de estilos",
      "Moda sostenible y zero-waste por tradición filosófica",
    ],
    iconicDesigns: [
      "El blazer deconstruido de Comme des Garçons",
      "Los plisados de Issey Miyake",
      "El haori kimono de Yohji Yamamoto",
      "Los zapatos Onitsuka Tiger",
      "El bolso Furoshiki de tela anudada",
    ],
    culturalInfluences: [
      "El Zen y el wabi-sabi: belleza en la imperfección",
      "El manga y el anime como referente visual global",
      "La ceremonia del té y la atención al detalle ritual",
      "El origami: pliegues y formas geométricas",
      "La naturaleza: cerezos, bambú y el monte Fuji",
    ],
    inspiration:
      "La moda japonesa te enseña que el espacio vacío es tan importante como lo lleno. Prueba una prenda de silueta inusual: asimétrica, oversized o con volumen inesperado. Observa cómo se mueve. El movimiento es parte del diseño.",
  },
];

export function getCityById(id: string): City | undefined {
  return cities.find((c) => c.id === id);
}
