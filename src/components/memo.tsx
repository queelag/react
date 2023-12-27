import { ReactNode, useMemo } from 'react'
import type { MemoProps } from '../definitions/props.js'

/**
 * The `Memo` component is a wrapper for the `useMemo` hook.
 *
 * [Aracna Reference](https://aracna.dariosechi.it/react/components/memo)
 */
export function Memo(props: MemoProps): ReactNode {
  return useMemo(() => props.children, props.deps ?? [])
}
