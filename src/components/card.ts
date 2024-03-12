import { anyCharacter } from '../GoT/model/character';
import { Component } from './component';

export class Card extends Component {
  selector: string;
  template: string;
  constructor(selector: string) {
    super(selector);
    this.selector = selector;
    this.template = this.createTemplate();
  }

  createTemplate(item: anyCharacter, i: number) {
    return `<li class="character col">
    <div class="card character__card">
      <img src="img/${item.name.toLowerCase()}.jpg" alt="Foto de ${item.name} ${
      item.house
    }" class="character__picture card-img-top" />
      <div class="card-body">
        <h2 class="character__name card-title h4">${item.name} ${
      item.house
    }</h2>
        <div class="character__info">
          <ul class="list-unstyled">
            <li>Edad: ${item.age} años</li>
            <li>
              Estado: ${
                item.isAlive
                  ? '<i class="fas fa-thumbs-up"></i>'
                  : '<i class="fas fa-thumbs-down"></i>'
              }
            </li>
          </ul>
        </div>
        <div class="character__overlay">
          <ul class="list-unstyled">
            ${selectCharacterData(item)}
          </ul>
          <div class="character__actions">
            <button data-id="${i}"
            class="character__action btn talk">habla</button>
            <button data-id="${i}"
            class="character__action btn kill">muere</button>
          </div>
        </div>
      </div>
      <i class="emoji">${emojis[item.type as keyof typeof emojis]}
      </i>
    </div>
  </li>
`;
  }
}
