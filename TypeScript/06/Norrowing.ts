/**
 *  typeof type guards 类型保护
 */
function padLeft1(padding: number | string, input: string) {
    return " ".repeat(padding) + input
    // throw new Error('NOT IMPLEMENTED YET!')
}

function padLeft2(padding: number | string, input: string) {
    if (typeof padding === 'number') {
        return " ".repeat(padding) + input
    }
    return padding + input
    // throw new Error('NOT IMPLEMENTED YET!')
}

// ????????
function padRight(strs: string | string[] | null) {
    if (typeof strs === 'object') {
        for (const s of strs) {
            console.log(s)
        }
    } else if (typeof strs === 'string') {
        console.log(strs)
    } else {

    }
}