// Datos del catálogo de casas — sin backend, se edita este archivo por propiedad.
var CATALOGO_UI = {
  es: {
    eyebrow_catalogo: "Miami-Dade · Catálogo",
    h1_catalogo: "Casas disponibles",
    sub_catalogo: "Selección personal de propiedades — toca una para ver todos los detalles.",
    back_link: "← Volver al catálogo",
    badge_venta: "Venta",
    badge_renta: "Renta",
    spec_beds: "hab.",
    spec_baths: "baños",
    spec_sqft: "ft²",
    spec_year: "Año",
    feature_pool: "Piscina",
    cta_quiero: "La quiero",
    section_description: "Sobre esta casa",
    section_neighborhood: "La zona",
    modal_title: "Pregunta por esta casa",
    modal_sub: "Déjame tus datos y te contacto personalmente para coordinar una visita.",
    label_nombre: "Nombre completo",
    label_email: "Email",
    label_telefono: "Teléfono",
    label_horaLlamada: "¿A qué hora te puedo llamar?",
    opt_short: "(opc.)",
    hora_placeholder: "Selecciona un horario",
    hora_manana: "Mañana (9am – 12pm)",
    hora_tarde: "Tarde (12pm – 4pm)",
    hora_tardenoche: "Tarde-noche (4pm – 7pm)",
    hora_cualquiera: "Cualquier hora",
    ph_nombre: "Tu nombre",
    ph_email: "tucorreo@email.com",
    submit_btn: "Enviar",
    fineprint: "Sin compromiso · Te respondo en menos de 24 horas",
    error_msg: "Hubo un problema al enviar. Intenta de nuevo.",
    confirm_heading: "¡Listo!",
    confirm_body: "Recibí tu información. Te voy a escribir muy pronto sobre esta propiedad.",
    close_modal: "Cerrar",
    empty_catalogo: "Muy pronto más propiedades por aquí."
  },
  en: {
    eyebrow_catalogo: "Miami-Dade · Catalog",
    h1_catalogo: "Homes available",
    sub_catalogo: "A personal selection of properties — tap one to see all the details.",
    back_link: "← Back to catalog",
    badge_venta: "For sale",
    badge_renta: "For rent",
    spec_beds: "bed",
    spec_baths: "bath",
    spec_sqft: "sq ft",
    spec_year: "Year",
    feature_pool: "Pool",
    cta_quiero: "I want it",
    section_description: "About this home",
    section_neighborhood: "The area",
    modal_title: "Ask about this home",
    modal_sub: "Leave your info and I'll reach out personally to set up a visit.",
    label_nombre: "Full name",
    label_email: "Email",
    label_telefono: "Phone",
    label_horaLlamada: "What time can I call you?",
    opt_short: "(opt.)",
    hora_placeholder: "Select a time",
    hora_manana: "Morning (9am – 12pm)",
    hora_tarde: "Afternoon (12pm – 4pm)",
    hora_tardenoche: "Evening (4pm – 7pm)",
    hora_cualquiera: "Anytime",
    ph_nombre: "Your name",
    ph_email: "youremail@email.com",
    submit_btn: "Send",
    fineprint: "No obligation · I'll reply within 24 hours",
    error_msg: "There was a problem sending. Please try again.",
    confirm_heading: "All set!",
    confirm_body: "I received your information. I'll write to you soon about this property.",
    close_modal: "Close",
    empty_catalogo: "More properties coming soon."
  },
  pt: {
    eyebrow_catalogo: "Miami-Dade · Catálogo",
    h1_catalogo: "Casas disponíveis",
    sub_catalogo: "Seleção pessoal de imóveis — toque em um para ver todos os detalhes.",
    back_link: "← Voltar ao catálogo",
    badge_venta: "Venda",
    badge_renta: "Aluguel",
    spec_beds: "quartos",
    spec_baths: "banheiros",
    spec_sqft: "ft²",
    spec_year: "Ano",
    feature_pool: "Piscina",
    cta_quiero: "Eu quero",
    section_description: "Sobre esta casa",
    section_neighborhood: "A região",
    modal_title: "Pergunte sobre esta casa",
    modal_sub: "Deixe seus dados e entro em contato pessoalmente para agendar uma visita.",
    label_nombre: "Nome completo",
    label_email: "Email",
    label_telefono: "Telefone",
    label_horaLlamada: "A que horas posso te ligar?",
    opt_short: "(opc.)",
    hora_placeholder: "Selecione um horário",
    hora_manana: "Manhã (9h – 12h)",
    hora_tarde: "Tarde (12h – 16h)",
    hora_tardenoche: "Final da tarde (16h – 19h)",
    hora_cualquiera: "Qualquer horário",
    ph_nombre: "Seu nome",
    ph_email: "seuemail@email.com",
    submit_btn: "Enviar",
    fineprint: "Sem compromisso · Respondo em até 24 horas",
    error_msg: "Houve um problema ao enviar. Tente novamente.",
    confirm_heading: "Pronto!",
    confirm_body: "Recebi suas informações. Vou escrever em breve sobre este imóvel.",
    close_modal: "Fechar",
    empty_catalogo: "Mais imóveis em breve."
  }
};

var PROPERTIES = [
  {
    slug: "pembroke-pines-15753-nw-10th",
    operation: "venta",
    price: 1000000,
    beds: 3,
    baths: 2,
    sqft: 3229,
    sqm: 300,
    yearBuilt: 2010,
    pool: true,
    address: "15753 NW 10th St, Pembroke Pines, FL 33028",
    cityLine: "Towngate · Pembroke Pines, FL",
    title: {
      es: "Vive en el corazón de Towngate",
      en: "Live in the heart of Towngate",
      pt: "Viva no coração de Towngate"
    },
    description: {
      es: "Una casa que respira tranquilidad familiar sin renunciar al confort moderno. Sus 3 habitaciones y 2 baños se distribuyen en 3,229 ft² (300 m²) construidos en 2010, con una piscina privada que se convierte en el centro de las tardes de verano. Espacios luminosos, cocina funcional y un diseño pensado para el día a día de una familia que busca su primer hogar propio en Miami-Dade.",
      en: "A home built for everyday family life without giving up modern comfort. Its 3 bedrooms and 2 bathrooms are laid out across 3,229 sq ft (300 m²) built in 2010, with a private pool that becomes the heart of summer evenings. Bright, functional spaces designed for a family looking for their first home in Miami-Dade.",
      pt: "Uma casa pensada para o dia a dia em família, sem abrir mão do conforto moderno. Seus 3 quartos e 2 banheiros ocupam 3.229 pés² (300 m²) construídos em 2010, com piscina privativa que vira o centro das tardes de verão. Espaços amplos e iluminados, cozinha funcional e um design feito para quem busca sua primeira casa própria em Miami-Dade."
    },
    neighborhood: {
      es: "Ubicada en Towngate, una de las comunidades más consolidadas de Pembroke Pines, con calles arboladas y HOA bajo que cubre piscina comunitaria, clubhouse, canchas de tenis y parques. A pasos, el Towngate Shopping Center resuelve el mandado diario con su Publix; cruzando la I-75 te espera Pembroke Gardens, un mall al aire libre con Barnes & Noble, Banana Republic y Old Navy. Las escuelas de la zona — Silver Palms Elementary, Walter C. Young Middle y Charles W. Flanagan High — tienen buena reputación (B+), y el acceso directo a la I-75 hace que moverte por todo el sur de Broward sea cuestión de minutos.",
      en: "Located in Towngate, one of Pembroke Pines' most established communities, with tree-lined streets and a low HOA that covers a community pool, clubhouse, tennis courts, and parks. Steps away, the Towngate Shopping Center handles daily errands with its Publix; across I-75, the Pembroke Gardens open-air mall awaits with Barnes & Noble, Banana Republic, and Old Navy. Local schools — Silver Palms Elementary, Walter C. Young Middle, and Charles W. Flanagan High — are well rated (B+), and direct I-75 access puts all of South Broward just minutes away.",
      pt: "Localizada em Towngate, uma das comunidades mais consolidadas de Pembroke Pines, com ruas arborizadas e uma taxa de HOA baixa que cobre piscina comunitária, clubhouse, quadras de tênis e parques. A poucos passos, o Towngate Shopping Center resolve as compras do dia a dia com seu Publix; cruzando a I-75, o Pembroke Gardens, um shopping a céu aberto, traz lojas como Barnes & Noble, Banana Republic e Old Navy. As escolas da região — Silver Palms Elementary, Walter C. Young Middle e Charles W. Flanagan High — têm boa reputação (B+), e o acesso direto à I-75 coloca todo o sul de Broward a poucos minutos de distância."
    },
    images: {
      cover: "/assets/casas/pembroke-pines-15753-nw-10th/exterior-thumb.jpg",
      gallery: [
        {
          full: "/assets/casas/pembroke-pines-15753-nw-10th/exterior-full.jpg",
          thumb: "/assets/casas/pembroke-pines-15753-nw-10th/exterior-thumb.jpg",
          alt: { es: "Fachada de la propiedad", en: "Property exterior", pt: "Fachada do imóvel" }
        },
        {
          full: "/assets/casas/pembroke-pines-15753-nw-10th/habitacion-full.jpg",
          thumb: "/assets/casas/pembroke-pines-15753-nw-10th/habitacion-thumb.jpg",
          alt: { es: "Habitación principal", en: "Primary bedroom", pt: "Quarto principal" }
        },
        {
          full: "/assets/casas/pembroke-pines-15753-nw-10th/cocina-full.jpg",
          thumb: "/assets/casas/pembroke-pines-15753-nw-10th/cocina-thumb.jpg",
          alt: { es: "Cocina", en: "Kitchen", pt: "Cozinha" }
        },
        {
          full: "/assets/casas/pembroke-pines-15753-nw-10th/bano-full.jpg",
          thumb: "/assets/casas/pembroke-pines-15753-nw-10th/bano-thumb.jpg",
          alt: { es: "Baño principal", en: "Primary bathroom", pt: "Banheiro principal" }
        }
      ]
    }
  }
];
