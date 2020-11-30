import React from 'react';
import { Button, Header, Icon, Modal, Image } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import EditContactForm from '../Forms/EditContactForm';
import {
  openEditContactModal,
  closeModals,
} from '../../redux/modal/modal.actions';
import { hightlineButton } from './UsersPage.module.scss';
import userAdd from '../../assets/icons/usersPageIcon/Icon ionic-md-person-add.svg';

function EditContactModal() {
  const dispatch = useDispatch();
  const { isEditContactOpen, activeId } = useSelector((state) => state.modal);

  const openModal = () => {
    dispatch(openEditContactModal());
  };

  const closeModal = () => {
    dispatch(closeModals());
  };
  return (
    <Modal
      onClose={closeModal}
      onOpen={openModal}
      open={isEditContactOpen}
      size="tiny"
    >
      <Header>Edit Contact</Header>
      <Modal.Content>
        <EditContactForm activeId={activeId} />
      </Modal.Content>
    </Modal>
  );
}

export default EditContactModal;
