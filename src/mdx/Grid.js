import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'

const ActualGrid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & > * {
    padding: 1rem;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`

export default class Grid extends React.PureComponent {
  static propTypes = {
    children: propTypes.node.isRequired
  }
  render() {
    const { children } = this.props
    return <ActualGrid>{children}</ActualGrid>
  }
}
