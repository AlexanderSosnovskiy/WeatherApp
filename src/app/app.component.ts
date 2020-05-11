import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  days = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота'];
  months = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"];
  darkModeState: boolean;
  today: string;
  temp: number;
  city;
  capitals = [
    'Миколаїв', "Черкаси", "Дніпро", "Донецьк", "Івано-Франківськ", "Харків", "Херсон", "Хмельницький",
    "Кропивницький", "Київ", "Луганськ", "Львів", "Одеса", "Полтава", "Рівне", "Суми", "Тернопіль", 
    "Вінниця", "Луцьк", "Запоріжжя", "Житомир", "Ужгород"
  ]
  selectedCity;
  cardCity;
  showNote = false;


  constructor() {
    const now = new Date();
    this.today = `${this.days[now.getDay()]}, ${now.getDate()} ${this.months[now.getMonth()]}`;
    this.cardCity = 'Миколаїв';
  }

  modeToggleSwitch() {
    this.darkModeState = !this.darkModeState;
  }

  selectCity(city) {
    if (this.capitals.includes(city)) {
      this.cardCity = city;
      this.showNote = false;
    } else if (city.leading > 0) {
      this.showNote = true;
    }
  }
}
