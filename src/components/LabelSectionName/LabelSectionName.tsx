type LabelSectionNameProps = {
  text: string;
  className?: string; // Clase adicional para personalización
  fontSize?: string; // Tamaño del texto
  color?: string; // Color del texto
};

const LabelSectionName = ({
  text,
  className = "",
  fontSize = "text-lg",
  color = "text-black",
}: LabelSectionNameProps) => {
  // Construir la cadena de clases condicionalmente
  const labelClass = `
      font-Roboto font-bold
      ${fontSize}
      ${color}
      ${className}
    `.trim();

  return <label className={labelClass}>{text}</label>;
};

export default LabelSectionName;
