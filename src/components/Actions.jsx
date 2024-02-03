import React from 'react'

export function incrementLike() {
    return {
        type: "INCREMENT"
    }
}

export function decrementLike() {
    return {
        type: "DECREMENT"
    }
}
