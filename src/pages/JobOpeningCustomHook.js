import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
     
    },
    select: {
      border: 'none', // Remove the border
      "&:focus": {
        backgroundColor: 'transparent', // Remove the background color on focus
      },
    },
    inputLabel: {
      transform: 'translate(0, 1.5px) scale(0.75)', // Adjust label positioning
    },
  }));

  export default useStyles