import React from 'react';
import { Button, Header, Icon, Modal, Image } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import NewContactForm from '../Forms/NewContactForm';
import {
  openAddContactModal,
  closeModals,
} from '../../redux/modal/modal.actions';
import { hightlineButton } from './UsersPage.module.scss';
import userAdd from '../../assets/icons/usersPageIcon/Icon ionic-md-person-add.svg';

function NewContactModal() {
  const dispatch = useDispatch();
  const { isAddContactOpen } = useSelector((state) => state.modal);

  const openModal = () => {
    dispatch(openAddContactModal());
  };

  const closeModal = () => {
    dispatch(closeModals());
  };
  return (
    <Modal
      onClose={closeModal}
      onOpen={openModal}
      open={isAddContactOpen}
      size="tiny"
      trigger={
        <Button size="small" className={hightlineButton}>
          <Image src={userAdd} />
          <span>Add Contact </span>
        </Button>
      }
    >
      <Header>New Contact</Header>
      <Modal.Content>
        <NewContactForm />
      </Modal.Content>
    </Modal>
  );
}

export default NewContactModal;
