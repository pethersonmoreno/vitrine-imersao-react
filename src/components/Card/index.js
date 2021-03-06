import React from 'react';
import propTypes from 'prop-types';

import { CardWrapper, Tags, Tag } from './style';
import Info from './Info';
import Popover from '../Popover';

const Card = ({
  nome, redeSocial, foto, nomeDoProjeto, url, tags, indice,
}) => {
  const key = indice < 50 ? '296fe8' : 'c237fe';
  const thumbnail = `
https://api.screenshotmachine.com?key=${key}&url=${url}&dimension=1024x768
  `;

  const visibleTags = tags.slice(0, 3);
  const quantityPopoverTags = tags.length - 3;
  const tagsPopover = tags.slice(3, tags.length);

  return (
    <CardWrapper thumbnail={thumbnail}>
      <Tags>
        {visibleTags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
        {
          tags.length > 3
            ? (
              <Popover tags={tagsPopover}>
                <Tag>
                  +
                  {' '}
                  {quantityPopoverTags}
                </Tag>
              </Popover>
            )
            : ''
        }
      </Tags>
      <Info
        foto={foto}
        redeSocial={redeSocial}
        nome={nome}
        nomeDoProjeto={nomeDoProjeto}
        url={url}
      />
    </CardWrapper>
  );
};

Card.defaultProps = {
  foto: '',
  redeSocial: '',
  tags: [],
};

Card.propTypes = {
  foto: propTypes.string,
  redeSocial: propTypes.string,
  nome: propTypes.string.isRequired,
  nomeDoProjeto: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
  tags: propTypes.arrayOf(propTypes.string),
  indice: propTypes.number.isRequired,
};

export default Card;
