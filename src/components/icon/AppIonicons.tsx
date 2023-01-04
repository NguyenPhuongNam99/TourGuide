import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

type IProps = React.ComponentProps<typeof Ionicons>;
const AppIonicons: React.FC<IProps> = props => {
  const propsWithTheme = {
    ...props,
  };
  return <Ionicons {...propsWithTheme} />;
};

export default AppIonicons;
