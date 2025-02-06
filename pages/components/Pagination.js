import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const PaginationDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: .6rem;
    padding: 2rem;
`
export default function Pagination({ nextArt, prevArt }) {
    return <PaginationDiv>
        {
            prevArt ? (
                <div>
                    <Link href={`/${prevArt.slug}`}>
                        ← Previous Art
                    </Link>
                </div >
            ) : null
        }
        {
            nextArt ? (
                <div>
                    <Link href={`/${nextArt.slug}`}>Next Art →</Link>
                </div>
            ) : null
        }
    </PaginationDiv >
}
