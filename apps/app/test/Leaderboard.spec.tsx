import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import Leaderboard from '../src/components/Leaderboard/Leaderboard'
import React from 'react'

test('renders leaderboard with elements', async () => {
    const leaderboardData = ["0x98729c03c4D5e820F5e8c45558ae07aE63F97461", "0x061311c053f133d89EF5FD3f304E2e6f1c7Ff6Bd"]

    const { container } = render(
        <Leaderboard leaderboard={leaderboardData} />
    )

    const listOfElements = container.getElementsByClassName("tokenBalanceItem")
    const addrEl = listOfElements[0].getElementsByClassName("tokenBalanceItem__addr");
    expect(addrEl[0].textContent).toContain(leaderboardData[0])
    const secondAddrEL = listOfElements[1].getElementsByClassName("tokenBalanceItem__addr");
    expect(secondAddrEL[0].textContent).toContain(leaderboardData[1])
})