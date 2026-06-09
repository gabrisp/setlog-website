/** Spanish strings for Privacy Policy page. */
export const privacyEs = {
  effectiveDateLabel: "Fecha de entrada en vigor",
  developerLabel: "Desarrollador",
  contactLabel: "Contacto",

  s1Title: "1. Introducción",
  s1Body1: "Gabriel Sanchez Palma (\"nosotros\", \"nos\" o \"nuestro\") opera la aplicación móvil SetLog (la \"App\"). Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos tu información cuando usas la App.",
  s1Body2: "Al usar SetLog, aceptas las prácticas descritas en esta Política de Privacidad. Si no estás de acuerdo con sus términos, por favor no uses la App.",

  s2Title: "2. Información que recopilamos",
  s21Title: "2.1 Información que proporcionas",
  s21Items: [
    { title: "Datos de entrenamiento", body: "Todos los datos de entrenamiento que introduces en la App — incluyendo ejercicios, series, repeticiones, pesos, notas de sesión y fechas — se almacenan localmente en tu dispositivo mediante CoreData. Estos datos no se transmiten a nuestros servidores salvo lo descrito en la sección de Funciones de IA." },
    { title: "Información de cuenta", body: "Cuando creas una cuenta para acceder a funciones con IA, recopilamos identificadores básicos de cuenta mediante Firebase Authentication (p. ej., un identificador anónimo o vinculado a email). No recopilamos tu nombre, dirección ni teléfono salvo que los proporciones voluntariamente." },
    { title: "Fotos", body: "Si usas la función opcional de captura de fotos dentro de la App, las fotos se almacenan únicamente en tu dispositivo. No subimos, transmitimos ni compartimos tus fotos con terceros." },
    { title: "Preferencias y ajustes", body: "Los ajustes de la app como el color de acento, preferencias de notificaciones y opciones de visualización se almacenan localmente en tu dispositivo." },
  ],
  s22Title: "2.2 Información recopilada automáticamente",
  s22Items: [
    { title: "Datos de suscripción y compras", body: "Cuando realizas una compra o gestionas una suscripción, RevenueCat procesa la transacción en nuestro nombre y nos proporciona tu estado de suscripción (activa, expirada, prueba, etc.). RevenueCat puede recopilar identificadores de dispositivo y metadatos de transacciones." },
    { title: "Analíticas de uso", body: "Usamos Google Analytics para recopilar datos anónimos y agregados sobre cómo los usuarios interactúan con la App — como qué pantallas se visitan, duración de sesión y frecuencia de uso de funciones. Estos datos no te identifican personalmente y se usan únicamente para mejorar la App." },
    { title: "Informes de fallos", body: "En caso de fallo de la App, puede recopilarse automáticamente información de diagnóstico básica para ayudarnos a identificar y solucionar problemas." },
  ],

  s3Title: "3. Cómo usamos tu información",
  s3Intro: "Usamos la información que recopilamos para los siguientes fines:",
  s3TableRows: [
    { purpose: "Proporcionar y operar las funciones de la App", data: "Datos de entrenamiento (local), identificadores de cuenta" },
    { purpose: "Generar resúmenes de entrenamiento con IA", data: "Texto de entrenamiento anonimizado (ver Sección 6)" },
    { purpose: "Gestionar suscripciones y facturación", data: "Estado de suscripción de RevenueCat" },
    { purpose: "Mejorar la App", data: "Analíticas anónimas (Google Analytics)" },
    { purpose: "Diagnosticar y solucionar errores", data: "Informes de fallos, datos de diagnóstico" },
    { purpose: "Responder solicitudes de soporte", data: "Información que proporcionas por email" },
  ],
  s3NoSell: "No vendemos tu información personal a terceros.",

  s4Title: "4. Almacenamiento y seguridad de datos",
  s4Items: [
    { title: "Almacenamiento local", body: "La mayor parte de tus datos (entrenamientos, fotos, ajustes) se almacena exclusivamente en tu dispositivo mediante CoreData. Estos datos están protegidos por el cifrado de dispositivo integrado de iOS." },
    { title: "Almacenamiento en la nube", body: "Los identificadores de cuenta usados para funciones de IA se almacenan en servidores de Firebase. El estado de suscripción e historial de transacciones se almacena en los servidores de RevenueCat." },
    { title: "Medidas de seguridad", body: "Implementamos medidas técnicas y organizativas estándar del sector para proteger tu información. Sin embargo, ningún método de transmisión por internet o almacenamiento electrónico es 100% seguro. No podemos garantizar seguridad absoluta." },
    { title: "Notificación de brechas", body: "En el improbable caso de una brecha de datos que afecte a tu información personal, te notificaremos de acuerdo con la legislación aplicable." },
  ],

  s5Title: "5. Servicios de terceros",
  s5Intro: "La App se integra con los siguientes servicios de terceros. Cada uno tiene su propia política de privacidad que rige el uso de tus datos:",
  s5Services: [
    {
      title: "RevenueCat",
      body: "RevenueCat procesa las compras de suscripción y nos proporciona tu estado de suscripción. RevenueCat puede recopilar identificadores de dispositivo e historial de compras.",
      policyLabel: "Política de privacidad",
      policyUrl: "https://www.revenuecat.com/privacy",
    },
    {
      title: "Firebase (Google)",
      body: "Firebase Authentication se usa para crear y gestionar cuentas de usuario para las funciones con IA. Firebase es operado por Google LLC.",
      policyLabel: "Política de privacidad",
      policyUrl: "https://firebase.google.com/support/privacy",
    },
    {
      title: "Google Analytics",
      body: "Google Analytics se usa para recopilar estadísticas de uso anónimas. Google Analytics utiliza datos agregados y no identificables.",
      policyLabel: "Política de privacidad",
      policyUrl: "https://policies.google.com/privacy",
      optOut: "Puedes optar por no participar en la recopilación de datos de Google Analytics en cualquier momento desde los Ajustes de la App.",
      optOutLabel: "Exclusión voluntaria",
    },
  ],
  s5Disclaimer: "No somos responsables de las prácticas de privacidad de estos servicios de terceros.",

  s6Title: "6. Funciones de IA",
  s6Intro: "SetLog Pro incluye resúmenes de entrenamiento generados por IA. Cuando usas esta función:",
  s6Items: [
    "El contenido de texto de tu entrenamiento (nombres de ejercicios, datos de series, valores de rep/peso) se empaqueta en un prompt y se envía a un servicio de modelo de lenguaje con IA.",
    "No se incluye información de identificación personal (PII) — como tu nombre, dirección de email o identificador de dispositivo — en el prompt.",
    "El servicio de IA procesa este texto y devuelve un resumen, que se almacena localmente en tu dispositivo.",
    "No usamos tus datos de entrenamiento para entrenar modelos de IA.",
  ],
  s6Consent: "Al usar las funciones de IA, aceptas la transmisión de texto de entrenamiento anonimizado al proveedor del servicio de IA.",

  s7Title: "7. Conservación de datos",
  s7Items: [
    { title: "Datos locales", body: "Los datos de entrenamiento, fotos y ajustes almacenados en tu dispositivo permanecen hasta que los elimines dentro de la App o desinstales la App." },
    { title: "Datos de cuenta", body: "Tu identificador de cuenta de Firebase se conserva mientras tu cuenta exista. Puedes eliminar tu cuenta en cualquier momento desde Ajustes dentro de la App, lo que eliminará tus datos de cuenta de los servidores de Firebase." },
    { title: "Datos de analíticas", body: "Los datos de uso anónimos recopilados por Google Analytics se conservan según las políticas de retención estándar de Google (normalmente entre 14 y 26 meses)." },
    { title: "Datos de suscripción", body: "RevenueCat conserva los registros de transacciones de acuerdo con sus políticas de retención de datos y la normativa financiera aplicable." },
  ],

  s8Title: "8. Privacidad de menores",
  s8Body1: "SetLog no está dirigida a menores de 13 años. No recopilamos conscientemente información personal de menores de 13 años. Si descubrimos que un menor de 13 años nos ha proporcionado información personal, tomaremos medidas para eliminar dicha información de inmediato.",
  s8Body2: "Si eres padre, madre o tutor/a y crees que tu hijo/a nos ha proporcionado información personal, contáctanos en",

  s9Title: "9. Tus derechos",
  s9Intro: "Según tu ubicación, puedes tener los siguientes derechos sobre tu información personal:",
  s9Items: [
    { title: "Acceso", body: "Solicitar una copia de la información personal que tenemos sobre ti." },
    { title: "Corrección", body: "Solicitar la corrección de información personal inexacta." },
    { title: "Eliminación", body: "Solicitar la eliminación de tu información personal. Ten en cuenta que la mayor parte de tus datos se almacena localmente y puede eliminarse directamente desde la App." },
    { title: "Portabilidad", body: "Solicitar una copia legible por máquina de tus datos." },
    { title: "Oposición", body: "Oponerte a determinados tratamientos de tu información personal." },
    { title: "Exclusión de analíticas", body: "Desactivar la recopilación de analíticas anónimas en los Ajustes de la App." },
  ],
  s9Contact: "Para ejercer cualquiera de estos derechos, contáctanos en",
  s9Response: "Responderemos a tu solicitud en un plazo razonable.",
  s9Note: "Dado que la mayor parte de tus datos se almacena en tu dispositivo, tienes control directo sobre ellos en todo momento mediante la interfaz de la App o desinstalando la App.",
  s9NoteLabel: "Nota sobre datos locales",

  s10Title: "10. Cambios en esta Política de Privacidad",
  s10Body1: "Podemos actualizar esta Política de Privacidad de vez en cuando. Te notificaremos los cambios significativos actualizando la \"Fecha de entrada en vigor\" al inicio de este documento y, cuando proceda, publicando un aviso dentro de la App.",
  s10Body2: "Te recomendamos que revises esta Política de Privacidad periódicamente. El uso continuado de la App tras la entrada en vigor de los cambios constituye tu aceptación de la Política de Privacidad revisada.",

  s11Title: "11. Contacto",
  s11Intro: "Si tienes preguntas, dudas o solicitudes sobre esta Política de Privacidad, contacta con:",
  s11EmailLabel: "Email",
  s11Response: "Nos esforzaremos por responder a todas las consultas en un plazo de 30 días.",

  lastUpdatedLabel: "Última actualización",
};
