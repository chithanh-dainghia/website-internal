// import invariant from 'invariant' // Import dependencies based on your project's structure
import BanzaiLazyQueue from '@ui/etc/BanzaiLazyQueue'
import ExecutionEnvironment from '@ui/utils/common/ExecutionEnvironment'
import emptyFunction from '@ui/utils/common/emptyFunction'

type GKEntry = {
  hash: number
  result: boolean
}

type GKLoggedEntry = {
  identifier: string
  hash: number
}

const i: Record<string, GKEntry> = {}
const j: Record<string, boolean> = {}

function k(a: string): boolean {
  const b = i[a]
  // invariant(b != null, 'GKX: `%s` is not defined.', a)

  if (
    !j[a] &&
    (ExecutionEnvironment.canUseDOM || ExecutionEnvironment.isInWorker)
  ) {
    BanzaiLazyQueue.queuePost('gk2_exposure', {
      identifier: a,
      hash: b.hash,
    })
    j[a] = true
  }

  return b.result
}

k.add = function (
  a: Record<string, GKEntry>,
  b?: { entry?: number; dup_entry?: number },
): void {
  for (const c in a) {
    if (b) {
      b.entry = b.entry! + 1
    }
    if (!(c in i)) {
      i[c] = a[c]
    } else if (b) {
      b.dup_entry = b.dup_entry! + 1
    }
  }
}

k.addLoggedInternal = function (a: Record<string, GKEntry>): void {
  k.add(a)
  for (const c in a) {
    j[c] = true
  }
}

k.getGKs = function (): null {
  return null
}

k.getLogged = function (): GKLoggedEntry[] {
  return Object.keys(j).map(a => ({
    identifier: a,
    hash: i[a].hash,
  }))
}

const setPass = emptyFunction
const setFail = emptyFunction
const clear = emptyFunction

const gkx = {
  k,
  setPass,
  setFail,
  clear,
}

export default gkx
