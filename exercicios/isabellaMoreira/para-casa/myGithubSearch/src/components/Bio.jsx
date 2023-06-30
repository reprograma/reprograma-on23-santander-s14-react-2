import React from 'react';
import Subtitle from "../children_components/Subtitle";
import Text from "../children_components/Text";
import Image from "../children_components/Image";
import Photo from "../assets/isamoreira.gif"

const Bio = () => {
  return (
    <>
      <Subtitle content="Olá, sou a Isabella Moreira" />
      <Text content="Sou aluna reprograma de frontend e estudante de Análise e Desenvolvimento de Sistemas" />
      <Image img={Photo} altText="Foto da Isabella" />
    </>
  );
};

export default Bio;