import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useRouter } from '../../../hook'
import {routesPath} from '../../../constants'
const useStyles = makeStyles((theme) => ({
  contentNav: {
        margin: theme.spacing(1),
        display: "flex",
        justifyContent:"space-between",
        paddingRight: theme.spacing(2),
        paddingLeft:theme.spacing(2)
  },

}));
const NavRegister = () => {
      const classes = useStyles();
  const {history} = useRouter();
  const onEditRegister = async () => {
    await history.push(routesPath.CREATE_REGISTER)
  }
    return (
        <div className={classes.contentNav}>
            <h3>Lista de Usuarios</h3>
        <Button onClick={onEditRegister} variant="contained" color="primary">Nuevo Usuario</Button>
        </div>
    );
};

export default NavRegister;