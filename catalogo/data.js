// Datos del catálogo de casas — sin backend, se edita este archivo por propiedad.
var CATALOGO_UI = {
  es: {
    eyebrow_catalogo: "Miami-Dade · Catálogo",
    h1_catalogo: "Casas disponibles",
    sub_catalogo: "Selección personal de propiedades — toca una para ver todos los detalles.",
    back_link: "Volver al catálogo",
    badge_venta: "Venta",
    badge_renta: "Renta",
    spec_beds: "hab.",
    spec_baths: "baños",
    spec_sqft: "ft²",
    spec_year: "Año",
    price_per_month: "/mes",
    amenity_pool: "Piscina",
    amenity_gym: "Gimnasio",
    amenity_sauna: "Sauna",
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
    tcpa_consent: "Al enviar este formulario, aceptas que Amabilly Beatriz te contacte por teléfono, texto o email.",
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
    back_link: "Back to catalog",
    badge_venta: "For sale",
    badge_renta: "For rent",
    spec_beds: "bed",
    spec_baths: "bath",
    spec_sqft: "sq ft",
    spec_year: "Year",
    price_per_month: "/mo",
    amenity_pool: "Pool",
    amenity_gym: "Gym",
    amenity_sauna: "Sauna",
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
    tcpa_consent: "By submitting this form, you agree that Amabilly Beatriz may contact you by phone, text, or email.",
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
    back_link: "Voltar ao catálogo",
    badge_venta: "Venda",
    badge_renta: "Aluguel",
    spec_beds: "quartos",
    spec_baths: "banheiros",
    spec_sqft: "ft²",
    spec_year: "Ano",
    price_per_month: "/mês",
    amenity_pool: "Piscina",
    amenity_gym: "Academia",
    amenity_sauna: "Sauna",
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
    tcpa_consent: "Ao enviar este formulário, você concorda que Amabilly Beatriz entre em contato por telefone, mensagem de texto ou email.",
    error_msg: "Houve um problema ao enviar. Tente novamente.",
    confirm_heading: "Pronto!",
    confirm_body: "Recebi suas informações. Vou escrever em breve sobre este imóvel.",
    close_modal: "Fechar",
    empty_catalogo: "Mais imóveis em breve."
  }
};

var PROPERTIES = [
  {
    slug: "miami-117-nw-42nd-ave-602",
    operation: "renta",
    price: 2200,
    beds: 1,
    baths: 1,
    amenities: ["pool", "gym", "sauna"],
    address: "117 NW 42nd Ave # 602, Miami, FL 33126",
    cityLine: "Mediterranea · Flagami / Blue Lagoon, Miami, FL",
    title: {
      es: "Condo luminoso en el edificio Mediterranea",
      en: "Bright condo in the Mediterranea building",
      pt: "Apartamento claro no edifício Mediterranea"
    },
    description: {
      es: "Condo de 1 habitación y 1 baño, luminoso y bien cuidado, en el corazón de Miami. Cocina moderna con encimeras de granito, electrodomésticos de acero inoxidable y barra desayunadora, piso de losa en toda la unidad y bañera de tamaño completo. Incluye lavadora y secadora dentro de la unidad, aire acondicionado central y un espacio de estacionamiento asignado. Disponible a partir del 1 de septiembre. Requiere aprobación de la asociación (proceso de 3 a 4 semanas) y cuota de aplicación de $150 por solicitante — no se permiten mascotas. Costo aproximado de mudanza: $6,750 (primer mes, último mes, depósito de seguridad y cuota de aplicación).",
      en: "Bright and well-maintained 1-bedroom, 1-bathroom condo in the heart of Miami. Modern kitchen with granite countertops, stainless steel appliances, and a bar-height counter, tile flooring throughout, and a full-size tub. Includes in-unit washer & dryer, central A/C, and one assigned parking space. Available starting September 1st. Association approval required (3–4 week process) and a $150 application fee per applicant — no pets. Approximate move-in cost: $6,750 (first month, last month, security deposit, and application fee).",
      pt: "Apartamento de 1 quarto e 1 banheiro, claro e bem cuidado, no coração de Miami. Cozinha moderna com bancadas de granito, eletrodomésticos em aço inoxidável e balcão tipo bar, piso de porcelanato em toda a unidade e banheira de tamanho completo. Inclui lavadora e secadora na unidade, ar-condicionado central e uma vaga de estacionamento. Disponível a partir de 1º de setembro. Requer aprovação da associação (processo de 3 a 4 semanas) e taxa de inscrição de $150 por candidato — não são permitidos animais de estimação. Custo aproximado de mudança: $6.750 (primeiro mês, último mês, depósito de segurança e taxa de inscrição)."
    },
    neighborhood: {
      es: "El edificio Mediterranea está en Flagami, muy cerca de Blue Lagoon, a minutos del Aeropuerto Internacional de Miami y con acceso directo a las expressways Dolphin y Palmetto — ideal para moverte por toda la ciudad. Coral Gables queda a un corto trayecto, y en la misma zona tienes el parque acuático Grapeland, el campo de golf International Links Melreese y el Magic City Casino. El edificio suma piscina, gimnasio, sauna, clubhouse, lobby atendido y seguridad con acceso controlado.",
      en: "The Mediterranea building sits in Flagami, right by Blue Lagoon, just minutes from Miami International Airport with direct access to the Dolphin and Palmetto Expressways — easy to get anywhere in the city. Coral Gables is a short drive away, and the area also has Grapeland Water Park, International Links Melreese golf course, and Magic City Casino. The building itself adds a pool, gym, sauna, clubhouse, attended lobby, and controlled access with security.",
      pt: "O edifício Mediterranea fica em Flagami, bem perto de Blue Lagoon, a poucos minutos do Aeroporto Internacional de Miami e com acesso direto às rodovias Dolphin e Palmetto — fácil para se locomover pela cidade. Coral Gables fica a um curto trajeto, e a região também tem o parque aquático Grapeland, o campo de golfe International Links Melreese e o Magic City Casino. O próprio prédio conta com piscina, academia, sauna, salão de festas, portaria e acesso controlado com segurança."
    },
    images: {
      cover: "/assets/casas/miami-117-nw-42nd-ave-602/exterior-thumb.jpg",
      gallery: [
        { full: "/assets/casas/miami-117-nw-42nd-ave-602/exterior-full.jpg", thumb: "/assets/casas/miami-117-nw-42nd-ave-602/exterior-thumb.jpg", alt: { es: "Fachada del edificio Mediterranea", en: "Mediterranea building exterior", pt: "Fachada do edifício Mediterranea" } },
        { full: "/assets/casas/miami-117-nw-42nd-ave-602/living-full.jpg", thumb: "/assets/casas/miami-117-nw-42nd-ave-602/living-thumb.jpg", alt: { es: "Sala de estar", en: "Living room", pt: "Sala de estar" } },
        { full: "/assets/casas/miami-117-nw-42nd-ave-602/kitchen-1-full.jpg", thumb: "/assets/casas/miami-117-nw-42nd-ave-602/kitchen-1-thumb.jpg", alt: { es: "Cocina", en: "Kitchen", pt: "Cozinha" } },
        { full: "/assets/casas/miami-117-nw-42nd-ave-602/kitchen-2-full.jpg", thumb: "/assets/casas/miami-117-nw-42nd-ave-602/kitchen-2-thumb.jpg", alt: { es: "Cocina", en: "Kitchen", pt: "Cozinha" } },
        { full: "/assets/casas/miami-117-nw-42nd-ave-602/kitchen-3-full.jpg", thumb: "/assets/casas/miami-117-nw-42nd-ave-602/kitchen-3-thumb.jpg", alt: { es: "Cocina", en: "Kitchen", pt: "Cozinha" } },
        { full: "/assets/casas/miami-117-nw-42nd-ave-602/bedroom-full.jpg", thumb: "/assets/casas/miami-117-nw-42nd-ave-602/bedroom-thumb.jpg", alt: { es: "Habitación", en: "Bedroom", pt: "Quarto" } },
        { full: "/assets/casas/miami-117-nw-42nd-ave-602/bathroom-full.jpg", thumb: "/assets/casas/miami-117-nw-42nd-ave-602/bathroom-thumb.jpg", alt: { es: "Baño", en: "Bathroom", pt: "Banheiro" } },
        { full: "/assets/casas/miami-117-nw-42nd-ave-602/laundry-full.jpg", thumb: "/assets/casas/miami-117-nw-42nd-ave-602/laundry-thumb.jpg", alt: { es: "Lavandería en la unidad", en: "In-unit laundry", pt: "Lavanderia na unidade" } },
        { full: "/assets/casas/miami-117-nw-42nd-ave-602/balcony-full.jpg", thumb: "/assets/casas/miami-117-nw-42nd-ave-602/balcony-thumb.jpg", alt: { es: "Balcón", en: "Balcony", pt: "Varanda" } },
        { full: "/assets/casas/miami-117-nw-42nd-ave-602/pool-full.jpg", thumb: "/assets/casas/miami-117-nw-42nd-ave-602/pool-thumb.jpg", alt: { es: "Piscina del edificio", en: "Building pool", pt: "Piscina do prédio" } },
        { full: "/assets/casas/miami-117-nw-42nd-ave-602/gym-full.jpg", thumb: "/assets/casas/miami-117-nw-42nd-ave-602/gym-thumb.jpg", alt: { es: "Gimnasio del edificio", en: "Building gym", pt: "Academia do prédio" } },
        { full: "/assets/casas/miami-117-nw-42nd-ave-602/sauna-full.jpg", thumb: "/assets/casas/miami-117-nw-42nd-ave-602/sauna-thumb.jpg", alt: { es: "Sauna del edificio", en: "Building sauna", pt: "Sauna do prédio" } }
      ]
    }
  },
  {
    slug: "hialeah-628-w-17th-628",
    operation: "renta",
    price: 2499,
    beds: 2,
    baths: 1,
    address: "628 W 17th St # 628, Hialeah, FL 33010",
    cityLine: "Seminola City · Hialeah, FL",
    title: {
      es: "Dúplex encantador en Seminola City",
      en: "Charming duplex in Seminola City",
      pt: "Duplex encantador em Seminola City"
    },
    description: {
      es: "Dúplex de 2 habitaciones y 1 baño, bien cuidado, en el corazón de Hialeah. Cocina moderna con encimeras de granito, aire acondicionado central, lavadora y secadora dentro de la unidad, y un patio privado ideal para disfrutar al aire libre. Incluye dos espacios de estacionamiento asignados. Contrato de 1 año, aprobación rápida (1 a 2 semanas) con ingresos verificables de al menos 2.5 veces la renta. Se aceptan perros y gatos. Disponible a partir del 1 de septiembre — la unidad está ocupada hasta el 31 de agosto, por lo que las visitas requieren 24 horas de aviso. Costo de mudanza: solo 2 meses de renta con crédito aprobado, sin cuota de aplicación.",
      en: "Well-maintained 2-bedroom, 1-bathroom duplex in the heart of Hialeah. Modern kitchen with granite countertops, central A/C, in-unit washer & dryer, and a private patio perfect for outdoor enjoyment. Two assigned parking spaces included. 1-year lease, fast approval (1–2 weeks) with verifiable income of at least 2.5x the rent. Cat & dog friendly. Available starting September 1st — the unit is tenant-occupied until August 31st, so showings require 24 hours' notice. Move-in cost: just two months' rent with approved credit, no application fee.",
      pt: "Duplex de 2 quartos e 1 banheiro, bem cuidado, no coração de Hialeah. Cozinha moderna com bancadas de granito, ar-condicionado central, lavadora e secadora na unidade, e um pátio privativo perfeito para aproveitar ao ar livre. Inclui duas vagas de estacionamento. Contrato de 1 ano, aprovação rápida (1 a 2 semanas) com renda comprovada de pelo menos 2,5 vezes o aluguel. Aceita cães e gatos. Disponível a partir de 1º de setembro — a unidade está ocupada até 31 de agosto, então as visitas exigem aviso de 24 horas. Custo de mudança: apenas dois meses de aluguel com crédito aprovado, sem taxa de inscrição."
    },
    neighborhood: {
      es: "Está en Seminola City, uno de los barrios más caminables de Hialeah, a pocas cuadras del histórico Hialeah Park Racetrack & Casino. Cerca tienes el Westland Mall para todo tipo de compras, el Cotson Park para actividades al aire libre, y buen acceso a la Hialeah Expressway — todo a minutos de Miami.",
      en: "Located in Seminola City, one of Hialeah's most walkable neighborhoods, just blocks from the historic Hialeah Park Racetrack & Casino. Westland Mall is nearby for shopping, Cotson Park offers outdoor space, and the Hialeah Expressway is close by — all just minutes from Miami.",
      pt: "Fica em Seminola City, um dos bairros mais caminháveis de Hialeah, a poucos quarteirões do histórico Hialeah Park Racetrack & Casino. O Westland Mall fica por perto para compras, o Cotson Park oferece espaço ao ar livre, e há bom acesso à Hialeah Expressway — tudo a poucos minutos de Miami."
    },
    images: {
      cover: "/assets/casas/hialeah-628-w-17th-628/exterior-thumb.jpg",
      gallery: [
        { full: "/assets/casas/hialeah-628-w-17th-628/exterior-full.jpg", thumb: "/assets/casas/hialeah-628-w-17th-628/exterior-thumb.jpg", alt: { es: "Fachada de la propiedad", en: "Property exterior", pt: "Fachada do imóvel" } },
        { full: "/assets/casas/hialeah-628-w-17th-628/living-full.jpg", thumb: "/assets/casas/hialeah-628-w-17th-628/living-thumb.jpg", alt: { es: "Sala de estar", en: "Living room", pt: "Sala de estar" } },
        { full: "/assets/casas/hialeah-628-w-17th-628/salon-full.jpg", thumb: "/assets/casas/hialeah-628-w-17th-628/salon-thumb.jpg", alt: { es: "Salón", en: "Family room", pt: "Salão" } },
        { full: "/assets/casas/hialeah-628-w-17th-628/kitchen-1-full.jpg", thumb: "/assets/casas/hialeah-628-w-17th-628/kitchen-1-thumb.jpg", alt: { es: "Cocina", en: "Kitchen", pt: "Cozinha" } },
        { full: "/assets/casas/hialeah-628-w-17th-628/kitchen-2-full.jpg", thumb: "/assets/casas/hialeah-628-w-17th-628/kitchen-2-thumb.jpg", alt: { es: "Cocina", en: "Kitchen", pt: "Cozinha" } },
        { full: "/assets/casas/hialeah-628-w-17th-628/bedroom-full.jpg", thumb: "/assets/casas/hialeah-628-w-17th-628/bedroom-thumb.jpg", alt: { es: "Habitación", en: "Bedroom", pt: "Quarto" } },
        { full: "/assets/casas/hialeah-628-w-17th-628/bathroom-full.jpg", thumb: "/assets/casas/hialeah-628-w-17th-628/bathroom-thumb.jpg", alt: { es: "Baño", en: "Bathroom", pt: "Banheiro" } },
        { full: "/assets/casas/hialeah-628-w-17th-628/laundry-full.jpg", thumb: "/assets/casas/hialeah-628-w-17th-628/laundry-thumb.jpg", alt: { es: "Lavandería en la unidad", en: "In-unit laundry", pt: "Lavanderia na unidade" } },
        { full: "/assets/casas/hialeah-628-w-17th-628/patio-full.jpg", thumb: "/assets/casas/hialeah-628-w-17th-628/patio-thumb.jpg", alt: { es: "Patio privado", en: "Private patio", pt: "Pátio privativo" } }
      ]
    }
  },
  {
    slug: "miami-355-ne-55th-ter-1",
    operation: "renta",
    price: 2550,
    beds: 2,
    baths: 2,
    sqft: 712,
    address: "355 NE 55th Ter # 1, Miami, FL 33137",
    cityLine: "Upper Eastside / MiMo · Miami, FL",
    title: {
      es: "Apartamento remodelado en el Upper Eastside",
      en: "Remodeled apartment in the Upper Eastside",
      pt: "Apartamento reformado no Upper Eastside"
    },
    description: {
      es: "Apartamento de 2 habitaciones y 2 baños, completamente remodelado y listo para mudarte, con acabados modernos en toda la unidad. Sin asociación — proceso de aprobación rápido y sencillo. Se aceptan mascotas (cuota no reembolsable de $300, aplican restricciones). Disponible ahora. Costo de mudanza: solo primer mes y depósito de seguridad (aproximadamente $5,100 en total), más cuota de aplicación de $50 por solicitante.",
      en: "Fully remodeled 2-bedroom, 2-bathroom apartment, move-in ready with modern finishes throughout. No association — quick and easy approval process. Pet friendly ($300 nonrefundable pet fee, restrictions may apply). Available now. Move-in cost: just first month and security deposit (approximately $5,100 total), plus a $50 application fee per applicant.",
      pt: "Apartamento de 2 quartos e 2 banheiros, totalmente reformado e pronto para morar, com acabamentos modernos em toda a unidade. Sem associação — processo de aprovação rápido e simples. Aceita animais de estimação (taxa não reembolsável de $300, restrições podem se aplicar). Disponível agora. Custo de mudança: apenas primeiro mês e depósito de segurança (aproximadamente $5.100 no total), mais taxa de inscrição de $50 por candidato."
    },
    neighborhood: {
      es: "Está en el Upper Eastside, la zona conocida por su arquitectura MiMo (Miami Modern) a lo largo de Biscayne Boulevard, con galerías de arte, tiendas y restaurantes de barrio. A minutos del Design District, Wynwood, Miami Beach y Brickell — de las mejores ubicaciones para moverte por toda la ciudad sin depender de una sola zona.",
      en: "Located in the Upper Eastside, known for its MiMo (Miami Modern) architecture along Biscayne Boulevard, with art galleries, boutique shops, and neighborhood restaurants. Minutes from the Design District, Wynwood, Miami Beach, and Brickell — one of the best-placed spots to get around the whole city without being tied to just one area.",
      pt: "Fica no Upper Eastside, conhecido pela arquitetura MiMo (Miami Modern) ao longo da Biscayne Boulevard, com galerias de arte, lojas de bairro e restaurantes. A poucos minutos do Design District, Wynwood, Miami Beach e Brickell — uma das localizações mais estratégicas para circular pela cidade inteira sem depender de uma única região."
    },
    images: {
      cover: "/assets/casas/miami-355-ne-55th-ter-1/exterior-thumb.jpg",
      gallery: [
        { full: "/assets/casas/miami-355-ne-55th-ter-1/exterior-full.jpg", thumb: "/assets/casas/miami-355-ne-55th-ter-1/exterior-thumb.jpg", alt: { es: "Fachada de la propiedad", en: "Property exterior", pt: "Fachada do imóvel" } },
        { full: "/assets/casas/miami-355-ne-55th-ter-1/living-full.jpg", thumb: "/assets/casas/miami-355-ne-55th-ter-1/living-thumb.jpg", alt: { es: "Sala y cocina", en: "Living area and kitchen", pt: "Sala e cozinha" } },
        { full: "/assets/casas/miami-355-ne-55th-ter-1/kitchen-full.jpg", thumb: "/assets/casas/miami-355-ne-55th-ter-1/kitchen-thumb.jpg", alt: { es: "Cocina", en: "Kitchen", pt: "Cozinha" } },
        { full: "/assets/casas/miami-355-ne-55th-ter-1/bedroom-1-full.jpg", thumb: "/assets/casas/miami-355-ne-55th-ter-1/bedroom-1-thumb.jpg", alt: { es: "Habitación principal", en: "Primary bedroom", pt: "Quarto principal" } },
        { full: "/assets/casas/miami-355-ne-55th-ter-1/bedroom-2-full.jpg", thumb: "/assets/casas/miami-355-ne-55th-ter-1/bedroom-2-thumb.jpg", alt: { es: "Segunda habitación", en: "Second bedroom", pt: "Segundo quarto" } },
        { full: "/assets/casas/miami-355-ne-55th-ter-1/bathroom-1-full.jpg", thumb: "/assets/casas/miami-355-ne-55th-ter-1/bathroom-1-thumb.jpg", alt: { es: "Baño principal", en: "Primary bathroom", pt: "Banheiro principal" } },
        { full: "/assets/casas/miami-355-ne-55th-ter-1/bathroom-2-full.jpg", thumb: "/assets/casas/miami-355-ne-55th-ter-1/bathroom-2-thumb.jpg", alt: { es: "Segundo baño", en: "Second bathroom", pt: "Segundo banheiro" } },
        { full: "/assets/casas/miami-355-ne-55th-ter-1/yard-full.jpg", thumb: "/assets/casas/miami-355-ne-55th-ter-1/yard-thumb.jpg", alt: { es: "Patio y entrada", en: "Yard and entrance", pt: "Quintal e entrada" } }
      ]
    }
  },
  {
    slug: "miami-228-nw-39th-st",
    operation: "renta",
    price: 3300,
    beds: 3,
    baths: 1,
    yearBuilt: 1936,
    address: "228 NW 39th St # 0, Miami, FL 33127",
    cityLine: "Buena Vista · Miami, FL",
    title: {
      es: "Casa renovada a pasos del Design District",
      en: "Renovated home steps from the Design District",
      pt: "Casa reformada a poucos passos do Design District"
    },
    description: {
      es: "Casa unifamiliar de 3 habitaciones y 1 baño, completamente renovada, con acabados modernos, espacios amplios y mucha luz natural. Incluye lavadora y secadora. Patio privado cercado y estacionamiento en driveway. Se aceptan mascotas (aplican restricciones), proceso de aprobación rápido. Disponible ahora. Costo de mudanza: primer mes, último mes y depósito de seguridad (aproximadamente $9,900 en total), más cuota de aplicación de $39 por solicitante.",
      en: "Beautifully renovated 3-bedroom, 1-bathroom single-family home with modern finishes, spacious living areas, and plenty of natural light throughout. Washer and dryer included. Private, fenced yard with a patio and driveway parking. Pet friendly (restrictions may apply), fast approval process. Available now. Move-in cost: first month, last month, and security deposit (approximately $9,900 total), plus a $39 application fee per applicant.",
      pt: "Casa unifamiliar de 3 quartos e 1 banheiro, lindamente reformada, com acabamentos modernos, espaços amplos e muita luz natural. Inclui lavadora e secadora. Quintal privativo cercado com pátio e estacionamento na entrada. Aceita animais de estimação (restrições podem se aplicar), processo de aprovação rápido. Disponível agora. Custo de mudança: primeiro mês, último mês e depósito de segurança (aproximadamente $9.900 no total), mais taxa de inscrição de $39 por candidato."
    },
    neighborhood: {
      es: "Ubicada en Buena Vista, a pocas cuadras del Design District — el corazón del diseño y la moda de lujo en Miami, con showrooms, galerías y algunos de los restaurantes mejor calificados de la ciudad. Wynwood, Midtown, Edgewater y Brickell quedan a minutos, y el acceso a las principales autopistas hace fácil moverte hacia cualquier parte de Miami-Dade.",
      en: "Located in Buena Vista, just blocks from the Design District — the heart of Miami's luxury design and fashion scene, with showrooms, galleries, and some of the city's top-rated restaurants. Wynwood, Midtown, Edgewater, and Brickell are minutes away, and easy access to major highways makes it simple to get anywhere in Miami-Dade.",
      pt: "Localizada em Buena Vista, a poucos quarteirões do Design District — o coração do design de luxo e da moda em Miami, com showrooms, galerias e alguns dos restaurantes mais bem avaliados da cidade. Wynwood, Midtown, Edgewater e Brickell ficam a minutos, e o acesso fácil às principais rodovias facilita chegar a qualquer lugar em Miami-Dade."
    },
    images: {
      cover: "/assets/casas/miami-228-nw-39th-st/exterior-thumb.jpg",
      gallery: [
        { full: "/assets/casas/miami-228-nw-39th-st/exterior-full.jpg", thumb: "/assets/casas/miami-228-nw-39th-st/exterior-thumb.jpg", alt: { es: "Fachada y jardín", en: "Exterior and yard", pt: "Fachada e jardim" } },
        { full: "/assets/casas/miami-228-nw-39th-st/living-full.jpg", thumb: "/assets/casas/miami-228-nw-39th-st/living-thumb.jpg", alt: { es: "Sala de estar", en: "Living room", pt: "Sala de estar" } },
        { full: "/assets/casas/miami-228-nw-39th-st/kitchen-full.jpg", thumb: "/assets/casas/miami-228-nw-39th-st/kitchen-thumb.jpg", alt: { es: "Cocina", en: "Kitchen", pt: "Cozinha" } },
        { full: "/assets/casas/miami-228-nw-39th-st/bedroom-1-full.jpg", thumb: "/assets/casas/miami-228-nw-39th-st/bedroom-1-thumb.jpg", alt: { es: "Habitación", en: "Bedroom", pt: "Quarto" } },
        { full: "/assets/casas/miami-228-nw-39th-st/bedroom-2-full.jpg", thumb: "/assets/casas/miami-228-nw-39th-st/bedroom-2-thumb.jpg", alt: { es: "Habitación con clóset", en: "Bedroom with closet", pt: "Quarto com closet" } },
        { full: "/assets/casas/miami-228-nw-39th-st/bathroom-full.jpg", thumb: "/assets/casas/miami-228-nw-39th-st/bathroom-thumb.jpg", alt: { es: "Baño", en: "Bathroom", pt: "Banheiro" } },
        { full: "/assets/casas/miami-228-nw-39th-st/laundry-full.jpg", thumb: "/assets/casas/miami-228-nw-39th-st/laundry-thumb.jpg", alt: { es: "Área de lavandería", en: "Laundry area", pt: "Área de lavanderia" } },
        { full: "/assets/casas/miami-228-nw-39th-st/patio-full.jpg", thumb: "/assets/casas/miami-228-nw-39th-st/patio-thumb.jpg", alt: { es: "Patio lateral cercado", en: "Fenced side patio", pt: "Pátio lateral cercado" } }
      ]
    }
  }
];
