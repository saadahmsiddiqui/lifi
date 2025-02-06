import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import Loading from '../src/components/Loading/Loading'
import React from 'react'

test('renders loading with correct message', async () => {
    const loadingMessage = "Loading Tokens"
    const { container } = render(
        <Loading message={loadingMessage} />
    )

    const loadingDiv = container.getElementsByClassName("rt-Text")
    expect(loadingDiv[0].textContent).toEqual(loadingMessage)
})