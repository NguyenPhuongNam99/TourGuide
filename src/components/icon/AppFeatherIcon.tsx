import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

type IProps = React.ComponentProps<typeof Feather>;
const AppFeatherIcon: React.FC<IProps> = props => {
  const propsWithTheme = {
    ...props,
  };
  return <Feather {...propsWithTheme} />;
};

export default AppFeatherIcon;
