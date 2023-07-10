import React from 'react';
import UserSignupForm from './UserSignupForm';
import UserLoginForm from './UserLoginForm';
import { useSelector, useDispatch } from 'react-redux/';
import styles from '../../styles/User.module.css';
import { toggleForm, toggleFormType } from '../../features/user/userSlice';

const UserForm = () => {
    const { showForm, formType} = useSelector(({ user }) => user);
    const closeForm = () => dispatch(toggleForm(false));
    const toggleCurrentFormType = (type) => dispatch(toggleFormType(type));
    const dispatch = useDispatch();

  return showForm ? (
    <>
    <div className={styles.overlay} onClick={closeForm} />
    {formType === 'signup' ? (
      <UserSignupForm toggleCurrentFormType={toggleCurrentFormType} closeForm={closeForm} /> 
    ) : ( 
      <UserLoginForm toggleCurrentFormType={toggleCurrentFormType} closeForm={closeForm} />
      )}
      </>
    ) : ( 
    <></>
  );
};

export default UserForm;