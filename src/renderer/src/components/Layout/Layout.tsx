import { Box } from '@mantine/core'
import PropTypes from 'prop-types'
import classes from './Layout.module.css'
import NavBar from '../Navbar/Navbar'
import Notification from '../Notification/Notification'

export const Layout = ({ children }): JSX.Element => {
  return (
    <div className={classes.root}>
      <Notification />
      <NavBar />
      <Box className={classes.container}>{children}</Box>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.object
}
