import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import TokenBalance from '../src/components/TokenBalance/TokenBalance'

import React from 'react'

test('renders token balance with data', async () => {
    const symbol = 'USDC'
    const name = 'USD Coin'
    const balanceBig = '1000000'
    const balSmall = '1.0'
    const decimals = 6

    const { container } = render(
        <TokenBalance symbol={symbol} name={name} decimals={decimals} tokenBalance={balanceBig} />
    )

    const nameel = container.getElementsByClassName("tokenBalanceItem__name")
    const balel = container.getElementsByClassName("tokenBalanceItem__bal")

    expect(nameel[0].textContent).toContain(name)
    expect(balel[0].textContent).toContain(symbol)
    expect(balel[0].textContent).toContain(balSmall)
})