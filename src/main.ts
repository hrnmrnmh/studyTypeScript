import {GameInfo, Genre} from "./types/GameInfo"

/**
 * @see <a href="https://www.tohoho-web.com/ex/typescript.html">とほほのTypeScript入門</a>
 * @param name: string as fullName
 */
function hello(name: string): void {
    console.log("Hello " + name + "!");
}

let your_name: string = "Akihiro Ohno";
hello(your_name);

/**
 * @see <a href="https://maku.blog/p/2hr3eqx/">TypeScript で JSON オブジェクトに型情報を付加する</a>
 * jsonString
 */
const jsonText = `{
    "games": [
      {
        "title": "Title1",
        "genres": ["UNKNOWN GENRE"]
      },
      {
        "title": "Title2",
        "genres": ["ACT", "RPG"]
      },
      {
        "title": "Title3",
        "genres": ["STG"],
        "note": "Fantastic shooting game"
      }
    ]
  }
  `

const gameInfo: GameInfo = JSON.parse(jsonText)

gameInfo.games.forEach(game => {
    console.log("#" + game.title)
    if (game.note) {
        console.log("##" + game.note);
    }
    game.genres.forEach(genre => {
        switch (genre) {
            case Genre.ACT:
                console.log("- アクション");
                break;
            case Genre.RPG:
                console.log("- RPG");
                break;
            case Genre.STG:
                console.log("- シューティング");
                break;
            default:
                console.error("- fuck you " + genre);
        }
    })
})