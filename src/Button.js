import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import Switch from '@mui/material/Switch';

const styles = {
  centerMe: {
    justifyContent: 'left',
  },
};


class Button extends React.Component {

  handleClick = () => {fetch('https://honeydew-gnat-5985.twil.io/emergencyDocToggle') 
  .then(response => console.log("Success")) 
  .catch(error => console.log("Failure"))}; 


render () {
const EmergencySwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: red[600],
    '&:hover': {
      backgroundColor: alpha(red[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: red[600],
  },
}
));

  return (
    <div style={styles.centerMe}>
      <EmergencySwitch
      onClick={this.handleClick}
      />
     <p>Emergency</p> 
    </div>
  );
}};

export default Button