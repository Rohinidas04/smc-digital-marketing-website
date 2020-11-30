import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Dropdown, Segment, Button, Input } from 'semantic-ui-react';
import { critiriaWrapper } from './UsersPage.module.scss';

import { connect } from 'react-redux';
import {
  setCritiria,
  deleteCritiria,
} from '../../redux/usersPage/usersPage.action';

const SpecialCritiria = ({ segmentCritiria, dispatch }) => {
  const fieldOptions = [
    { key: 1, text: 'name', value: 'name' },
    { key: 2, text: 'address', value: 'address' },
    { key: 3, text: 'phone', value: 'phone' },
    { key: 4, text: 'unread', value: 'unread' },
    { key: 5, text: 'label', value: 'label' },
    { key: 6, text: 'starred', value: 'starred' },
  ];

  const matchOptions = [
    { key: 1, text: '=', value: 1 },
    { key: 2, text: '>', value: 2 },
    { key: 3, text: '>=', value: 3 },
    { key: 4, text: '<', value: 4 },
    { key: 5, text: '<=', value: 5 },
    { key: 6, text: 'contain', value: 6 },
  ];

  const renderCritiria = () => {
    if (!segmentCritiria) {
      return <></>;
    }

    const renderArray = segmentCritiria.map((element, index) => {
      return (
        <Segment className={critiriaWrapper} key={index}>
          {/* field */}
          <Dropdown
            options={fieldOptions}
            selection
            placeholder="Field"
            onChange={(e, data) => {
              dispatch(setCritiria(index, { field: data.value }));
            }}
            value={element.field}
          ></Dropdown>
          {/* match */}
          <Dropdown
            options={matchOptions}
            selection
            type="text"
            name="match"
            placeholder="Dropdown"
            style={{ minWidth: '8em' }}
            onChange={(e, data) =>
              dispatch(setCritiria(index, { match: data.value }))
            }
            value={element.match}
          ></Dropdown>
          <Button
            icon="x"
            floated="right"
            onClick={() => dispatch(deleteCritiria(index))}
          ></Button>
          {/* critiria */}
          <Input
            type="text"
            name="critiria"
            onChange={(e) =>
              dispatch(setCritiria(index, { value: e.target.value }))
            }
            value={element.value}
          ></Input>
        </Segment>
      );
    });

    return renderArray;
  };

  return <>{renderCritiria()}</>;
};

function mapStateToProps(state) {
  const { usersPage } = state;
  return {
    segmentCritiria: usersPage.segmentCritiria,
  };
}

SpecialCritiria.propTypes = {
  dispatch: propTypes.func,
  segmentCritiria: propTypes.array,
};

export default connect(mapStateToProps)(SpecialCritiria);
