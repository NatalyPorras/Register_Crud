import React from 'react';
import { pick } from 'lodash'
import { makeStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button';
import { Form, Field } from 'react-final-form'
import { TextField } from 'final-form-material-ui'

import { useRouter } from '../../hook'
import {
    formConstraints,
    getValidator
} from '../../utils'
import {routesPath} from '../../constants'

const useStyles = makeStyles((theme) => ({
  form: {
    width: "30%",
    margin:"auto",
    padding:"0 16px"
  },
    loginForm: {
        marginTop: "48px"
    },
    fields: {
        margin: "-8px",
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            flexGrow: 1,
            margin: "8px"
        }
    },
    submitButton: {
        margin: "24px 8px",
        width: '100%'
    }
}));
const fieldNames = ['name', 'email','age','address','phone']
const formValidator = getValidator(pick(formConstraints, fieldNames))

const Index = () => {
  const classes = useStyles()
  const data=window.localStorage.getItem("items")

  const router = useRouter();
  const dataParse = JSON.parse(data)
  const onSubmit = async values => {
    const newData = [...dataParse,values]
       window.localStorage.setItem('items', JSON.stringify(newData));

        await router.history.push(routesPath.LIST_REGISTER)
  }
  return (
      <div className={classes.form}>
            <Form onSubmit={onSubmit} validate={formValidator}>
      {formProps => {
        const { handleSubmit, submitting, pristine } = formProps

        return (
          <form className={classes.loginForm} onSubmit={handleSubmit}>
            <div className={classes.fields}>
              <Field
                component={TextField}
                fullWidth
                label="Nombre"
                name="name"
                type="name"
                variant="outlined"
              />
              <Field
                component={TextField}
                fullWidth
                label="Correo electrónico"
                name="email"
                type="email"
                variant="outlined"
                    />
                      <Field
                component={TextField}
                fullWidth
                label="Edas"
                name="age"
                type="age"
                variant="outlined"
                    />
                      <Field
                component={TextField}
                fullWidth
                label="Teléfono"
                name="phone"
                type="phone"
                variant="outlined"
                    />
                      <Field
                component={TextField}
                fullWidth
                label="Dirección"
                name="address"
                type="address"
                variant="outlined"
              />
              <Button
                className={classes.submitButton}
                disabled={pristine}
                loading={submitting}
                size="large"
                type="submit"
               variant="contained" color="primary"
              >
               Crear Usuario
              </Button>
            </div>
          </form>
        )
      }}
    </Form>
      </div>
  
    );
};

export default Index;