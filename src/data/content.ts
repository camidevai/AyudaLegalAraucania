import { NavItem, PracticeArea, Testimonial, BlogPost, FAQ } from '../types';

export const navItems: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre Mí', href: '/sobre-mi' },
  { label: 'Áreas de Práctica', href: '/areas-practica' },
  { label: 'Casos Destacados', href: '/casos' },
  { label: 'Contacto', href: '/contacto' },
];

export const practiceAreas: PracticeArea[] = [
  {
    id: 'derecho-civil',
    title: 'Derecho Civil',
    description: 'Representación en litigios civiles, contratos, responsabilidad civil y asuntos patrimoniales con un enfoque estratégico y personalizado.',
    icon: 'scale'
  },
  {
    id: 'derecho-penal',
    title: 'Derecho Penal',
    description: 'Defensa legal integral en casos penales, garantizando sus derechos y trabajando para obtener los mejores resultados posibles.',
    icon: 'gavel'
  },
  {
    id: 'derecho-laboral',
    title: 'Derecho Laboral',
    description: 'Asesoría completa en relaciones laborales, despidos, indemnizaciones y negociaciones con empleadores.',
    icon: 'briefcase'
  },
  {
    id: 'derecho-familia',
    title: 'Derecho de Familia',
    description: 'Acompañamiento en divorcios, custodia, pensiones alimenticias y otros asuntos familiares con sensibilidad y profesionalismo.',
    icon: 'users'
  },
  {
    id: 'derecho-comercial',
    title: 'Derecho Comercial',
    description: 'Asesoría legal para empresas, contratos comerciales, protección de propiedad intelectual y resolución de conflictos mercantiles.',
    icon: 'building'
  },
  {
    id: 'derecho-inmobiliario',
    title: 'Derecho Inmobiliario',
    description: 'Especialista en transacciones inmobiliarias, arrendamientos, servidumbres y litigios sobre propiedad.',
    icon: 'home'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Mendoza',
    position: 'Empresario',
    content: 'Su asesoría fue fundamental para resolver nuestro complejo caso comercial. Un profesional excepcional que combina conocimiento técnico con una visión estratégica notable.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '2',
    name: 'María González',
    position: 'Directora Ejecutiva',
    content: 'Confié en sus servicios para un litigio laboral complejo y los resultados superaron mis expectativas. Su dedicación y conocimiento legal son incomparables.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '3',
    name: 'Felipe Soto',
    position: 'Arquitecto',
    content: 'Su asesoramiento en mi caso de propiedad intelectual fue preciso y efectivo. Un abogado que realmente se preocupa por los intereses de sus clientes.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '¿Qué hacer si te demandan? Guía esencial para afrontar un proceso legal',
    excerpt: 'Descubre los pasos fundamentales a seguir cuando recibes una demanda y cómo actuar estratégicamente desde el primer momento.',
    date: '15 de abril de 2025',
    category: 'Litigios',
    image: 'https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    slug: 'que-hacer-si-te-demandan'
  },
  {
    id: '2',
    title: 'Derechos del trabajador en caso de despido injustificado',
    excerpt: 'Un análisis completo sobre las garantías legales y compensaciones a las que tienes derecho frente a un despido sin causa justificada.',
    date: '28 de marzo de 2025',
    category: 'Derecho Laboral',
    image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    slug: 'derechos-trabajador-despido-injustificado'
  },
  {
    id: '3',
    title: 'Claves para proteger legalmente tu propiedad intelectual',
    excerpt: 'Estrategias efectivas para salvaguardar tus creaciones, innovaciones y marcas en el complejo mundo legal actual.',
    date: '10 de marzo de 2025',
    category: 'Propiedad Intelectual',
    image: 'https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    slug: 'proteger-propiedad-intelectual'
  }
];

export const faqs: FAQ[] = [
  {
    question: "¿Cómo funciona la primera consulta jurídica?",
    answer: "La primera consulta tiene como objetivo conocer su caso en detalle. Durante esta reunión, evaluaré la situación legal, responderé sus preguntas iniciales y determinaremos juntos la mejor estrategia a seguir. La duración aproximada es de 60 minutos."
  },
  {
    question: "¿Cuáles son sus honorarios profesionales?",
    answer: "Los honorarios se establecen según la complejidad del caso, el tiempo estimado de dedicación y el valor añadido que puedo aportar a su situación. Tras la consulta inicial, le proporcionaré una propuesta económica detallada y transparente."
  },
  {
    question: "¿Cuánto tiempo puede tardar en resolverse mi caso?",
    answer: "Los plazos varían considerablemente dependiendo de la naturaleza del asunto. Algunos casos pueden resolverse en semanas, mientras que litigios más complejos pueden extenderse durante meses. En nuestra primera reunión, le proporcionaré un cronograma estimado basado en mi experiencia con casos similares."
  },
  {
    question: "¿Qué documentación debo preparar para la primera consulta?",
    answer: "Es recomendable traer toda la documentación relacionada con su caso: contratos, correspondencia, notificaciones judiciales, facturas, y cualquier otro documento relevante. Esto nos permitirá realizar una evaluación más precisa desde el primer momento."
  },
  {
    question: "¿Trabaja con asistencia jurídica gratuita o casos pro bono?",
    answer: "Dedico un porcentaje de mi práctica profesional a casos pro bono. La selección de estos casos se realiza evaluando distintos factores, principalmente la situación de vulnerabilidad del cliente y la relevancia social del asunto."
  }
];