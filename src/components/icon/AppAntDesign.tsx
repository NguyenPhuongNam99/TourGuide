import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

type IProps = React.ComponentProps<typeof AntDesign>;
const AppAntDesign: React.FC<IProps> = props => {
  const propsWithTheme = {
    ...props,
  };
  return <AntDesign {...propsWithTheme} />;
};

export default AppAntDesign;
