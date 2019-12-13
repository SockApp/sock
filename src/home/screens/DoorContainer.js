import React, { useEffect } from 'react';
import Swiper from 'react-native-swiper';
import { useDispatch, useSelector } from 'react-redux';

import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';
import '@react-native-firebase/auth';

import Door from './Door';
import DoorCreator from './DoorCreator';
import { updateDoors, updateUser } from '../ducks/firestoreDuck';

function DoorContainer() {
  const dispatch = useDispatch();
  const { doors } = useSelector(state => ({
    doors: Object.values(state.home.firestore.doors),
  }));

  useEffect(() => {
    firebase
      .firestore()
      .collection('Users')
      .doc(firebase.auth().currentUser.uid)
      .onSnapshot(docSnapshot => {
        dispatch(updateUser(docSnapshot));
      });
  });

  useEffect(() => {
    firebase
      .firestore()
      .collection('Doors')
      .where(`users.${firebase.auth().currentUser}`, '==', true)
      .onSnapshot(querySnapshot => {
        dispatch(updateDoors(querySnapshot));
      });
  });

  return (
    <Swiper>
      <DoorCreator />
      {doors.map(door => (
        <Door door={door} />
      ))}
    </Swiper>
  );
}

export default DoorContainer;
