import React, { useRef, useEffect, useState } from 'react'
import propTypes from 'prop-types'
import mermaidAPI from 'mermaid'
import styled from 'styled-components'

const Svg = styled.svg`
  width: 100%;
  height: auto;
`

export default function Diagram ({ diagram }) {
  const svgRef = useRef(null)
  const [uuid] = useState(
    'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0
      const v = c === 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  )

  useEffect(() => {
    if (svgRef) {
      mermaidAPI.initialize({
        startOnLoad: false
      })
      try {
        mermaidAPI.render(`graphDiv${uuid}`, diagram.trim(), svgCode => {
          svgRef.current.innerHTML = svgCode
        })
      } catch (err) {
        // Fix bug which prevents rerendering after error case
        document.getElementById(`dgraphDiv${uuid}`).remove()
        throw err
      }
    }
  }, [diagram])

  return (
    <div>
      <Svg ref={svgRef} />
    </div>
  )
}

Diagram.propTypes = {
  diagram: propTypes.string.isRequired
}
