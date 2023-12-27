import { ForwardedRef, ReactElement, forwardRef as _ } from 'react'

type ForwardRefRenderFunction<T, P = {}> = (props: P, ref: ForwardedRef<T>) => ReactElement<P>
type NullableForwardRefRenderFunction<T, P = {}> = (props: P, ref: ForwardedRef<T>) => ReactElement<P> | null

type ForwardRefExoticComponent<P = {}> = (props: P) => ReactElement
type NullableForwardRefExoticComponent<P = {}> = (props: P) => ReactElement<P> | null

/**
 * Lets your component expose a DOM node to parent component with a ref.
 * The difference with the original `forwardRef` is that this function has less strict types.
 *
 * [Aracna Reference](https://aracna.dariosechi.it/react/functions/forward-ref)
 */
function forwardRef<T, P = {}>(render: ForwardRefRenderFunction<T, P>): ForwardRefExoticComponent<P>
/**
 * Lets your component expose a DOM node to parent component with a ref.
 * The difference with the original `forwardRef` is that this function has less strict types.
 *
 * [Aracna Reference](https://aracna.dariosechi.it/react/functions/forward-ref)
 */
function forwardRef<T, P = {}>(render: NullableForwardRefRenderFunction<T, P>): NullableForwardRefExoticComponent<P>
function forwardRef(...args: any[]) {
  return _(args[0]) as any
}

export { forwardRef }
