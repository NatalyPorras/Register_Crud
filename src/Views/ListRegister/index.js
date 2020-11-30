import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import NavList from './components/navRegister'
import { useRouter } from '../../hook'
import {routesPath} from '../../constants'

const useStyles = makeStyles({
  contentList: {
    padding:"12px",
  },
  table: {
    minWidth: 650,
  },
});
const ListRegister = () => {
     const [register, updateRegister] = useState(() => {
    try {
      const item = window.localStorage.getItem("items");
      return item ? JSON.parse(item) : [];
    } catch (err) {
      console.warn("Setting localStorage went wrong: ", err);
      return [];
    }
  });



  const classes = useStyles();
    const router = useRouter();

  const onDeleteRegister = (e) => {
    const id = e.currentTarget.id
    const filterItem = register.filter((value, index) => index !== Number(id))
    const newData = [...filterItem]
    window.localStorage.setItem('items', JSON.stringify(newData));
    updateRegister(filterItem)
  };
    
  const onUpdateRegister = async (e) => {
    const id = e.currentTarget.id
    await router.history.push(`${routesPath.LIST_REGISTER}/${id}`)
  };


    return (
      <div className={classes.contentList}>
            <NavList />
       <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Edad</TableCell>
            <TableCell align="right">Correo electrónico</TableCell>
            <TableCell align="right">Dirección</TableCell>
                <TableCell align="right">Celular</TableCell>
                            <TableCell align="right"></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {register.map((row,index) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right"><Button id={index} onClick={onDeleteRegister}>Eliminar</Button><Button id={index} onClick={onUpdateRegister}>Actualizar</Button></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default ListRegister;