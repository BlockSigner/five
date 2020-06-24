export default {
  faq: {
    question1: {
      answer:
        'Die hier erstellte E-ID wird nach heutigem Kenntnisstand ab dem 2. Oktober 2020 für das Signieren nach Schweizer Gesetz (ZertES) deaktiviert werden müssen. Die E-ID kann jedoch weiterhin zum Signieren nach europäischen Gesetz (eIDAS) eingesetzt werden.',
      question: 'Was passiert mit der E-ID nach dem 2. Oktober 2020?',
    },
    question10: {
      answer:
        'Die E-ID kann für Skribble und andere Signaturservices eingesetzt werden, die auf dem Swisscom Signing Service beruhen.',
      question: 'Für welche Signaturservices kann ich die E-ID einsetzen?',
    },
    question11: {
      answer:
        'Ja. Ihr Passwort ist an Ihre E-ID geknüpft und kommt immer dann zum Zug, wenn Sie mit einem Anbieter signieren, der auf dem Swisscom Signing Service beruht.',
      question: 'Ist mein Passwort auf allen Signaturservices dasselbe?',
    },
    question2: {
      answer:
        'Die E-ID wird nach höchsten Sicherheitsstandards und verschlüsselt in den Rechenzentren der Swisscom abgelegt. Die E-ID kann nur im Falle eines Rechtsfalls von den Sicherheitsleuten des Swisscom Signing Service im Vier-Augen-Prinzip entschlüsselt und den Behörden zur Verfügung gestellt werden.',
      question: 'Wo wird meine E-ID gespeichert?',
    },
    question3: {
      answer:
        'Die hier erstellte E-ID wird in erster Linie für das Signieren mit der qualifizierten elektronischen Signatur (QES) generiert. Falls Sie sich für andere Anwendungsfälle interessieren, kontaktieren Sie bitte Skribble.',
      question: 'Wofür kann ich diese E-ID nutzen?',
    },
    question4: {
      answer:
        'Die Identifikation wird von Swisscom Trust Services angeboten und in Zusammenarbeit mit Identity Trust Management AG durchgeführt.',
      question: 'Wer führt die Video-Identifikation durch?',
    },
    question5: {
      answer:
        'Ja, der Service steht für die meisten Nationalitäten zur Verfügung. {0}.',
      answer_linkText:
        'Liste der akzeptierten Länder und Ausweisdokumente ansehen',
      answer_linkURL:
        'http://documents.swisscom.com/product/filestore/lib/5705ba58-3fdb-446f-9e48-18a297b8d239/l%C3%A4nderliste%20f%C3%BCr%20die%20videoidentifikation-kurier-pos-en.pdf?idxme=pex-search',
      question:
        'Ich bin nicht aus der Schweiz. Kann ich mich trotzdem identifizieren lassen?',
    },
    question6: {
      answer:
        'Die QES wird maximal 30 Minuten nach der Identifikation auf Skribble und anderen Services, die auf dem Swisscom Signing Service beruhen, freigeschaltet.',
      question:
        'Wie lange dauert es, bis ich die E-ID für das Signieren einsetzen kann?',
    },
    question7: {
      answer:
        'Die Video-Identifikation dauert ca. 5 Minuten. Je nach Auslastung des Identifikations-Teams kann die Wartezeit bis zum Start der Identifikation bis zu 2 Minuten betragen.',
      question: 'Wie lange dauert die Video-Identifikation?',
    },
    question8: {
      answer: 'Die Identifikation steht momentan auf Deutsch zur Verfügung.',
      question:
        'In welchen Sprachen kann ich die Video-Identifikation durchführen?',
    },
    question9: {
      answer:
        'Im Preis enthalten ist die Identifikation via Video und die anschliessend generierte elektronische Identität (E-ID). Nicht enthalten sind die Signaturen, die mit der E-ID gemacht werden.',
      question: 'Was ist im Preis enthalten?',
    },
    title: 'FAQ',
  },
  footer: {
    built_by: 'Bereitgestellt von',
  },
  global: {
    skribbleURL: 'https://www.skribble.com/de/',
  },
  intro: {
    content: {
      paragraph1:
        'Um mit QES zu signieren, ist eine einmalige Identitätsprüfung erforderlich. Bis zum 2. Oktober 2020 ist das via Video-Call möglich. Der Bund {0}, um die Notwendigkeit für persönlichen Kontakt zu reduzieren und der gestiegenen Nachfrage für elektronisches Signieren nachzukommen.',
      paragraph1_linkText:
        'setzte diese Ausnahmeregelung im Rahmen der COVID-19-Krise in Kraft',
      paragraph1_linkURL:
        'https://www.admin.ch/gov/de/start/dokumentation/medienmitteilungen.msg-id-78641.html',
      paragraph2:
        'Diese Verordnung gilt für den Rechtsraum Schweiz. Für das Signieren nach EU-Gesetz kann die E-ID auch nach Ablauf dieser Frist weiter eingesetzt werden.',
      paragraph3:
        'VideoIdent.me ist ein Service von Skribble in Zusammenarbeit mit Swisscom und IdentityTM.',
    },
    cta: 'Jetzt starten',
    subtitle:
      'Erstellen Sie in wenigen Minuten eine E-ID, um mit der qualifizierten elektronischen Signatur (QES) zu signieren. Die QES ist der höchste E-Signatur-Standard und der handschriftlichen Unterschrift vor dem Gesetz gleichgestellt.',
    title:
      'Video-Identifikation für elektronisches Signieren mit höchster Beweiskraft',
  },
  payment: {
    failure: {
      after_payment: {
        paragraph1:
          'Die Zahlung war erfolgreich, aber wir konnten keinen Identifikationsprozess starten. Klicken Sie auf «Erneut senden», um es nochmals zu versuchen.',
        paragraph2: 'Ihre Karte wird nicht nochmals belastet.',
        send_again_button: 'Erneut senden',
      },
      during_payment:
        'Es ist ein Fehler beim Bezahlen aufgetreten. Bitte verwenden Sie ein anderes Zahlungsmittel oder versuchen Sie es später nochmals.',
    },
    form: {
      country: 'Abrechnungsland',
      country_is_required: 'Ein Abrechnungsland wird benötigt',
      email: 'E-Mail-Adresse',
      email_is_required: 'E-Mail-Adresse wird benötigt',
      email_must_be_valid: 'E-Mail-Adresse muss gültig sein',
      first_name: 'Vorname(n)',
      last_name: 'Nachname',
      name_hint: 'Wie im Ausweis aufgeführt',
      name_is_required: 'Name wird benötigt',
      pay_now: 'Jetzt bezahlen',
      terms: 'Es gelten die {0} von Skribble.',
      terms_linkText: 'Datenschutzrichtlinien',
      terms_linkURL: 'https://www.skribble.com/de/datenschutz/',
      you_must_agree: 'Sie müssen zustimmen, um den Prozess zu starten.',
    },
    price_info1:
      'Sie profitieren für begrenzte Zeit vom Vorzugspreis von CHF 19.–',
    price_info2: '(regulärer Preis: CHF 25.–)',
    subtitle:
      'Nach dem Bezahlvorgang werden Sie an unseren Identifikationspartner weitergeleitet, bei dem Sie im Auftrag von Swisscom Trust Services via Video-Call identifiziert werden.',
    success: {
      caption:
        'Sie werden zum Portal unseres Identifikations-Partners weitergeleitet, bei dem Sie sich im Auftrag der Swisscom Trust Services identifizieren können. Ihre hierfür erhobenen Personendaten werden ausschliesslich für die ordnungsgemässe Identifizierung im Rahmen der elektronischen Signatur verwendet.',
      cta: 'Video-Identifikation jetzt starten',
      subtitle: 'Die Bestätigung finden Sie in Ihrem E-Mail-Briefkasten.',
      title: 'Zahlung erfolgreich!',
    },
    title: '1. Mit Kreditkarte bezahlen',
  },
  steps: {
    caption: {
      paragraph1:
        'Der Identifikations-Service ist täglich von 07.00 bis 22.00 Uhr verfügbar.',
      paragraph2:
        'Bitte halten Sie Ihr Ausweisdokument (Pass oder Identitätskarte), eine Kreditkarte und Ihr Mobiltelefon bereit. Ihr Gerät muss über eine Webcam und ein Mikrofon verfügen.',
    },
    step1: {
      description:
        'Sie brauchen keine Rechnung abzuwarten, um mit dem Signieren loszulegen.',
      title: 'Mit Kreditkarte bezahlen',
    },
    step2: {
      description:
        'Ein geschulter Mitarbeitender unseres Identifikations-Partners wird Ihr Ausweisdokument per Webcam prüfen.',
      title: 'Per Video-Call identifizieren lassen',
    },
    step3: {
      description:
        'Sie erhalten von Swisscom einen Link per SMS. Klicken Sie darauf, um das Passwort festzulegen, mit dem Sie in Zukunft Ihre Signaturen bestätigen.',
      title: 'Via Mobiltelefon bestätigen',
    },
    subtitle:
      'Die Identitätsprüfung erfolgt online und dauert nur wenige Minuten. Anschliessend wird die QES innert 30 Minuten für Sie auf {0} freigeschaltet.',
    subtitle_linkText: 'Skribble.com',
    subtitle_linkURL: 'https://www.skribble.com/de/',
    title: 'In drei Schritten zur E-ID',
  },
}
