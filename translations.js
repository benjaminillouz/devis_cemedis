// Système de traduction i18n pour le devis dentaire
const translations = {
    // Français (par défaut)
    fr: {
        // Header
        "header.title": "Mon Devis Dentaire",
        "header.devisNumber": "Devis n°",
        "header.centre": "Centre :",
        "header.praticien": "Praticien :",
        "header.date": "Date :",

        // Navigation
        "nav.devis": "Mon Devis",
        "nav.comprendre": "Comprendre",
        "nav.remboursements": "Remboursements",
        "nav.financement": "Financement",
        "nav.comparateur": "Comparateur Mutuelles",

        // Section Devis
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

        // Section Comprendre
        "comprendre.title": "Comprendre Mon Devis",
        "comprendre.subtitle": "Informations détaillées sur votre traitement",
        "comprendre.implants": "Implants",
        "comprendre.orthodontie": "Orthodontie",
        "comprendre.appareils": "Appareils",
        "comprendre.bridges": "Bridges",
        "comprendre.couronnes": "Couronnes",
        "comprendre.inlayCore": "Inlay Core",
        "comprendre.inlayOnlay": "Inlay Onlay",

        // Implants
        "implants.title": "Implants dentaires",
        "implants.intro": "Les implants dentaires sont une solution moderne, durable et esthétique pour remplacer une ou plusieurs dents manquantes. Ils offrent une alternative fixe aux prothèses amovibles et aident à préserver la structure de la mâchoire et des dents adjacentes.",
        "implants.whatIs.title": "Qu'est-ce qu'un implant dentaire ?",
        "implants.whatIs.text": "Un implant dentaire est une racine artificielle en titane ou en zircone, insérée dans l'os de la mâchoire pour remplacer une dent manquante. Une couronne, un bridge ou une prothèse amovible est ensuite fixée sur cet implant pour restaurer l'apparence et la fonction de la dent.",
        "implants.when.title": "Quand a-t-on besoin d'un implant dentaire ?",
        "implants.when.text": "Les implants sont recommandés pour :",
        "implants.when.item1": "Remplacer une ou plusieurs dents manquantes",
        "implants.when.item2": "Stabiliser une prothèse amovible",
        "implants.when.item3": "Prévenir la perte osseuse dans la mâchoire après une extraction",
        "implants.when.item4": "Restaurer la fonction masticatoire et esthétique du sourire",
        "implants.when.item5": "Offrir une alternative durable aux bridges et prothèses traditionnelles",
        "implants.steps.title": "Étapes de réalisation :",
        "implants.steps.item1": "Consultation initiale : Le dentiste évalue l'état de votre mâchoire, votre santé bucco-dentaire et vos besoins",
        "implants.steps.item2": "Planification : Des examens (radiographie, scanner) sont réalisés pour évaluer la quantité et la qualité de l'os",
        "implants.steps.item3": "Pose de l'implant : Sous anesthésie locale, l'implant est inséré dans l'os de la mâchoire",
        "implants.steps.item4": "Période de cicatrisation : L'os fusionne avec l'implant (ostéointégration) sur une période de 3 à 6 mois",
        "implants.steps.item5": "Fixation de l'élément prothétique : Une fois l'implant stable, une couronne, un bridge ou une prothèse est fixé(e) sur l'implant",
        "implants.steps.item6": "Suivi régulier : Le dentiste contrôle l'état de l'implant et de la prothèse",
        "implants.reimbursement.notCoveredSS": "Acte non remboursé par la Sécurité Sociale",
        "implants.reimbursement.notCoveredMut": "Acte non pris en charge par les Mutuelles complémentaires sauf contrats spécifiques",

        // Section Remboursements
        "remboursements.title": "Mes Remboursements",
        "remboursements.subtitle": "Détail de vos remboursements Sécurité Sociale et mutuelle",
        "remboursements.ss.title": "Sécurité Sociale",
        "remboursements.ss.desc": "Remboursement direct de la Sécurité Sociale à votre établissement. Ce montant correspond à la colonne 'Part RO' ou 'Part S.S' sur un devis.",
        "remboursements.ss.calc": "Calculé à 60% de la Base de Remboursement (BR)",
        "remboursements.mut.title": "Mutuelle Complémentaire",
        "remboursements.mut.desc": "Montant remboursé par votre mutuelle complémentaire. Ce montant peut être réglé directement à notre établissement si votre mutuelle accepte la Prise En Charge Tiers Payant.",
        "remboursements.mut.benefit": "Nos services s'occupent de toutes les démarches",
        "remboursements.rac.title": "À Votre Charge",
        "remboursements.rac.desc": "Montant que vous devez régler à l'établissement. Un acompte d'au moins 50% du montant à payer doit être versé lors de la commande des prothèses.",
        "remboursements.rac.info": "Solutions de paiement en plusieurs fois disponibles",

        // Section Financement
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

        // Section Comparateur
        "comparateur.title": "Comparateur Mutuelles",
        "comparateur.subtitle": "Comparez les offres de mutuelles pour optimiser vos remboursements",

        // Modal Signature
        "modal.signature.title": "Signature du Devis",
        "modal.signature.patient": "Patient :",
        "modal.signature.praticien": "Praticien :",
        "modal.signature.total": "Montant total :",

        // Loading
        "loading.title": "Transmission en cours",
        "loading.text": "Envoi de vos informations de financement...",

        // Notifications
        "notification.downloadError": "Erreur lors du téléchargement du devis",
        "notification.noPdf": "Aucun PDF de devis disponible",
        "notification.paymentError": "Erreur lors de la création du lien de paiement. Veuillez réessayer.",
        "notification.missingId": "ID du devis manquant",

        // Remboursement status
        "reimbursement.covered": "Acte remboursé par la Sécurité Sociale",
        "reimbursement.coveredMut": "Acte pris en charge par les Mutuelles complémentaires",
        "reimbursement.notCovered": "Acte non remboursé par la Sécurité Sociale",
        "reimbursement.notCoveredMut": "Acte non pris en charge par les Mutuelles complémentaires sauf contrats spécifiques",

        // Sélecteur de langue
        "lang.select": "Langue"
    },

    // English
    en: {
        // Header
        "header.title": "My Dental Quote",
        "header.devisNumber": "Quote No.",
        "header.centre": "Center:",
        "header.praticien": "Practitioner:",
        "header.date": "Date:",

        // Navigation
        "nav.devis": "My Quote",
        "nav.comprendre": "Understand",
        "nav.remboursements": "Reimbursements",
        "nav.financement": "Financing",
        "nav.comparateur": "Insurance Comparison",

        // Section Devis
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

        // Section Comprendre
        "comprendre.title": "Understanding My Quote",
        "comprendre.subtitle": "Detailed information about your treatment",
        "comprendre.implants": "Implants",
        "comprendre.orthodontie": "Orthodontics",
        "comprendre.appareils": "Dentures",
        "comprendre.bridges": "Bridges",
        "comprendre.couronnes": "Crowns",
        "comprendre.inlayCore": "Post and Core",
        "comprendre.inlayOnlay": "Inlay Onlay",

        // Implants
        "implants.title": "Dental Implants",
        "implants.intro": "Dental implants are a modern, durable and aesthetic solution to replace one or more missing teeth. They offer a fixed alternative to removable prostheses and help preserve the structure of the jaw and adjacent teeth.",
        "implants.whatIs.title": "What is a dental implant?",
        "implants.whatIs.text": "A dental implant is an artificial root made of titanium or zirconia, inserted into the jawbone to replace a missing tooth. A crown, bridge or removable prosthesis is then attached to this implant to restore the appearance and function of the tooth.",
        "implants.when.title": "When do you need a dental implant?",
        "implants.when.text": "Implants are recommended for:",
        "implants.when.item1": "Replacing one or more missing teeth",
        "implants.when.item2": "Stabilizing a removable prosthesis",
        "implants.when.item3": "Preventing bone loss in the jaw after extraction",
        "implants.when.item4": "Restoring chewing function and smile aesthetics",
        "implants.when.item5": "Offering a durable alternative to traditional bridges and prostheses",
        "implants.steps.title": "Implementation steps:",
        "implants.steps.item1": "Initial consultation: The dentist evaluates the condition of your jaw, your oral health and your needs",
        "implants.steps.item2": "Planning: Examinations (X-ray, scanner) are carried out to assess the quantity and quality of the bone",
        "implants.steps.item3": "Implant placement: Under local anesthesia, the implant is inserted into the jawbone",
        "implants.steps.item4": "Healing period: The bone fuses with the implant (osseointegration) over a period of 3 to 6 months",
        "implants.steps.item5": "Prosthetic element attachment: Once the implant is stable, a crown, bridge or prosthesis is attached to the implant",
        "implants.steps.item6": "Regular follow-up: The dentist monitors the condition of the implant and prosthesis",
        "implants.reimbursement.notCoveredSS": "Procedure not covered by Social Security",
        "implants.reimbursement.notCoveredMut": "Procedure not covered by complementary insurance except for specific contracts",

        // Section Remboursements
        "remboursements.title": "My Reimbursements",
        "remboursements.subtitle": "Details of your Social Security and insurance reimbursements",
        "remboursements.ss.title": "Social Security",
        "remboursements.ss.desc": "Direct reimbursement from Social Security to your facility. This amount corresponds to the 'SS Share' column on a quote.",
        "remboursements.ss.calc": "Calculated at 60% of the Reimbursement Base",
        "remboursements.mut.title": "Complementary Insurance",
        "remboursements.mut.desc": "Amount reimbursed by your complementary insurance. This amount can be paid directly to our facility if your insurance accepts Third Party Payment.",
        "remboursements.mut.benefit": "Our services handle all the procedures",
        "remboursements.rac.title": "Your Share",
        "remboursements.rac.desc": "Amount you must pay to the facility. A deposit of at least 50% of the amount due must be paid when ordering prostheses.",
        "remboursements.rac.info": "Payment in installments available",

        // Section Financement
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

        // Section Comparateur
        "comparateur.title": "Insurance Comparison",
        "comparateur.subtitle": "Compare insurance offers to optimize your reimbursements",

        // Modal Signature
        "modal.signature.title": "Quote Signature",
        "modal.signature.patient": "Patient:",
        "modal.signature.praticien": "Practitioner:",
        "modal.signature.total": "Total amount:",

        // Loading
        "loading.title": "Transmission in progress",
        "loading.text": "Sending your financing information...",

        // Notifications
        "notification.downloadError": "Error downloading quote",
        "notification.noPdf": "No quote PDF available",
        "notification.paymentError": "Error creating payment link. Please try again.",
        "notification.missingId": "Quote ID missing",

        // Remboursement status
        "reimbursement.covered": "Procedure covered by Social Security",
        "reimbursement.coveredMut": "Procedure covered by complementary insurance",
        "reimbursement.notCovered": "Procedure not covered by Social Security",
        "reimbursement.notCoveredMut": "Procedure not covered by complementary insurance except for specific contracts",

        // Sélecteur de langue
        "lang.select": "Language"
    },

    // Español
    es: {
        // Header
        "header.title": "Mi Presupuesto Dental",
        "header.devisNumber": "Presupuesto n°",
        "header.centre": "Centro:",
        "header.praticien": "Profesional:",
        "header.date": "Fecha:",

        // Navigation
        "nav.devis": "Mi Presupuesto",
        "nav.comprendre": "Entender",
        "nav.remboursements": "Reembolsos",
        "nav.financement": "Financiación",
        "nav.comparateur": "Comparador de Seguros",

        // Section Devis
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

        // Section Comprendre
        "comprendre.title": "Entender Mi Presupuesto",
        "comprendre.subtitle": "Información detallada sobre su tratamiento",
        "comprendre.implants": "Implantes",
        "comprendre.orthodontie": "Ortodoncia",
        "comprendre.appareils": "Prótesis",
        "comprendre.bridges": "Puentes",
        "comprendre.couronnes": "Coronas",
        "comprendre.inlayCore": "Perno muñón",
        "comprendre.inlayOnlay": "Inlay Onlay",

        // Implants
        "implants.title": "Implantes dentales",
        "implants.intro": "Los implantes dentales son una solución moderna, duradera y estética para reemplazar uno o varios dientes faltantes. Ofrecen una alternativa fija a las prótesis removibles y ayudan a preservar la estructura de la mandíbula y los dientes adyacentes.",
        "implants.whatIs.title": "¿Qué es un implante dental?",
        "implants.whatIs.text": "Un implante dental es una raíz artificial de titanio o circonio, insertada en el hueso de la mandíbula para reemplazar un diente faltante. Una corona, puente o prótesis removible se fija luego a este implante para restaurar la apariencia y función del diente.",
        "implants.when.title": "¿Cuándo se necesita un implante dental?",
        "implants.when.text": "Los implantes se recomiendan para:",
        "implants.when.item1": "Reemplazar uno o varios dientes faltantes",
        "implants.when.item2": "Estabilizar una prótesis removible",
        "implants.when.item3": "Prevenir la pérdida ósea en la mandíbula después de una extracción",
        "implants.when.item4": "Restaurar la función masticatoria y la estética de la sonrisa",
        "implants.when.item5": "Ofrecer una alternativa duradera a puentes y prótesis tradicionales",
        "implants.steps.title": "Etapas de realización:",
        "implants.steps.item1": "Consulta inicial: El dentista evalúa el estado de su mandíbula, su salud bucal y sus necesidades",
        "implants.steps.item2": "Planificación: Se realizan exámenes (radiografía, escáner) para evaluar la cantidad y calidad del hueso",
        "implants.steps.item3": "Colocación del implante: Bajo anestesia local, el implante se inserta en el hueso de la mandíbula",
        "implants.steps.item4": "Período de cicatrización: El hueso se fusiona con el implante (osteointegración) durante un período de 3 a 6 meses",
        "implants.steps.item5": "Fijación del elemento protésico: Una vez que el implante está estable, se fija una corona, puente o prótesis al implante",
        "implants.steps.item6": "Seguimiento regular: El dentista controla el estado del implante y la prótesis",
        "implants.reimbursement.notCoveredSS": "Procedimiento no cubierto por la Seguridad Social",
        "implants.reimbursement.notCoveredMut": "Procedimiento no cubierto por seguros complementarios excepto contratos específicos",

        // Section Remboursements
        "remboursements.title": "Mis Reembolsos",
        "remboursements.subtitle": "Detalle de sus reembolsos de Seguridad Social y seguro",
        "remboursements.ss.title": "Seguridad Social",
        "remboursements.ss.desc": "Reembolso directo de la Seguridad Social a su establecimiento. Este importe corresponde a la columna 'Parte SS' en un presupuesto.",
        "remboursements.ss.calc": "Calculado al 60% de la Base de Reembolso",
        "remboursements.mut.title": "Seguro Complementario",
        "remboursements.mut.desc": "Importe reembolsado por su seguro complementario. Este importe puede ser pagado directamente a nuestro establecimiento si su seguro acepta el Pago a Terceros.",
        "remboursements.mut.benefit": "Nuestros servicios se encargan de todos los trámites",
        "remboursements.rac.title": "A Su Cargo",
        "remboursements.rac.desc": "Importe que debe pagar al establecimiento. Un anticipo de al menos el 50% del importe a pagar debe ser abonado al encargar las prótesis.",
        "remboursements.rac.info": "Soluciones de pago en cuotas disponibles",

        // Section Financement
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

        // Section Comparateur
        "comparateur.title": "Comparador de Seguros",
        "comparateur.subtitle": "Compare ofertas de seguros para optimizar sus reembolsos",

        // Modal Signature
        "modal.signature.title": "Firma del Presupuesto",
        "modal.signature.patient": "Paciente:",
        "modal.signature.praticien": "Profesional:",
        "modal.signature.total": "Importe total:",

        // Loading
        "loading.title": "Transmisión en curso",
        "loading.text": "Enviando su información de financiación...",

        // Notifications
        "notification.downloadError": "Error al descargar el presupuesto",
        "notification.noPdf": "No hay PDF de presupuesto disponible",
        "notification.paymentError": "Error al crear el enlace de pago. Por favor, inténtelo de nuevo.",
        "notification.missingId": "ID del presupuesto faltante",

        // Remboursement status
        "reimbursement.covered": "Procedimiento cubierto por la Seguridad Social",
        "reimbursement.coveredMut": "Procedimiento cubierto por seguro complementario",
        "reimbursement.notCovered": "Procedimiento no cubierto por la Seguridad Social",
        "reimbursement.notCoveredMut": "Procedimiento no cubierto por seguros complementarios excepto contratos específicos",

        // Sélecteur de langue
        "lang.select": "Idioma"
    }
};

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
    }
}

// Appliquer les traductions à tous les éléments avec data-i18n
function applyTranslations() {
    // Éléments avec data-i18n pour le texte
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = t(key);
        if (translation) {
            element.textContent = translation;
        }
    });

    // Éléments avec data-i18n-placeholder pour les placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = t(key);
        if (translation) {
            element.placeholder = translation;
        }
    });

    // Éléments avec data-i18n-title pour les titres
    document.querySelectorAll('[data-i18n-title]').forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        const translation = t(key);
        if (translation) {
            element.title = translation;
        }
    });

    // Mettre à jour l'attribut lang du document
    document.documentElement.lang = currentLanguage;
}

// Mettre à jour le sélecteur de langue
function updateLanguageSelector() {
    const selector = document.getElementById('language-selector');
    if (selector) {
        selector.value = currentLanguage;
    }

    // Mettre à jour le bouton actif
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active');
        }
    });
}

// Initialiser la langue au chargement
function initializeLanguage() {
    // Vérifier le paramètre URL
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');

    // Vérifier le localStorage
    const savedLang = localStorage.getItem('devis-language');

    // Vérifier la langue du navigateur
    const browserLang = navigator.language.split('-')[0];

    // Priorité : URL > localStorage > navigateur > français
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
}

// Liste des langues disponibles
const availableLanguages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
];

// Exporter pour utilisation globale
window.translations = translations;
window.t = t;
window.setLanguage = setLanguage;
window.initializeLanguage = initializeLanguage;
window.availableLanguages = availableLanguages;
window.currentLanguage = currentLanguage;
