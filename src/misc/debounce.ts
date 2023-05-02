export const debounce = (func: (...args: any[]) => void, wait: number): (...args: any[]) => void => {
    let timeout: ReturnType<typeof setTimeout>

    return function (...args: any[]): any {
        clearTimeout(timeout)
        timeout = setTimeout((): any => {
            func(...args)
        }, wait)
    }
}

