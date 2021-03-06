/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';
import { DEFAULT_LOCALE } from './containers/App/constants'; // eslint-disable-line

import enLocaleData from 'react-intl/locale-data/en';
import ptLocaleData from 'react-intl/locale-data/pt';

export const appLocales = [
  'en',
  'pt',
];

export const appLocalesSelectsOpt = [
  { text: 'English', value: 'en' },
  { text: 'Português', value: 'pt' },
];

import enTranslationMessages from './translations/en.json';
import ptTranslationMessages from './translations/pt.json';

addLocaleData(enLocaleData);
addLocaleData(ptLocaleData);

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages) : {};
  const formattedMessages = {};
  const messageKeys = Object.keys(messages);
  for (const messageKey of messageKeys) {
    if (locale === DEFAULT_LOCALE) {
      formattedMessages[messageKey] = messages[messageKey];
    } else {
      formattedMessages[messageKey] = messages[messageKey] || defaultFormattedMessages[messageKey];
    }
  }

  return formattedMessages;
};

export const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  pt: formatTranslationMessages('pt', ptTranslationMessages),
};
