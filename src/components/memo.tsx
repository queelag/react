import { ReactNode, useMemo } from 'react'
import type { MemoProps } from '../definitions/props.js'

export function Memo(props: MemoProps): ReactNode {
  return useMemo(() => props.children, props.deps)
}
