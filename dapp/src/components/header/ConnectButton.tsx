import React from 'react';
import Button from '@material-ui/core/Button';

type ConnectButtonProps = {
  onClick: () => void;
};

const ConnectButton: React.FC<ConnectButtonProps> = (props) => {
  return (
    <Button color="inherit" onClick={props.onClick}>Connect</Button>
  );
}

export default ConnectButton