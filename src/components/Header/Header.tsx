import React from 'react'
import Nav from '../Nav/Nav'
import Logo from '../Logo/Logo'
import { TSiteProps } from '../../utils/constants'
import * as styles from './Header.module.scss'

const Header: React.FC<TSiteProps> = props => {
  const isHome = location ? location.pathname === '/' : false

  return (
    <header className={styles.header}>
      {isHome ? (
        <h1>
          <Logo title={props.title} />
        </h1>
      ) : (
        <Logo title={props.title} />
      )}

      <Nav />
    </header>
  )
}

export default Header
