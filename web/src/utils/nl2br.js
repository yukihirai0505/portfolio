import { Fragment } from 'react'
import React from 'react'

export const nl2br = e => e.split('\n')
  .map((item, key) => (
    <Fragment key={key}>
      {item}
      <br/>
    </Fragment>
  ))
