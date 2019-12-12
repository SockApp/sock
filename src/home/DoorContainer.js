import React from 'react';
import Swiper from 'react-native-swiper';
import DoorScreen from './Door';

class DoorContainer extends React.Component {
  render() {
    return (
      <Swiper>
        <DoorScreen doorId={1} />
        <DoorScreen doorId={2} />
      </Swiper>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default DoorContainer;
