import { LOCALES } from './locales';

export const messages = {
  [LOCALES.ENGLISH]: {
    learn_to: "Hello, let's learn how to use React-Intl",
    price_display: 'How {n, number, ::currency/USD} is displayed in your selected language',
    number_display: 'This is how {n, number} is formatted in the selected locale',
    start_today: 'Start Today: {d, date}',
    // menu
    about_project: 'About the project',
    contact_us: 'Contact us',
    click_count: 'You clicked {count, plural, one {# time} other {# times}}',
    click_button: 'Please click the button below',
    click_here: 'click here',
  },
  [LOCALES.FRENCH]: {
    learn_to: 'Bonjour, apprenons à utiliser React-Intl',
    price_display: "Comment {n, number, ::currency/USD} $ s'affiche dans la langue sélectionnée",
    number_display: 'Voici comment {n, number} sont formatés dans les paramètres régionaux sélectionnés ',
    start_today: "Commencez aujourd'hui: {d, date}",
    // menu
    about_project: 'À propos du projet',
    contact_us: 'Contactez-nous',
    click_count: 'Vous avez cliqué {count, plural, one {# fois} other {# fois}}',
    click_button: 'Veuillez cliquer sur le bouton ci-dessous',
    click_here: 'Cliquez ici',
  },
  [LOCALES.GERMAN]: {
    learn_to: 'Hallo, lass uns lernen, wie man React-Intl benutzt',
    price_display: 'Wie {n, number, ::currency/USD} in Ihrer ausgewählten Sprache angezeigt wird',
    number_display: 'Auf diese Weise werden {n, number} im ausgewählten Gebietsschema formatiert',
    start_today: 'Beginnen Sie heute: {d, date}',
    // menu
    about_project: 'Über das Projekt',
    contact_us: 'Kontaktiere uns',
    click_count: 'Sie haben {count, plural, one {# Mal} other {# Mal}} geklickt',
    click_button: 'Bitte klicken Sie auf die Schaltfläche unten',
    click_here: 'klicken Sie hier',
  },
  [LOCALES.JAPANESE]: {
    learn_to: 'こんにちは、React-Intlの使い方を学びましょう',
    price_display: '選択した言語で{n, number, ::currency/USD}がどのように表示されるか',
    number_display: 'これは、選択したロケールで{n, number}がフォーマットされる方法です。',
    start_today: '今日から始める：{d, date}',
    // menu
    about_project: 'プロジェクトについて',
    contact_us: 'お問い合わせ',
    click_count: '{count, plural, one {# 回} other {# 回}}クリックしました',
    click_button: '下のボタンをクリックしてください',
    click_here: 'ここをクリック',
  },
  [LOCALES.POLISH]: {
    learn_to: 'Cześć, nauczmy się jak używać React Intl',
    price_display: 'Jak {n, number, ::currency/USD} wyświetlane jest w wybranym języku',
    number_display: '{n, number}: tak jest wyświetlane w wybranym języku',
    start_today: 'Data dzisiejsza: {d, date}',
    // menu
    about_project: 'O projekcie',
    contact_us: 'Kontakt',
    click_count: 'Kliknąłeś {count, plural, one {# raz} other {# razy}}',
    click_button: 'Kliknij przycisk poniżej',
    click_here: 'Kliknij tutaj',
  },
};
