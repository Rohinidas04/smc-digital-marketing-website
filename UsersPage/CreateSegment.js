import React, { useState } from 'react';

import {
  Segment,
  Header,
  Icon,
  Menu,
  Input,
  Button,
  Dropdown,
} from 'semantic-ui-react';
import {
  creatSegmentWrapper,
  segmentHeader,
  segmentSecondHeader,
  segmentList,
  clearBorder,
  topRadius,
  botRadius,
  addCriteriaButton,
  saveSegmentButton,
  critiriaWrapper,
} from './UsersPage.module.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setPage, newCritiria } from '../../redux/usersPage/usersPage.action';
import SpecialButton from './SpecialButton';
import SpecialCritiria from './SpecialCritiria';
import faker from 'faker';
import Papa from 'papaparse';

const CreateSegmentPage = ({ contactList, dispatch }) => {
  const [activeItem, setActiveItem] = useState('Specific List');
  const [contactMatch, setContactMatch] = useState('All');

  const renderLists = () => {
    let showList = Object.keys(contactList).map((keyName, i) => {
      let element = contactList[keyName];
      return <SpecialButton element={element} key={keyName} />;
    });

    return showList;
  };

  const handleGenerateCSV = () => {
    var contactCSV = [];

    for (let i = 0; i < 10; i++) {
      contactCSV.push({
        phone: faker.phone.phoneNumberFormat(),
        name: faker.name.firstName(),
        organization: faker.company.companyName(),
      });
    }
    //convert to CSV
    var csv = Papa.unparse(contactCSV);

    //download CSV
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'segment.csv';
    hiddenElement.click();
  };

  return (
    <>
      <Header size={'medium'}>
        <Icon
          name="arrow left"
          onClick={() => {
            dispatch(setPage('USERS_PAGE'));
          }}
        ></Icon>
        Create Segment
      </Header>
      <div className={creatSegmentWrapper}>
        <Segment.Group className={clearBorder}>
          {/* Top header */}
          <Segment className={segmentHeader}>
            <Menu className={topRadius}>
              <Menu.Item header>Segment is based on</Menu.Item>
              <Menu.Item
                active={activeItem === 'Specific List'}
                onClick={() => setActiveItem('Specific List')}
                style={{
                  backgroundColor:
                    activeItem === 'Specific List' ? 'white' : '#DDE1E7',
                }}
              >
                Specific List
              </Menu.Item>
              <Menu.Item
                active={activeItem === 'All contacts'}
                onClick={() => setActiveItem('All contacts')}
                style={{
                  backgroundColor:
                    activeItem === 'All contacts' ? 'white' : '#DDE1E7',
                }}
              >
                All contacts
              </Menu.Item>
            </Menu>
          </Segment>
          {/* Second header */}
          <Segment.Group
            horizontal
            className={segmentSecondHeader}
            style={{ backgroundColor: '#ffe7d1' }}
          >
            <Segment>Lists</Segment>
            <Segment>
              <Input placeholder="Search List" icon="search"></Input>
            </Segment>
            <Segment>
              <Icon name="checkmark"></Icon>
            </Segment>
          </Segment.Group>
          {/* Contact List */}
          <Segment
            className={segmentList}
            style={{ backgroundColor: '#ffe7d1' }}
          >
            {renderLists()}
          </Segment>
          {/* Last Header */}
          <Segment className={segmentHeader}>
            <Menu className={botRadius}>
              <Menu.Item header>Contacts match</Menu.Item>
              <Menu.Item
                active={contactMatch === 'All'}
                onClick={() => setContactMatch('All')}
                style={{
                  backgroundColor: contactMatch === 'All' ? 'white' : '#DDE1E7',
                }}
              >
                ALL
              </Menu.Item>
              <Menu.Item
                active={contactMatch === 'Any'}
                onClick={() => setContactMatch('Any')}
                style={{
                  backgroundColor: contactMatch === 'Any' ? 'white' : '#DDE1E7',
                }}
              >
                Any
              </Menu.Item>
              <Menu.Item header>of the following conditions: </Menu.Item>
            </Menu>
          </Segment>
        </Segment.Group>
        {/* show match critiria */}
        <div>
          <SpecialCritiria />
        </div>
        <div>
          <Button
            icon={<Icon name="add circle" color="green" />}
            content="Add criteria"
            className={addCriteriaButton}
            onClick={() => dispatch(newCritiria())}
          />
          <Button
            className={saveSegmentButton}
            style={{
              color: 'white',
              backgroundColor: '#FF8108',
              float: 'right',
            }}
          >
            Save Segment
          </Button>
        </div>
        <div>
          Matched contacts 0
          <span
            style={{ color: '#FF8108', paddingLeft: '.5em' }}
            onClick={() => handleGenerateCSV()}
          >
            <Icon name="file outline" />
            Generate CSV
          </span>
        </div>
        <div>
          <br></br>
          no matches
          <br></br>
        </div>
      </div>
    </>
  );
};

CreateSegmentPage.prototype = {
  dispatch: PropTypes.func,
};

function mapStateToProps(state) {
  const { usersPage, auth } = state;
  return {
    contactList: usersPage.contactList,
  };
}

CreateSegmentPage.propTypes = {
  isInit: PropTypes.bool,
  currentPage: PropTypes.string,
};

export default connect(mapStateToProps)(CreateSegmentPage);
