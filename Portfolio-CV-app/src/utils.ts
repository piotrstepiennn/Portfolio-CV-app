import React from "react";

export const transJsonToArray = (jsonObject: {
  [x: string]: string | undefined;
  frontend?: string | undefined;
  backend?: string | undefined;
  mobile_app?: string | undefined;
  database?: string | undefined;
  wpf_app?: string | undefined;
  "CI/CD"?: string | undefined;
}) => {
  const array = [];
  for (const category in jsonObject) {
    if (Object.prototype.hasOwnProperty.call(jsonObject, category)) {
      const techValue: string | undefined =
        jsonObject[category as keyof typeof jsonObject];
      array.push({ category, tech: techValue });
    }
  }
  return array;
};

export const loadJson = async (
  fileName: string,
  setter: React.Dispatch<React.SetStateAction<never[]>>,
  language: string
) => {
  try {
    const data = await import(
      `./assets/translations/${language}/${fileName}.json`
    );
    setter(data.default);
  } catch (error) {
    console.error(`Error occured while loading file ${fileName}`, error);
  }
};
