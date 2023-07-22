import React from "react";
import { useTranslation } from "react-i18next";

const I18HelloWorld = () => {
  const { t } = useTranslation();

  return (
    <div>{t('hello_world')}</div>
  );
}

export default I18HelloWorld;
