import React from 'react';
import Foundation from 'react-native-vector-icons/Foundation';

type IProps = React.ComponentProps<typeof Foundation>;
const AppFoundation: React.FC<IProps> = props => {
  const propsWithTheme = {
    ...props,
  };
  return <Foundation {...propsWithTheme} />;
};

export default AppFoundation;
