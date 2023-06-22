/**
 * @see <a href="https://maku.blog/p/2hr3eqx/">TypeScript で JSON オブジェクトに型情報を付加する</a>
 * type GameInfo
 */
export type GameInfo = {
    games: Game[]
}

type Game = {
    title: string
    genres: Genre[]
    note?: string
}

export const Genre = {
    ACT: "ACT",
    RPG: "RPG",
    STG: "STG"
} as const;

type Genre = typeof Genre[keyof typeof Genre];