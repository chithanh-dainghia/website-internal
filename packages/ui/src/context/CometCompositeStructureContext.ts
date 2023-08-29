import { createContext } from 'react'

type CometCompositeStructureContextType = {
  horizontal: boolean
  vertical: boolean
}

const initial = {
  horizontal: false,
  vertical: false,
}

const CometCompositeStructureContext =
  createContext<CometCompositeStructureContextType>(initial)

export default CometCompositeStructureContext
