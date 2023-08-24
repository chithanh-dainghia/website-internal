import { createContext } from 'react'

type HiddenSubtreeContextProps = {
  backgrounded: boolean
  hidden: boolean
  hiddenOrBackgrounded: boolean
  hiddenOrBackgrounded_FIXME: boolean
}

const initial = {
  backgrounded: false,
  hidden: false,
  hiddenOrBackgrounded: false,
  hiddenOrBackgrounded_FIXME: false,
}

const HiddenSubtreeContext = createContext<HiddenSubtreeContextProps>(initial)

export default HiddenSubtreeContext
