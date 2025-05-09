"use strict";

const DATA = [
  {
    "first name": "Олексій",
    "last name": "Петров",
    photo: "./img/trainers/trainer-m1.jpg",
    specialization: "Басейн",
    category: "майстер",
    experience: "8 років",
    description:
      "Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
  },
  {
    "first name": "Марина",
    "last name": "Іванова",
    photo: "./img/trainers/trainer-f1.png",
    specialization: "Тренажерний зал",
    category: "спеціаліст",
    experience: "2 роки",
    description:
      "Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
  },
  {
    "first name": "Ігор",
    "last name": "Сидоренко",
    photo: "./img/trainers/trainer-m2.jpg",
    specialization: "Дитячий клуб",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
  },
  {
    "first name": "Тетяна",
    "last name": "Мороз",
    photo: "./img/trainers/trainer-f2.jpg",
    specialization: "Бійцівський клуб",
    category: "майстер",
    experience: "10 років",
    description:
      "Тетяна є експертом в бойових мистецтвах. Вона проводить тренування для професіоналів і новачків. Її підхід до навчання допомагає спортсменам досягати високих результатів.",
  },
  {
    "first name": "Сергій",
    "last name": "Коваленко",
    photo: "./img/trainers/trainer-m3.jpg",
    specialization: "Тренажерний зал",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Сергій фокусується на роботі з фітнесом та кардіотренуваннями. Він вдосконалив свої методики протягом багатьох років. Його учні завжди в формі та енергійні.",
  },
  {
    "first name": "Олена",
    "last name": "Лисенко",
    photo: "./img/trainers/trainer-f3.jpg",
    specialization: "Басейн",
    category: "спеціаліст",
    experience: "4 роки",
    description:
      "Олена спеціалізується на синхронному плаванні. Вона тренує команди різного рівня. Її команди завжди займають призові місця на змаганнях.",
  },
  {
    "first name": "Андрій",
    "last name": "Волков",
    photo: "./img/trainers/trainer-m4.jpg",
    specialization: "Бійцівський клуб",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Андрій має досвід у вивченні різних бойових мистецтв. Він викладає техніку та тактику бою. Його учні здобувають перемоги на міжнародних турнірах.",
  },
  {
    "first name": "Наталія",
    "last name": "Романенко",
    photo: "./img/trainers/trainer-f4.jpg",
    specialization: "Дитячий клуб",
    category: "спеціаліст",
    experience: "3 роки",
    description:
      "Наталія розробила унікальну програму для дітей дошкільного віку. Вона допомагає дітям розвивати фізичні та ментальні навички. Її класи завжди веселі та динамічні.",
  },
  {
    "first name": "Віталій",
    "last name": "Козлов",
    photo: "./img/trainers/trainer-m5.jpg",
    specialization: "Тренажерний зал",
    category: "майстер",
    experience: "10 років",
    description:
      "Віталій спеціалізується на функціональному тренуванні. Він розробив ряд ефективних тренувальних програм. Його клієнти швидко досягають бажаних результатів.",
  },
  {
    "first name": "Юлія",
    "last name": "Кравченко",
    photo: "./img/trainers/trainer-f5.jpg",
    specialization: "Басейн",
    category: "спеціаліст",
    experience: "4 роки",
    description:
      "Юлія є експертом у водних видах спорту. Вона проводить тренування з аквагімнастики та аеробіки. Її учні демонструють вражаючі показники на змаганнях.",
  },
  {
    "first name": "Олег",
    "last name": "Мельник",
    photo: "./img/trainers/trainer-m6.jpg",
    specialization: "Бійцівський клуб",
    category: "майстер",
    experience: "12 років",
    description:
      "Олег є визнаним майстром в бойових мистецтвах. Він тренує чемпіонів різних вагових категорій. Його методики вважаються одними з найефективніших у світі бойових мистецтв.",
  },
  {
    "first name": "Лідія",
    "last name": "Попова",
    photo: "./img/trainers/trainer-f6.jpg",
    specialization: "Дитячий клуб",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Лідія має великий досвід у роботі з дітьми. Вона організовує різноманітні спортивні ігри та заняття. Її класи завжди допомагають дітям розвивати соціальні навички та командний дух.",
  },
  {
    "first name": "Роман",
    "last name": "Семенов",
    photo: "./img/trainers/trainer-m7.jpg",
    specialization: "Тренажерний зал",
    category: "спеціаліст",
    experience: "2 роки",
    description:
      "Роман є експертом у кросфіту та функціональних тренуваннях. Він розробив власні програми для різних вікових груп. Його учні часто отримують нагороди на фітнес-турнірах.",
  },
  {
    "first name": "Анастасія",
    "last name": "Гончарова",
    photo: "./img/trainers/trainer-f7.jpg",
    specialization: "Басейн",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Анастасія фокусується на водних програмах для здоров'я та фітнесу. Вона проводить тренування для осіб з різним рівнем підготовки. Її учні відзначають покращення здоров'я та благополуччя після занять.",
  },
  {
    "first name": "Валентин",
    "last name": "Ткаченко",
    photo: "./img/trainers/trainer-m8.jpg",
    specialization: "Бійцівський клуб",
    category: "спеціаліст",
    experience: "2 роки",
    description:
      "Валентин є експертом в таеквондо та кікбоксингу. Він викладає техніку, тактику та стратегію бою. Його учні часто стають чемпіонами на національних та міжнародних змаганнях.",
  },
  {
    "first name": "Лариса",
    "last name": "Петренко",
    photo: "./img/trainers/trainer-f8.jpg",
    specialization: "Дитячий клуб",
    category: "майстер",
    experience: "7 років",
    description:
      "Лариса розробила комплексну програму для розвитку фізичних та інтелектуальних навичок дітей. Вона проводить заняття в ігровій формі. Її методика допомагає дітям стати активними та розумними.",
  },
  {
    "first name": "Олексій",
    "last name": "Петров",
    photo: "./img/trainers/trainer-m9.jpg",
    specialization: "Басейн",
    category: "майстер",
    experience: "11 років",
    description:
      "Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
  },
  {
    "first name": "Марина",
    "last name": "Іванова",
    photo: "./img/trainers/trainer-f9.jpg",
    specialization: "Тренажерний зал",
    category: "спеціаліст",
    experience: "2 роки",
    description:
      "Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
  },
  {
    "first name": "Ігор",
    "last name": "Сидоренко",
    photo: "./img/trainers/trainer-m10.jpg",
    specialization: "Дитячий клуб",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
  },
  {
    "first name": "Наталія",
    "last name": "Бондаренко",
    photo: "./img/trainers/trainer-f10.jpg",
    specialization: "Бійцівський клуб",
    category: "майстер",
    experience: "8 років",
    description:
      "Наталія є майстром у бойових мистецтвах. Вона вивчала різні техніки та стили, із якими працює зі своїми учнями. Її підхід до навчання відповідає найвищим стандартам.",
  },
  {
    "first name": "Андрій",
    "last name": "Семенов",
    photo: "./img/trainers/trainer-m11.jpg",
    specialization: "Тренажерний зал",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Андрій спеціалізується на функціональному тренуванні. Він розробив власну систему вправ для зміцнення корпусу. Його учні завжди отримують видимі результати.",
  },
  {
    "first name": "Софія",
    "last name": "Мельник",
    photo: "./img/trainers/trainer-f11.jpg",
    specialization: "Басейн",
    category: "спеціаліст",
    experience: "6 років",
    description:
      "Софія працює з аквагімнастикою. Вона вивчила різні техніки та стили плавання. Її заняття допомагають клієнтам розслабитися та покращити фізичну форму.",
  },
  {
    "first name": "Дмитро",
    "last name": "Ковальчук",
    photo: "./img/trainers/trainer-m12.png",
    specialization: "Дитячий клуб",
    category: "майстер",
    experience: "10 років",
    description:
      "Дмитро спеціалізується на розвитку дитячого спорту. Він розробив унікальну програму для малюків. Його методики забезпечують гармонійний розвиток дітей.",
  },
  {
    "first name": "Олена",
    "last name": "Ткаченко",
    photo: "./img/trainers/trainer-f12.jpg",
    specialization: "Бійцівський клуб",
    category: "спеціаліст",
    experience: "5 років",
    description:
      "Олена є відомим тренером у жіночому бойовому клубі. Вона вивчила різні техніки самооборони. Її підхід дозволяє її ученицям відчувати себе впевнено в будь-яких ситуаціях.",
  },
];

const trainersKeyMap = {
  gym: "Тренажерний зал",
  "fight club": "Бійцівський клуб",
  "kids club": "Дитячий клуб",
  "swimming pool": "Басейн",
  master: "майстер",
  specialist: "спеціаліст",
  instructor: "інструктор",
  all: "all",
};

const trainersContainer = document.querySelector(".trainers-cards__container");
const filtersForm = document.querySelector(".filters");
const sortingButtons = document.querySelectorAll(".sorting__btn");
const sortingSection = document.querySelector(".sorting");
const filtersSidebar = document.querySelector(".sidebar");
const loader = document.querySelector(".loader");

const sortStorageKey = "sortStorageKey";
const categoryStorageKey = "categoryStorageKey";
const directionStorageKey = "directionStorageKey";

let sortValue, categoryFilterValue, directionFilterValue;

sortValue = localStorage.getItem(sortStorageKey);
categoryFilterValue = localStorage.getItem(categoryStorageKey);
directionFilterValue = localStorage.getItem(directionStorageKey);

function renderCards() {
  let dataArray = [...DATA];
  dataArray = filter(dataArray);
  dataArray = sort(dataArray);

  trainersContainer.innerHTML = "";

  const template = document.querySelector("#trainer-card");

  dataArray.forEach((trainer) => {
    const clone = template.content.cloneNode(true);
    const card = clone.querySelector(".trainer");
    const img = card.querySelector(".trainer__img");

    img.src = trainer.photo;
    img.alt = `${trainer["first name"]} ${trainer["last name"]}`;

    card.querySelector(
      ".trainer__name"
    ).textContent = `${trainer["first name"]} ${trainer["last name"]}`;

    const btn = card.querySelector(".trainer__show-more");
    btn.addEventListener("click", () => showModal(trainer));

    trainersContainer.appendChild(card);
  });

  setTimeout(() => {
    loader.classList.add("loader-hidden");
  }, 500);
}

// === Modal window ===
function showModal(trainer) {
  const existing = document.querySelector(".modal");
  if (existing) existing.remove();

  const modalTemplate = document.querySelector("#modal-template");
  const modalClone = modalTemplate.content.cloneNode(true);
  const modal = modalClone.querySelector(".modal");

  modal.querySelector(".modal__img").src = trainer.photo;
  modal.querySelector(
    ".modal__img"
  ).alt = `${trainer["first name"]} ${trainer["last name"]}`;
  modal.querySelector(
    ".modal__name"
  ).textContent = `${trainer["first name"]} ${trainer["last name"]}`;
  modal.querySelector(
    ".modal__point--category"
  ).textContent = `Категорія: ${trainer.category}`;
  modal.querySelector(
    ".modal__point--experience"
  ).textContent = `Досвід: ${trainer.experience}`;
  modal.querySelector(
    ".modal__point--specialization"
  ).textContent = `Напрям тренера: ${trainer.specialization}`;
  modal.querySelector(".modal__text").textContent = trainer.description;

  modal.querySelector(".modal__close").addEventListener("click", () => {
    modal.remove();
    document.body.classList.remove("no-scroll");
  });

  document.body.appendChild(modal);
  document.body.classList.add("no-scroll");
}

sortingButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    sortingButtons.forEach((b) => b.classList.remove("sorting__btn--active"));
    btn.classList.add("sorting__btn--active");
    sortValue = btn.dataset.sortbtn;

    localStorage.setItem(sortStorageKey, sortValue);

    renderCards();
  });
});

document.querySelector(".filters__submit").addEventListener("click", (e) => {
  e.preventDefault();
  loader.classList.remove("loader-hidden");
  const direction = document
    .querySelector('input[name="direction"]:checked')
    .value.toLowerCase();

  const translatedDirection = trainersKeyMap[direction].toLowerCase();
  directionFilterValue = translatedDirection;
  const category = document
    .querySelector('input[name="category"]:checked')
    .value.toLowerCase();
  const translatedCategory = trainersKeyMap[category].toLowerCase();
  categoryFilterValue = translatedCategory;
  localStorage.setItem(categoryStorageKey, categoryFilterValue);
  localStorage.setItem(directionStorageKey, directionFilterValue);

  renderCards();
});

function filter(arr) {
  if (!directionFilterValue && !categoryFilterValue) {
    return arr;
  }
  const filteredArray = arr.filter((trainer) => {
    const trainerDirection = trainer.specialization.toLowerCase();
    const trainerCategory = trainer.category.toLowerCase();
    const directionMatch =
      directionFilterValue === "all" ||
      trainerDirection === directionFilterValue;

    const categoryMatch =
      categoryFilterValue === "all" || trainerCategory === categoryFilterValue;

    return directionMatch && categoryMatch;
  });

  return filteredArray;
}

function sort(arr) {
  if (sortValue === "surname") {
    arr.sort((a, b) => a["last name"].localeCompare(b["last name"]));
  } else if (sortValue === "experience") {
    arr.sort((a, b) => {
      const yearsA = parseInt(a.experience);
      const yearsB = parseInt(b.experience);
      return yearsB - yearsA;
    });
  }
  return arr;
}

function initLocalStorage() {
  sortingButtons.forEach((b) => {
    b.classList.remove("sorting__btn--active");
    if (b.dataset.sortbtn == sortValue) {
      b.classList.add("sorting__btn--active");
    }
  });

  const directionFilterBtns = document.querySelectorAll(
    'input[name="direction"]'
  );
  directionFilterBtns.forEach((b) => {
    b.checked = false;
    if (trainersKeyMap[b.value].toLowerCase() == directionFilterValue) {
      b.checked = true;
    }
  });

  const categoryFilterBtns = document.querySelectorAll(
    'input[name="category"]'
  );
  categoryFilterBtns.forEach((b) => {
    b.checked = false;
    if (trainersKeyMap[b.value].toLowerCase() == categoryFilterValue) {
      b.checked = true;
    }
  });
}
initLocalStorage();

window.addEventListener("DOMContentLoaded", () => {
  renderCards();
  filtersSidebar.removeAttribute("hidden");
  sortingSection.removeAttribute("hidden");
});
