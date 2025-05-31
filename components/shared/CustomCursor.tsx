// components/shared/CustomCursor.tsx

'use client'
import AnimatedCursor from 'react-animated-cursor'

const CustomCursor = () => (
  <AnimatedCursor
    innerSize={8}
    outerSize={35}
    outerAlpha={0}
    innerScale={1}
    outerScale={2}
    hasBlendMode={false}
    innerStyle={{ backgroundColor: '#ec4899' }}
    outerStyle={{ border: '2px solid #0ea5e9' }}
  />
)

export default CustomCursor
