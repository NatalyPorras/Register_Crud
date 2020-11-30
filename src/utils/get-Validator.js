import validate from 'validate.js'
import { mapValues, head } from 'lodash'

const config = {
  fullMessages: false
}

const getValidator = constraints => {
  const validator = values => {
    const errors = validate(values, constraints, config)

    return mapValues(errors, head)
  }

  return validator
}

export default getValidator
