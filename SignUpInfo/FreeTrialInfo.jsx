import React from 'react';
import { List, Image } from 'semantic-ui-react';
import fifty from '../../assets/icons/50.svg';
import unlimitedIncoming from '../../assets/icons/unlimitedIncoming.svg';
import fullAccess from '../../assets/icons/fullAccess.svg';
import dedicatedSupport from '../../assets/icons/dedicatedSupport.svg';
import { title, item } from './SignUpInfo.module.scss';

const FreeTrialInfo = () => {
  return (
    <>
      <p className={title}>Start your 14-day free trial and get</p>
      <List size="large">
        <List.Item className={item}>
          <List.Icon as={Image} verticalAlign="middle" src={fifty} />
          <List.Content verticalAlign="middle">
            50 outgoing text messages
          </List.Content>
        </List.Item>
        <List.Item className={item}>
          <List.Icon
            as={Image}
            verticalAlign="middle"
            src={unlimitedIncoming}
          />
          <List.Content verticalAlign="middle">
            Unlimited incoming messages
          </List.Content>
        </List.Item>
        <List.Item className={item}>
          <List.Icon as={Image} verticalAlign="middle" src={fullAccess} />
          <List.Content verticalAlign="middle">
            Full access to all our powerful features
          </List.Content>
        </List.Item>
        <List.Item className={item}>
          <List.Icon as={Image} verticalAlign="middle" src={dedicatedSupport} />
          <List.Content verticalAlign="middle">
            Dedicated support 7 days per week
          </List.Content>
        </List.Item>
      </List>
    </>
  );
};

export default FreeTrialInfo;
