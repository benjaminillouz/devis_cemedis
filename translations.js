// Système de traduction i18n pour le devis dentaire
const translations = {
    // Français (par défaut)
    fr: {
        "header.title": "Mon Devis Dentaire",
        "header.devisNumber": "Devis n°",
        "header.centre": "Centre :",
        "header.praticien": "Praticien :",
        "header.date": "Date :",
        "nav.devis": "Mon Devis",
        "nav.comprendre": "Comprendre",
        "nav.remboursements": "Remboursements",
        "nav.financement": "Financement",
        "nav.comparateur": "Comparateur Mutuelles",
        "devis.title": "Mon Plan de Traitement",
        "devis.subtitle": "Détail de votre traitement dentaire",
        "devis.table.date": "Date",
        "devis.table.acte": "Acte",
        "devis.table.dent": "Dent",
        "devis.table.honoraires": "Honoraires",
        "devis.summary.title": "Résumé Financier",
        "devis.summary.total": "Montant total",
        "devis.summary.ss": "Sécurité Sociale",
        "devis.summary.mutuelle": "Mutuelle",
        "devis.summary.rac": "À votre charge",
        "devis.btn.download": "Télécharger le PDF",
        "devis.btn.sign": "Signer le Devis",
        "comprendre.title": "Comprendre Mon Devis",
        "comprendre.subtitle": "Informations détaillées sur votre traitement",
        "remboursements.title": "Mes Remboursements",
        "remboursements.subtitle": "Détail de vos remboursements Sécurité Sociale et mutuelle",
        "remboursements.ss.title": "Sécurité Sociale",
        "remboursements.ss.desc": "Remboursement direct de la Sécurité Sociale à votre établissement.",
        "remboursements.ss.calc": "Calculé à 60% de la Base de Remboursement (BR)",
        "remboursements.mut.title": "Mutuelle Complémentaire",
        "remboursements.mut.desc": "Montant remboursé par votre mutuelle complémentaire.",
        "remboursements.mut.benefit": "Nos services s'occupent de toutes les démarches",
        "remboursements.rac.title": "À Votre Charge",
        "remboursements.rac.desc": "Montant que vous devez régler à l'établissement.",
        "remboursements.rac.info": "Solutions de paiement en plusieurs fois disponibles",
        "financement.title": "Financement",
        "financement.subtitle": "Solutions de paiement pour votre traitement",
        "financement.amount": "Montant à payer",
        "financement.selectAmount": "Sélectionnez un montant à financer",
        "financement.chooseMethod": "Choisir votre mode de financement",
        "financement.klarna.title": "Klarna 3x 4x",
        "financement.klarna.desc": "Paiement en 3 ou 4 fois sans frais",
        "financement.alma.title": "Alma 3x 4x",
        "financement.alma.desc": "Paiement en plusieurs fois sans frais",
        "financement.cb.title": "Cartes Bancaires",
        "financement.cb.desc": "Paiement sécurisé par carte bancaire",
        "financement.secure.title": "Paiement Sécurisé",
        "financement.secure.desc": "Toutes les transactions sont protégées par un cryptage SSL",
        "financement.fast.title": "Validation Rapide",
        "financement.fast.desc": "Votre demande de financement est traitée en quelques minutes",
        "comparateur.title": "Comparateur Mutuelles",
        "comparateur.subtitle": "Comparez les offres de mutuelles pour optimiser vos remboursements",
        "loading.title": "Transmission en cours",
        "loading.text": "Envoi de vos informations de financement...",
        "lang.select": "Langue"
    },

    // English
    en: {
        "header.title": "My Dental Quote",
        "header.devisNumber": "Quote No.",
        "header.centre": "Center:",
        "header.praticien": "Practitioner:",
        "header.date": "Date:",
        "nav.devis": "My Quote",
        "nav.comprendre": "Understand",
        "nav.remboursements": "Reimbursements",
        "nav.financement": "Financing",
        "nav.comparateur": "Insurance Comparison",
        "devis.title": "My Treatment Plan",
        "devis.subtitle": "Details of your dental treatment",
        "devis.table.date": "Date",
        "devis.table.acte": "Procedure",
        "devis.table.dent": "Tooth",
        "devis.table.honoraires": "Fees",
        "devis.summary.title": "Financial Summary",
        "devis.summary.total": "Total amount",
        "devis.summary.ss": "Social Security",
        "devis.summary.mutuelle": "Insurance",
        "devis.summary.rac": "Your share",
        "devis.btn.download": "Download PDF",
        "devis.btn.sign": "Sign Quote",
        "comprendre.title": "Understanding My Quote",
        "comprendre.subtitle": "Detailed information about your treatment",
        "remboursements.title": "My Reimbursements",
        "remboursements.subtitle": "Details of your Social Security and insurance reimbursements",
        "remboursements.ss.title": "Social Security",
        "remboursements.ss.desc": "Direct reimbursement from Social Security to your facility.",
        "remboursements.ss.calc": "Calculated at 60% of the Reimbursement Base",
        "remboursements.mut.title": "Complementary Insurance",
        "remboursements.mut.desc": "Amount reimbursed by your complementary insurance.",
        "remboursements.mut.benefit": "Our services handle all the procedures",
        "remboursements.rac.title": "Your Share",
        "remboursements.rac.desc": "Amount you must pay to the facility.",
        "remboursements.rac.info": "Payment in installments available",
        "financement.title": "Financing",
        "financement.subtitle": "Payment solutions for your treatment",
        "financement.amount": "Amount to pay",
        "financement.selectAmount": "Select an amount to finance",
        "financement.chooseMethod": "Choose your payment method",
        "financement.klarna.title": "Klarna 3x 4x",
        "financement.klarna.desc": "Payment in 3 or 4 interest-free installments",
        "financement.alma.title": "Alma 3x 4x",
        "financement.alma.desc": "Interest-free installment payment",
        "financement.cb.title": "Credit Cards",
        "financement.cb.desc": "Secure card payment",
        "financement.secure.title": "Secure Payment",
        "financement.secure.desc": "All transactions are protected by SSL encryption",
        "financement.fast.title": "Quick Validation",
        "financement.fast.desc": "Your financing request is processed in minutes",
        "comparateur.title": "Insurance Comparison",
        "comparateur.subtitle": "Compare insurance offers to optimize your reimbursements",
        "loading.title": "Transmission in progress",
        "loading.text": "Sending your financing information...",
        "lang.select": "Language"
    },

    // Español
    es: {
        "header.title": "Mi Presupuesto Dental",
        "header.devisNumber": "Presupuesto n°",
        "header.centre": "Centro:",
        "header.praticien": "Profesional:",
        "header.date": "Fecha:",
        "nav.devis": "Mi Presupuesto",
        "nav.comprendre": "Entender",
        "nav.remboursements": "Reembolsos",
        "nav.financement": "Financiación",
        "nav.comparateur": "Comparador de Seguros",
        "devis.title": "Mi Plan de Tratamiento",
        "devis.subtitle": "Detalle de su tratamiento dental",
        "devis.table.date": "Fecha",
        "devis.table.acte": "Procedimiento",
        "devis.table.dent": "Diente",
        "devis.table.honoraires": "Honorarios",
        "devis.summary.title": "Resumen Financiero",
        "devis.summary.total": "Importe total",
        "devis.summary.ss": "Seguridad Social",
        "devis.summary.mutuelle": "Seguro",
        "devis.summary.rac": "A su cargo",
        "devis.btn.download": "Descargar PDF",
        "devis.btn.sign": "Firmar Presupuesto",
        "comprendre.title": "Entender Mi Presupuesto",
        "comprendre.subtitle": "Información detallada sobre su tratamiento",
        "remboursements.title": "Mis Reembolsos",
        "remboursements.subtitle": "Detalle de sus reembolsos de Seguridad Social y seguro",
        "remboursements.ss.title": "Seguridad Social",
        "remboursements.ss.desc": "Reembolso directo de la Seguridad Social a su establecimiento.",
        "remboursements.ss.calc": "Calculado al 60% de la Base de Reembolso",
        "remboursements.mut.title": "Seguro Complementario",
        "remboursements.mut.desc": "Importe reembolsado por su seguro complementario.",
        "remboursements.mut.benefit": "Nuestros servicios se encargan de todos los trámites",
        "remboursements.rac.title": "A Su Cargo",
        "remboursements.rac.desc": "Importe que debe pagar al establecimiento.",
        "remboursements.rac.info": "Soluciones de pago en cuotas disponibles",
        "financement.title": "Financiación",
        "financement.subtitle": "Soluciones de pago para su tratamiento",
        "financement.amount": "Importe a pagar",
        "financement.selectAmount": "Seleccione un importe a financiar",
        "financement.chooseMethod": "Elija su método de pago",
        "financement.klarna.title": "Klarna 3x 4x",
        "financement.klarna.desc": "Pago en 3 o 4 cuotas sin intereses",
        "financement.alma.title": "Alma 3x 4x",
        "financement.alma.desc": "Pago en cuotas sin intereses",
        "financement.cb.title": "Tarjetas Bancarias",
        "financement.cb.desc": "Pago seguro con tarjeta",
        "financement.secure.title": "Pago Seguro",
        "financement.secure.desc": "Todas las transacciones están protegidas por cifrado SSL",
        "financement.fast.title": "Validación Rápida",
        "financement.fast.desc": "Su solicitud de financiación se procesa en minutos",
        "comparateur.title": "Comparador de Seguros",
        "comparateur.subtitle": "Compare ofertas de seguros para optimizar sus reembolsos",
        "loading.title": "Transmisión en curso",
        "loading.text": "Enviando su información de financiación...",
        "lang.select": "Idioma"
    },

    // Português
    pt: {
        "header.title": "Meu Orçamento Dentário",
        "header.devisNumber": "Orçamento n°",
        "header.centre": "Centro:",
        "header.praticien": "Profissional:",
        "header.date": "Data:",
        "nav.devis": "Meu Orçamento",
        "nav.comprendre": "Entender",
        "nav.remboursements": "Reembolsos",
        "nav.financement": "Financiamento",
        "nav.comparateur": "Comparador de Seguros",
        "devis.title": "Meu Plano de Tratamento",
        "devis.subtitle": "Detalhes do seu tratamento dentário",
        "devis.table.date": "Data",
        "devis.table.acte": "Procedimento",
        "devis.table.dent": "Dente",
        "devis.table.honoraires": "Honorários",
        "devis.summary.title": "Resumo Financeiro",
        "devis.summary.total": "Valor total",
        "devis.summary.ss": "Segurança Social",
        "devis.summary.mutuelle": "Seguro",
        "devis.summary.rac": "A seu cargo",
        "devis.btn.download": "Baixar PDF",
        "devis.btn.sign": "Assinar Orçamento",
        "comprendre.title": "Entender Meu Orçamento",
        "comprendre.subtitle": "Informações detalhadas sobre seu tratamento",
        "remboursements.title": "Meus Reembolsos",
        "remboursements.subtitle": "Detalhes dos seus reembolsos de Segurança Social e seguro",
        "remboursements.ss.title": "Segurança Social",
        "remboursements.ss.desc": "Reembolso direto da Segurança Social para o seu estabelecimento.",
        "remboursements.ss.calc": "Calculado a 60% da Base de Reembolso",
        "remboursements.mut.title": "Seguro Complementar",
        "remboursements.mut.desc": "Valor reembolsado pelo seu seguro complementar.",
        "remboursements.mut.benefit": "Nossos serviços cuidam de todos os procedimentos",
        "remboursements.rac.title": "A Seu Cargo",
        "remboursements.rac.desc": "Valor que você deve pagar ao estabelecimento.",
        "remboursements.rac.info": "Soluções de pagamento parcelado disponíveis",
        "financement.title": "Financiamento",
        "financement.subtitle": "Soluções de pagamento para seu tratamento",
        "financement.amount": "Valor a pagar",
        "financement.selectAmount": "Selecione um valor a financiar",
        "financement.chooseMethod": "Escolha seu método de pagamento",
        "financement.klarna.title": "Klarna 3x 4x",
        "financement.klarna.desc": "Pagamento em 3 ou 4 parcelas sem juros",
        "financement.alma.title": "Alma 3x 4x",
        "financement.alma.desc": "Pagamento parcelado sem juros",
        "financement.cb.title": "Cartões Bancários",
        "financement.cb.desc": "Pagamento seguro com cartão",
        "financement.secure.title": "Pagamento Seguro",
        "financement.secure.desc": "Todas as transações são protegidas por criptografia SSL",
        "financement.fast.title": "Validação Rápida",
        "financement.fast.desc": "Seu pedido de financiamento é processado em minutos",
        "comparateur.title": "Comparador de Seguros",
        "comparateur.subtitle": "Compare ofertas de seguros para otimizar seus reembolsos",
        "loading.title": "Transmissão em andamento",
        "loading.text": "Enviando suas informações de financiamento...",
        "lang.select": "Idioma"
    },

    // العربية (Arabic)
    ar: {
        "header.title": "تقدير أسنان",
        "header.devisNumber": "رقم التقدير",
        "header.centre": "المركز:",
        "header.praticien": "الطبيب:",
        "header.date": "التاريخ:",
        "nav.devis": "التقدير",
        "nav.comprendre": "فهم",
        "nav.remboursements": "التعويضات",
        "nav.financement": "التمويل",
        "nav.comparateur": "مقارنة التأمين",
        "devis.title": "خطة العلاج",
        "devis.subtitle": "تفاصيل علاج الأسنان الخاص بك",
        "devis.table.date": "التاريخ",
        "devis.table.acte": "الإجراء",
        "devis.table.dent": "السن",
        "devis.table.honoraires": "الرسوم",
        "devis.summary.title": "الملخص المالي",
        "devis.summary.total": "المبلغ الإجمالي",
        "devis.summary.ss": "الضمان الاجتماعي",
        "devis.summary.mutuelle": "التأمين",
        "devis.summary.rac": "المبلغ المتبقي",
        "devis.btn.download": "تحميل PDF",
        "devis.btn.sign": "توقيع التقدير",
        "comprendre.title": "فهم التقدير",
        "comprendre.subtitle": "معلومات مفصلة عن علاجك",
        "remboursements.title": "تعويضاتي",
        "remboursements.subtitle": "تفاصيل تعويضات الضمان الاجتماعي والتأمين",
        "remboursements.ss.title": "الضمان الاجتماعي",
        "remboursements.ss.desc": "تعويض مباشر من الضمان الاجتماعي إلى مؤسستك.",
        "remboursements.ss.calc": "محسوب بنسبة 60% من قاعدة التعويض",
        "remboursements.mut.title": "التأمين التكميلي",
        "remboursements.mut.desc": "المبلغ المعوض من تأمينك التكميلي.",
        "remboursements.mut.benefit": "خدماتنا تتولى جميع الإجراءات",
        "remboursements.rac.title": "على عاتقك",
        "remboursements.rac.desc": "المبلغ الذي يجب دفعه للمؤسسة.",
        "remboursements.rac.info": "حلول الدفع بالتقسيط متاحة",
        "financement.title": "التمويل",
        "financement.subtitle": "حلول الدفع لعلاجك",
        "financement.amount": "المبلغ المستحق",
        "financement.selectAmount": "اختر مبلغاً للتمويل",
        "financement.chooseMethod": "اختر طريقة الدفع",
        "financement.klarna.title": "Klarna 3x 4x",
        "financement.klarna.desc": "الدفع على 3 أو 4 أقساط بدون فوائد",
        "financement.alma.title": "Alma 3x 4x",
        "financement.alma.desc": "الدفع بالتقسيط بدون فوائد",
        "financement.cb.title": "البطاقات البنكية",
        "financement.cb.desc": "دفع آمن بالبطاقة",
        "financement.secure.title": "دفع آمن",
        "financement.secure.desc": "جميع المعاملات محمية بتشفير SSL",
        "financement.fast.title": "موافقة سريعة",
        "financement.fast.desc": "يتم معالجة طلب التمويل في دقائق",
        "comparateur.title": "مقارنة التأمين",
        "comparateur.subtitle": "قارن عروض التأمين لتحسين تعويضاتك",
        "loading.title": "جاري الإرسال",
        "loading.text": "إرسال معلومات التمويل الخاصة بك...",
        "lang.select": "اللغة"
    },

    // 中文 (Chinese Mandarin)
    zh: {
        "header.title": "我的牙科报价",
        "header.devisNumber": "报价编号",
        "header.centre": "中心：",
        "header.praticien": "医生：",
        "header.date": "日期：",
        "nav.devis": "我的报价",
        "nav.comprendre": "了解",
        "nav.remboursements": "报销",
        "nav.financement": "融资",
        "nav.comparateur": "保险比较",
        "devis.title": "我的治疗计划",
        "devis.subtitle": "您的牙科治疗详情",
        "devis.table.date": "日期",
        "devis.table.acte": "项目",
        "devis.table.dent": "牙齿",
        "devis.table.honoraires": "费用",
        "devis.summary.title": "财务摘要",
        "devis.summary.total": "总金额",
        "devis.summary.ss": "社会保障",
        "devis.summary.mutuelle": "保险",
        "devis.summary.rac": "自付金额",
        "devis.btn.download": "下载PDF",
        "devis.btn.sign": "签署报价",
        "comprendre.title": "了解我的报价",
        "comprendre.subtitle": "关于您的治疗的详细信息",
        "remboursements.title": "我的报销",
        "remboursements.subtitle": "社会保障和保险报销详情",
        "remboursements.ss.title": "社会保障",
        "remboursements.ss.desc": "社会保障直接向您的机构报销。",
        "remboursements.ss.calc": "按报销基数的60%计算",
        "remboursements.mut.title": "补充保险",
        "remboursements.mut.desc": "由您的补充保险报销的金额。",
        "remboursements.mut.benefit": "我们的服务处理所有手续",
        "remboursements.rac.title": "自付部分",
        "remboursements.rac.desc": "您必须向机构支付的金额。",
        "remboursements.rac.info": "可分期付款",
        "financement.title": "融资",
        "financement.subtitle": "您的治疗付款方案",
        "financement.amount": "应付金额",
        "financement.selectAmount": "选择融资金额",
        "financement.chooseMethod": "选择付款方式",
        "financement.klarna.title": "Klarna 3x 4x",
        "financement.klarna.desc": "3或4期免息分期付款",
        "financement.alma.title": "Alma 3x 4x",
        "financement.alma.desc": "免息分期付款",
        "financement.cb.title": "银行卡",
        "financement.cb.desc": "安全卡支付",
        "financement.secure.title": "安全支付",
        "financement.secure.desc": "所有交易均受SSL加密保护",
        "financement.fast.title": "快速验证",
        "financement.fast.desc": "您的融资请求在几分钟内处理",
        "comparateur.title": "保险比较",
        "comparateur.subtitle": "比较保险报价以优化您的报销",
        "loading.title": "正在传输",
        "loading.text": "正在发送您的融资信息...",
        "lang.select": "语言"
    },

    // Srpski (Serbian)
    sr: {
        "header.title": "Moj Stomatološki Predračun",
        "header.devisNumber": "Predračun br.",
        "header.centre": "Centar:",
        "header.praticien": "Lekar:",
        "header.date": "Datum:",
        "nav.devis": "Moj Predračun",
        "nav.comprendre": "Razumevanje",
        "nav.remboursements": "Povraćaji",
        "nav.financement": "Finansiranje",
        "nav.comparateur": "Uporedi Osiguranja",
        "devis.title": "Moj Plan Lečenja",
        "devis.subtitle": "Detalji vašeg stomatološkog tretmana",
        "devis.table.date": "Datum",
        "devis.table.acte": "Postupak",
        "devis.table.dent": "Zub",
        "devis.table.honoraires": "Cena",
        "devis.summary.title": "Finansijski Pregled",
        "devis.summary.total": "Ukupan iznos",
        "devis.summary.ss": "Socijalno Osiguranje",
        "devis.summary.mutuelle": "Osiguranje",
        "devis.summary.rac": "Vaš udeo",
        "devis.btn.download": "Preuzmi PDF",
        "devis.btn.sign": "Potpiši Predračun",
        "comprendre.title": "Razumevanje Mog Predračuna",
        "comprendre.subtitle": "Detaljne informacije o vašem tretmanu",
        "remboursements.title": "Moji Povraćaji",
        "remboursements.subtitle": "Detalji povraćaja socijalnog osiguranja i osiguranja",
        "remboursements.ss.title": "Socijalno Osiguranje",
        "remboursements.ss.desc": "Direktni povraćaj od socijalnog osiguranja vašoj ustanovi.",
        "remboursements.ss.calc": "Izračunato na 60% baze povraćaja",
        "remboursements.mut.title": "Dopunsko Osiguranje",
        "remboursements.mut.desc": "Iznos koji vraća vaše dopunsko osiguranje.",
        "remboursements.mut.benefit": "Naše usluge se bave svim postupcima",
        "remboursements.rac.title": "Vaš Udeo",
        "remboursements.rac.desc": "Iznos koji morate platiti ustanovi.",
        "remboursements.rac.info": "Dostupno plaćanje na rate",
        "financement.title": "Finansiranje",
        "financement.subtitle": "Rešenja za plaćanje vašeg tretmana",
        "financement.amount": "Iznos za plaćanje",
        "financement.selectAmount": "Izaberite iznos za finansiranje",
        "financement.chooseMethod": "Izaberite način plaćanja",
        "financement.klarna.title": "Klarna 3x 4x",
        "financement.klarna.desc": "Plaćanje u 3 ili 4 rate bez kamate",
        "financement.alma.title": "Alma 3x 4x",
        "financement.alma.desc": "Plaćanje na rate bez kamate",
        "financement.cb.title": "Platne Kartice",
        "financement.cb.desc": "Sigurno plaćanje karticom",
        "financement.secure.title": "Sigurno Plaćanje",
        "financement.secure.desc": "Sve transakcije su zaštićene SSL enkripcijom",
        "financement.fast.title": "Brza Validacija",
        "financement.fast.desc": "Vaš zahtev za finansiranje se obrađuje za nekoliko minuta",
        "comparateur.title": "Uporedi Osiguranja",
        "comparateur.subtitle": "Uporedite ponude osiguranja da optimizujete povraćaje",
        "loading.title": "Prenos u toku",
        "loading.text": "Slanje vaših informacija o finansiranju...",
        "lang.select": "Jezik"
    },

    // Deutsch (German)
    de: {
        "header.title": "Mein Zahnarzt-Kostenvoranschlag",
        "header.devisNumber": "Kostenvoranschlag Nr.",
        "header.centre": "Zentrum:",
        "header.praticien": "Arzt:",
        "header.date": "Datum:",
        "nav.devis": "Mein Kostenvoranschlag",
        "nav.comprendre": "Verstehen",
        "nav.remboursements": "Erstattungen",
        "nav.financement": "Finanzierung",
        "nav.comparateur": "Versicherungsvergleich",
        "devis.title": "Mein Behandlungsplan",
        "devis.subtitle": "Details Ihrer zahnärztlichen Behandlung",
        "devis.table.date": "Datum",
        "devis.table.acte": "Behandlung",
        "devis.table.dent": "Zahn",
        "devis.table.honoraires": "Kosten",
        "devis.summary.title": "Finanzübersicht",
        "devis.summary.total": "Gesamtbetrag",
        "devis.summary.ss": "Sozialversicherung",
        "devis.summary.mutuelle": "Versicherung",
        "devis.summary.rac": "Ihr Anteil",
        "devis.btn.download": "PDF herunterladen",
        "devis.btn.sign": "Kostenvoranschlag unterschreiben",
        "comprendre.title": "Meinen Kostenvoranschlag verstehen",
        "comprendre.subtitle": "Detaillierte Informationen zu Ihrer Behandlung",
        "remboursements.title": "Meine Erstattungen",
        "remboursements.subtitle": "Details zu Erstattungen der Sozialversicherung und Versicherung",
        "remboursements.ss.title": "Sozialversicherung",
        "remboursements.ss.desc": "Direkte Erstattung der Sozialversicherung an Ihre Einrichtung.",
        "remboursements.ss.calc": "Berechnet mit 60% der Erstattungsbasis",
        "remboursements.mut.title": "Zusatzversicherung",
        "remboursements.mut.desc": "Betrag, der von Ihrer Zusatzversicherung erstattet wird.",
        "remboursements.mut.benefit": "Unsere Dienste kümmern sich um alle Verfahren",
        "remboursements.rac.title": "Ihr Anteil",
        "remboursements.rac.desc": "Betrag, den Sie an die Einrichtung zahlen müssen.",
        "remboursements.rac.info": "Ratenzahlung möglich",
        "financement.title": "Finanzierung",
        "financement.subtitle": "Zahlungslösungen für Ihre Behandlung",
        "financement.amount": "Zu zahlender Betrag",
        "financement.selectAmount": "Wählen Sie einen zu finanzierenden Betrag",
        "financement.chooseMethod": "Wählen Sie Ihre Zahlungsmethode",
        "financement.klarna.title": "Klarna 3x 4x",
        "financement.klarna.desc": "Zahlung in 3 oder 4 zinsfreien Raten",
        "financement.alma.title": "Alma 3x 4x",
        "financement.alma.desc": "Zinsfreie Ratenzahlung",
        "financement.cb.title": "Bankkarten",
        "financement.cb.desc": "Sichere Kartenzahlung",
        "financement.secure.title": "Sichere Zahlung",
        "financement.secure.desc": "Alle Transaktionen sind durch SSL-Verschlüsselung geschützt",
        "financement.fast.title": "Schnelle Validierung",
        "financement.fast.desc": "Ihr Finanzierungsantrag wird in Minuten bearbeitet",
        "comparateur.title": "Versicherungsvergleich",
        "comparateur.subtitle": "Vergleichen Sie Versicherungsangebote um Ihre Erstattungen zu optimieren",
        "loading.title": "Übertragung läuft",
        "loading.text": "Senden Ihrer Finanzierungsinformationen...",
        "lang.select": "Sprache"
    }
};

// Liste des langues disponibles
const availableLanguages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦', rtl: true },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'sr', name: 'Srpski', flag: '🇷🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
];

// Langue actuelle
let currentLanguage = 'fr';

// Obtenir une traduction
function t(key) {
    const lang = translations[currentLanguage] || translations['fr'];
    return lang[key] || translations['fr'][key] || key;
}

// Changer la langue
function setLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        localStorage.setItem('devis-language', lang);
        applyTranslations();
        updateLanguageSelector();

        // Gérer le RTL pour l'arabe
        const langConfig = availableLanguages.find(l => l.code === lang);
        if (langConfig && langConfig.rtl) {
            document.documentElement.setAttribute('dir', 'rtl');
            document.body.classList.add('rtl');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
            document.body.classList.remove('rtl');
        }
    }
}

// Appliquer les traductions à tous les éléments avec data-i18n
function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = t(key);
        if (translation) {
            element.textContent = translation;
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = t(key);
        if (translation) {
            element.placeholder = translation;
        }
    });

    document.querySelectorAll('[data-i18n-title]').forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        const translation = t(key);
        if (translation) {
            element.title = translation;
        }
    });

    document.documentElement.lang = currentLanguage;
}

// Mettre à jour le sélecteur de langue
function updateLanguageSelector() {
    const selector = document.getElementById('language-selector');
    if (selector) {
        selector.value = currentLanguage;
    }
}

// Initialiser la langue au chargement
function initializeLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    const savedLang = localStorage.getItem('devis-language');
    const browserLang = navigator.language.split('-')[0];

    if (urlLang && translations[urlLang]) {
        currentLanguage = urlLang;
    } else if (savedLang && translations[savedLang]) {
        currentLanguage = savedLang;
    } else if (translations[browserLang]) {
        currentLanguage = browserLang;
    } else {
        currentLanguage = 'fr';
    }

    localStorage.setItem('devis-language', currentLanguage);
    applyTranslations();
    updateLanguageSelector();

    // Gérer le RTL pour l'arabe
    const langConfig = availableLanguages.find(l => l.code === currentLanguage);
    if (langConfig && langConfig.rtl) {
        document.documentElement.setAttribute('dir', 'rtl');
        document.body.classList.add('rtl');
    }
}

// Exporter pour utilisation globale
window.translations = translations;
window.t = t;
window.setLanguage = setLanguage;
window.initializeLanguage = initializeLanguage;
window.availableLanguages = availableLanguages;
window.currentLanguage = currentLanguage;
