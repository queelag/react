import { fireEvent, render, screen } from '@testing-library/react'
import React, { ReactElement, useState } from 'react'
import { describe, expect, it } from 'vitest'
import { Memo } from '../../src'

describe('Memo', () => {
  it.skip('works', async () => {
    let Component: () => ReactElement

    Component = () => {
      const [bigint, setBigInt] = useState(0n)
      const [number, setNumber] = useState(0)

      const onClickBigInt = () => {
        setBigInt((b) => b++)
      }

      const onClickNumber = () => {
        setNumber((n) => n++)
      }

      return (
        <Memo deps={[number]}>
          <div data-testid='bigint' onClick={onClickBigInt}>
            {bigint.toString()}
          </div>
          <div data-testid='number' onClick={onClickNumber}>
            {number}
          </div>
        </Memo>
      )
    }

    render(<Component />)

    fireEvent(screen.getByTestId('bigint'), new MouseEvent('click'))

    expect(screen.getByTestId('bigint').innerHTML).toBe('0')
    expect(screen.getByTestId('number').innerHTML).toBe('0')

    fireEvent(screen.getByTestId('number'), new MouseEvent('click'))

    expect(screen.getByTestId('bigint').innerHTML).toBe('1')
    expect(screen.getByTestId('number').innerHTML).toBe('1')

    fireEvent(screen.getByTestId('number'), new MouseEvent('click'))

    expect(screen.getByTestId('bigint').innerHTML).toBe('1')
    expect(screen.getByTestId('number').innerHTML).toBe('2')
  })
})
