import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { StyledToobar } from './styled'
import Button from '@material-ui/core/Button'
import { goToFeed } from '../route/coordinator'
import { goToLogin } from '../route/coordinator'
import {useHistory} from "react-router-dom"
const Header = () => {
    const history = useHistory()

  return (
      <AppBar position="static">
        <StyledToobar>
          <Button onClick={() => goToFeed(history)} color="inherit">
            LabEddit
          </Button>

          <Button onClick={() => goToLogin(history)} color="inherit">Login</Button>
        </StyledToobar>
      </AppBar>
  )
}
export default Header