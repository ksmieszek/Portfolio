import routes from "routes";
import Images from "utils/Images";
import Icons from "utils/Icons";
import Videos from "utils/Videos";

export const projectErsiDescription = {
  id: "ersi",
  title: "Pixel perfect",
  description:
    "Budując ten projekt starałem się najwierniej odwzorować wygląd oraz interakcje na tej stronie. Najbardziej wymagającym zadaniem było odtworzenie rozbudowanej nawigacji.",
  technologies: [Icons.css, Icons.javascript, Icons.html],
  image: Images.ersi,
  githubLink: `https://github.com/`,
  siteLink: `https://github.com/`,
  path: routes.ersi,
  features: [
    'strona jest responsywna(RWD) i była budowana techniką "mobile first"',
    "rozbudowane menu",
    "strona posiada wiele interaktywnych elementów",
    "podczas dewelopmentu korzystałem z pakietu Browsersync by na bierząco obserwować zmiany na stronie",
  ],
  videos: Videos.ersi,
};

export const projectCodeFastDescription = {
  id: "codefast",
  title: "Code fast",
  description:
    "Ta strona pomaga ćwiczyć szybkość oraz bezbłędność pisania kodu. W każdym momencie możesz wybrać jeden lub wiele języków programowania, których pisownie chcesz poćwiczyć oraz przez jak długo.",
  technologies: [Icons.javascript, Icons.jscharting, Icons.css],
  image: Images.codefast,
  githubLink: `https://github.com/`,
  siteLink: `https://github.com/`,
  path: routes.codefast,
  detailedDescription: `Wchodząc na stronę można wybrać jeden lub wiele języków programowania oraz czas trwania treningu. Ćwiczenie rozpoczyna się gdy zaczniemy
          pisać w polu tekstowym. Po zakończeniu sesji pisania kodu zostają wyświetlone jej wyniki. Można też śledzić swój postęp wchodząc do panelu
          gdzie jest zapisana cała nasza historia kodowania.`,
  features: [
    "program przechowuje historię pisania, wybrane języki oraz wybrany czas w local storage",
    "do wyświetlania wykresu program wykorzystuje bibliotekę JSCharting",
    "panel z wylosowanymi słowami, pole tekstowe oraz pasek postępu dostosowują swoje wartości do szerokości ekranu by poprawnie wyświetlać dane",
    "gdy użytkownik wypisze prawie wszystkie wylosowane słowa, to program dolosuje ich więcej",
    "miejsce do wpisywania tekstu jest umieszczone zawsze na jego końcu i nie może być zmienione poprzez klikanie czy używanie klawiszy(strzałek, ctrl+z, home...)",
    "akcje wklejania, wycinania, przeciągania tekstu są wyłączone by zapobiec oszukiwaniu",
    "długość paska postępu informuje nas ile czasu pozostało do końca sesji",
    "języki programowania i słowa do nich dołączone są już zdefiniowane",
    "program na bieżąco sprawdza pisownię oraz zaznacza w niej błędy",
  ],
  videos: Videos.codefast,
};

export const projectMyDictionaryDescription = {
  id: "mydictionary",
  title: "MyDictionary",
  description:
    'Aplikacja służąca jako słownik, pozwalająca na założenie konta i przechowywanie na nim słów, tekstów oraz zdjęć. Dane pobierane są za pomocą Strapi i przekazywane do "store" w Reduxie.',
  technologies: [Icons.react, Icons.reactRedux, Icons.strapi, Icons.mongoDB, Icons.reacthookform, Icons.styledComponents],
  image: Images.mydictionary,
  githubLink: `https://github.com/`,
  siteLink: `https://github.com/`,
  path: routes.mydictionary,
  detailedDescription:
    "By w pełni korzystać z aplikacji należy dodać co najmniej dwa języki. Będzie można do nich przypisywać słówka jak i teksty z tłumaczeniami. Stwórz własne konto lub użyj - login: admin, password: admin",
  features: [
    "operacje CRUD na danych",
    "walidacja formularzy przy pomocy React Hook Form & Yup",
    "przed przesłaniem zdjęcia jest ono kompresowane przez pakiet compressorjs",
    "zakładanie kont i protected routes",
    "podczas oczekiwania na odpowiedź z REST API wyświetla się ekran ładowania",
    'aplikacja jest responsywna(RWD) i była budowana techniką "mobile first"',
    "użycie mechanizmów: Higher-Order Component, Forwarding Refs, Hooks, Lifecycle methods, Portals",
  ],
  videos: Videos.mydictionary,
};

const projectsDescriptions = [projectMyDictionaryDescription, projectErsiDescription, projectCodeFastDescription];

export default projectsDescriptions;
