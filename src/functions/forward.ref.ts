import { Ref, VNode } from 'preact'
import { forwardRef as _ } from 'preact/compat'

type ForwardRefRenderFunction<T, P = {}> = (props: P, ref: Ref<T>) => VNode<P>
type NullableForwardRefRenderFunction<T, P = {}> = (props: P, ref: Ref<T>) => VNode<P> | null

type ForwardRefExoticComponent<P = {}> = (props: P) => VNode
type NullableForwardRefExoticComponent<P = {}> = (props: P) => VNode<P> | null

function forwardRef<T, P = {}>(render: ForwardRefRenderFunction<T, P>): ForwardRefExoticComponent<P>
function forwardRef<T, P = {}>(render: NullableForwardRefRenderFunction<T, P>): NullableForwardRefExoticComponent<P>
function forwardRef(...args: any[]) {
  return _(args[0]) as any
}

export { forwardRef }
