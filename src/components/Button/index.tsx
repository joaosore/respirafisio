import React from 'react';

import { Container } from './styles';

interface ButtonEl {
  color: string;
  backgorund: string;
  url: string;
  title: string;
  target: string;
  disable?: boolean;
}

const Button: React.FC<ButtonEl> = ({
  color,
  backgorund,
  url,
  title,
  target,
  disable,
}) => {
  return (
    <Container color={color} bg={backgorund} off={disable}>
      {disable ? (
        <button className="button" type="button">
          {title}
        </button>
      ) : (
        <a href={url} target={target} className="button">
          {title}
        </a>
      )}
    </Container>
  );
};

export default Button;
