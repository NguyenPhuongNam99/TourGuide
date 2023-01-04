import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

type IProps = React.ComponentProps<typeof MaterialIcon>;

const AppMaterIcon: React.FC<IProps> = props => {
  const propswithTheme = {
    ...props,
  };
  return <MaterialIcon {...propswithTheme} />;
};

export default AppMaterIcon;
