/** English strings for Privacy Policy page. */
export const privacyEn = {
  effectiveDateLabel: "Effective Date",
  developerLabel: "Developer",
  contactLabel: "Contact",

  s1Title: "1. Introduction",
  s1Body1: "Gabriel Sanchez Palma (\"we\", \"us\", or \"our\") operates the SetLog mobile application (the \"App\"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the App.",
  s1Body2: "By using SetLog, you consent to the practices described in this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not use the App.",

  s2Title: "2. Information We Collect",
  s21Title: "2.1 Information You Provide",
  s21Items: [
    { title: "Workout Data", body: "All workout data you enter into the App — including exercises, sets, repetitions, weights, workout notes, and session dates — is stored locally on your device using CoreData. This data is not transmitted to our servers except as described in the AI Features section below." },
    { title: "Account Information", body: "When you create an account to access AI-powered features, we collect basic account identifiers through Firebase Authentication (e.g., an anonymous or email-linked identifier). We do not collect your name, address, or phone number unless you voluntarily provide them." },
    { title: "Photos", body: "If you use the optional photo capture feature within the App, photos are stored locally on your device only. We do not upload, transmit, or share your photos with any third party." },
    { title: "Preferences and Settings", body: "App settings such as your chosen accent color, notification preferences, and display options are stored locally on your device." },
  ],
  s22Title: "2.2 Information Collected Automatically",
  s22Items: [
    { title: "Subscription and Purchase Data", body: "When you make a purchase or manage a subscription, RevenueCat processes the transaction on our behalf and provides us with your subscription status (active, expired, trial, etc.). RevenueCat may collect device identifiers and transaction metadata as described in their privacy policy." },
    { title: "Usage Analytics", body: "We use Google Analytics to collect anonymous, aggregated data about how users interact with the App — such as which screens are visited, session duration, and feature usage frequency. This data does not identify you personally and is used solely to improve the App." },
    { title: "Crash Reports", body: "In the event of an App crash, basic diagnostic information may be collected automatically to help us identify and fix issues." },
  ],

  s3Title: "3. How We Use Your Information",
  s3Intro: "We use the information we collect for the following purposes:",
  s3TableRows: [
    { purpose: "Provide and operate App features", data: "Workout data (local), account identifiers" },
    { purpose: "Generate AI workout summaries", data: "Anonymised workout text (see Section 6)" },
    { purpose: "Manage subscriptions and billing", data: "RevenueCat subscription status" },
    { purpose: "Improve the App", data: "Anonymous analytics (Google Analytics)" },
    { purpose: "Diagnose and fix bugs", data: "Crash reports, diagnostic data" },
    { purpose: "Respond to support requests", data: "Information you provide via email" },
  ],
  s3NoSell: "We do not sell your personal information to third parties.",

  s4Title: "4. Data Storage and Security",
  s4Items: [
    { title: "Local Storage", body: "The majority of your data (workouts, photos, settings) is stored exclusively on your device using CoreData. This data is protected by iOS's built-in device encryption." },
    { title: "Cloud Storage", body: "Account identifiers used for AI features are stored on Firebase servers. Subscription status and transaction history are stored on RevenueCat's servers." },
    { title: "Security Measures", body: "We implement industry-standard technical and organisational measures to protect your information. However, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security." },
    { title: "Data Breach Notification", body: "In the unlikely event of a data breach affecting your personal information, we will notify you in accordance with applicable law." },
  ],

  s5Title: "5. Third-Party Services",
  s5Intro: "The App integrates with the following third-party services. Each has its own privacy policy governing the use of your data:",
  s5Services: [
    {
      title: "RevenueCat",
      body: "RevenueCat processes subscription purchases and provides us with your subscription status. RevenueCat may collect device identifiers and purchase history.",
      policyLabel: "Privacy Policy",
      policyUrl: "https://www.revenuecat.com/privacy",
    },
    {
      title: "Firebase (Google)",
      body: "Firebase Authentication is used to create and manage user accounts for AI-powered features. Firebase is operated by Google LLC.",
      policyLabel: "Privacy Policy",
      policyUrl: "https://firebase.google.com/support/privacy",
    },
    {
      title: "Google Analytics",
      body: "Google Analytics is used to collect anonymous usage statistics. Google Analytics uses aggregated, non-identifiable data.",
      policyLabel: "Privacy Policy",
      policyUrl: "https://policies.google.com/privacy",
      optOut: "You can opt out of Google Analytics data collection at any time in the App's Settings.",
      optOutLabel: "Opt-Out",
    },
  ],
  s5Disclaimer: "We are not responsible for the privacy practices of these third-party services.",

  s6Title: "6. AI Features",
  s6Intro: "SetLog Pro includes AI-generated workout summaries. When you use this feature:",
  s6Items: [
    "The text content of your workout (exercise names, set data, rep/weight values) is packaged into a prompt and sent to an AI language model service.",
    "No personally identifiable information (PII) — such as your name, email address, or device identifier — is included in the prompt.",
    "The AI service processes this text and returns a summary, which is then stored locally on your device.",
    "We do not use your workout data to train AI models.",
  ],
  s6Consent: "By using AI features, you consent to the transmission of anonymised workout text to the AI service provider.",

  s7Title: "7. Data Retention",
  s7Items: [
    { title: "Local Data", body: "Workout data, photos, and settings stored on your device remain until you delete them within the App or uninstall the App." },
    { title: "Account Data", body: "Your Firebase account identifier is retained as long as your account exists. You may delete your account at any time via Settings within the App, which will delete your account data from Firebase servers." },
    { title: "Analytics Data", body: "Anonymous usage data collected by Google Analytics is retained according to Google's standard retention policies (typically 14–26 months)." },
    { title: "Subscription Data", body: "RevenueCat retains transaction records in accordance with their data retention policies and applicable financial regulations." },
  ],

  s8Title: "8. Children's Privacy",
  s8Body1: "SetLog is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information promptly.",
  s8Body2: "If you are a parent or guardian and believe your child has provided us with personal information, please contact us at",

  s9Title: "9. Your Rights",
  s9Intro: "Depending on your location, you may have the following rights regarding your personal information:",
  s9Items: [
    { title: "Access", body: "Request a copy of the personal information we hold about you." },
    { title: "Correction", body: "Request correction of inaccurate personal information." },
    { title: "Deletion", body: "Request deletion of your personal information. Note that most of your data is stored locally and can be deleted directly from the App." },
    { title: "Portability", body: "Request a machine-readable copy of your data." },
    { title: "Objection", body: "Object to certain processing of your personal information." },
    { title: "Opt-Out of Analytics", body: "Disable anonymous analytics collection in App Settings." },
  ],
  s9Contact: "To exercise any of these rights, please contact us at",
  s9Response: "We will respond to your request within a reasonable timeframe.",
  s9Note: "Because most of your data is stored on your device, you have direct control over it at all times through the App's interface or by uninstalling the App.",
  s9NoteLabel: "Note on local data",

  s10Title: "10. Changes to This Privacy Policy",
  s10Body1: "We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the \"Effective Date\" at the top of this document and, where appropriate, by posting a notice within the App.",
  s10Body2: "We encourage you to review this Privacy Policy periodically. Your continued use of the App after changes become effective constitutes your acceptance of the revised Privacy Policy.",

  s11Title: "11. Contact",
  s11Intro: "If you have any questions, concerns, or requests regarding this Privacy Policy, please contact:",
  s11EmailLabel: "Email",
  s11Response: "We will endeavour to respond to all inquiries within 30 days.",

  lastUpdatedLabel: "Last updated",
};
