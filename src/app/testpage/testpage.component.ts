import {Component} from '@angular/core';
import {GameInfo} from "../../types/GameInfo";


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
  `;
const gameInfo: GameInfo = JSON.parse(jsonText);

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.scss']
})
export class TestpageComponent {
  gameInfo = gameInfo
}
