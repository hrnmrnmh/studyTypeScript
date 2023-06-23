/**
 * @see <a href="https://www.umayadia.com/Note/Note028WebAPISample.htm#A5_3">すぐ呼び出し可能なWebAPIのサンプル #GET persons</a>
 * 適当な人名を取得するAPIの型
 */
export type Persons = {
    success: boolean
    data: Person[]
}

type Person = {
    name: string
    note: string
    age: number
    registerDate: string
}