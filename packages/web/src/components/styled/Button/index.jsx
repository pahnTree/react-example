import { default as BaseButton} from 'react-bootstrap/Button'
import styled from 'styled-components'
import propTypes from 'prop-types'
import { VARIANTS } from '../constants'

const Button = styled(BaseButton)``
Button.propTypes = {
  variant: propTypes.oneOf(VARIANTS).isRequired()
}

export default Button
