import { DependencyList, ReactNode } from 'react'

export interface MemoProps {
  children: ReactNode
  deps: DependencyList
}
