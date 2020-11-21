import React, { AllHTMLAttributes, ReactNode } from 'react'
import classnames from 'classnames'
import * as styles from './Wrapper.module.scss'

type TWrapperProps = AllHTMLAttributes<HTMLElement> & {
  as?: ReactNode
  width?: 'thin' | 'xthin' | 'default'
  tall?: boolean
  tinted?: boolean
  noPadY?: boolean
  noPadX?: boolean
  noUpPad?: boolean
  noDownPad?: boolean
}

const Wrapper: React.FC<TWrapperProps> = props => {
  const {
    className = '',
    as = 'section',
    width = 'default',
    tinted = false,
    tall = false,
    noPadY = false,
    noPadX = false,
    noUpPad = false,
    noDownPad = false,
    ...rest
  } = props
  const wrapperClasses = classnames({
    [styles.wrapper]: true,
    [styles.tall]: tall,
    [styles.tinted]: tinted,
    [styles.noPadY]: noPadY,
    [styles.noUpPad]: noUpPad,
    [styles.noDownPad]: noDownPad,
  })
  const chunkClasses = classnames({
    [styles.chunk]: true,
    [styles[width]]: true,
    [styles.noPadX]: noPadX,
    [className]: className,
  })
  const Component: any = as

  return (
    <Component className={wrapperClasses}>
      <div className={chunkClasses} {...rest}>
        {props.children}
      </div>
    </Component>
  )
}

export default Wrapper
