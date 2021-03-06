import * as React from 'react'
import { Link } from 'react-router-dom'
import routes, { ChildrenRoute, ComponentRoute, Route } from '../../routes'

import classes from './index.module.scss'

const buildMenus = (routeArray: Array<Route>) => {
  const nodes: Array<React.ReactNode> = []
  routeArray.forEach((it, index) => {
    if (typeof (it as ComponentRoute).component !== 'undefined') {
      nodes.push(
        // eslint-disable-next-line react/no-array-index-key
        <li key={index} className={classes.menu}>
          <Link to={(it as ComponentRoute).path}>{(it as ComponentRoute).name}</Link>
        </li>
      )
    } else if ((it as ChildrenRoute).children) {
      nodes.push(
        // eslint-disable-next-line react/no-array-index-key
        <li key={index} className={classes.menu}>
          <span className={classes.menuName}>{(it as ChildrenRoute).name}</span>
          {buildMenus((it as ChildrenRoute).children)}
        </li>
      )
    }
  })
  return <ul className={classes.menus}>{nodes}</ul>
}

const Aside = () => {
  return <div className={classes.aside}>{buildMenus(routes)}</div>
}

export default Aside
