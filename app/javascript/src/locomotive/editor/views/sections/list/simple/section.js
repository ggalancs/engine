import React from 'react';
import { truncate } from 'lodash';

// Components
import { SlideLeftLink } from '../../../../components/links';
import Icons from '../../../../components/icons';
import EditIcon from '../../../../components/icons/edit';

// Services
import { isEditable } from '../../../../services/sections_service';

const Section = ({ image, text, section, definition, translate, ...props })=> {
  const Icon = Icons[definition.icon];

  return (
    <div className="editor-list-item">
      {image && (
        <div className="editor-list-item--image" style={{ backgroundImage: `url("${image}")` }}>
        </div>
      )}
      {!image && (
        <div className="editor-list-item--icon">
          {Icon && <Icon />}
        </div>
      )}
      <div className="editor-list-item--label">
        {truncate(text || section.label || translate(definition.name), { length: 32 })}
      </div>
      <div className="editor-list-item--actions">
        {isEditable(definition) && (
          <SlideLeftLink to={props.editPath} className="editor-section--edit-button">
            <EditIcon />
          </SlideLeftLink>
        )}
      </div>
    </div>
  )
}

export default Section;
