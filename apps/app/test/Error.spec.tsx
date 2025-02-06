import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import Error from '../src/components/Error/Error'
import React from 'react'

test('renders error with correct message', async () => {
    const errorMessage = "Error fetching data"
    const { container } = render(
        <Error message={errorMessage} />
    )

    const loadingDiv = container.getElementsByClassName("rt-Text")
    expect(loadingDiv[0].textContent).toEqual(errorMessage)
})