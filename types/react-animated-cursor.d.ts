// types/react-animated-cursor.d.ts
declare module 'react-animated-cursor' {
  import * as React from 'react'

  interface AnimatedCursorProps {
    innerSize?: number
    outerSize?: number
    color?: string
    outerAlpha?: number
    innerScale?: number
    outerScale?: number
    hasBlendMode?: boolean
    innerStyle?: React.CSSProperties
    outerStyle?: React.CSSProperties
    clickables?: string[]
    showSystemCursor?: boolean
  }

  const AnimatedCursor: React.FC<AnimatedCursorProps>
  export default AnimatedCursor
}
