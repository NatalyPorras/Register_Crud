
const formConstraints = {
      name: {
    presence: {
      message: 'Ingresa un nombre'
    }
    },
  email: {
    presence: {
      message: 'Ingresa un correo'
    },
  },

    age: {
    presence: {
      message: 'Ingresa una edad'
    }
    },
        address: {
    presence: {
      message: 'Ingresa una dirección'
    }
  },
        phone: {
    presence: {
      message: 'Ingresa un numero de teléfono'
    }
  },
}

export default formConstraints
