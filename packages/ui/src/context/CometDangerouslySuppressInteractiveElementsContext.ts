import { createContext } from 'react'

type CometDangerouslySuppressInteractiveElementsContextProps = number

const CometDangerouslySuppressInteractiveElementsContext = createContext<
  CometDangerouslySuppressInteractiveElementsContextProps | undefined
>(undefined)

export default CometDangerouslySuppressInteractiveElementsContext
