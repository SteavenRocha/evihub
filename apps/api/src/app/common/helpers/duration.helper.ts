export function parseDuration(duration: string): number {
    const units: Record<string, number> = {
        s: 1000,
        m: 60 * 1000,
        h: 60 * 60 * 1000,
        d: 24 * 60 * 60 * 1000,
    }
    const match = duration.match(/^(\d+)([smhd])$/)
    if (!match) throw new Error(`Invalid duration format: ${duration}`)
    return parseInt(match[1]) * units[match[2]]
}