import routes from "routes";
import Images from "utils/Images";
import Icons from "utils/Icons";
import Videos from "utils/Videos";

export const projectPixelPerfectDescription = {
  id: "pixelperfect",
  title: "Pixel perfect",
  description:
    "Budując tą stronę starałem się najwierniej odwzorować wygląd oraz interakcje z istniejącej już strony. Najbardziej wymagającym zadaniem było odtworzenie rozbudowanej nawigacji.",
  technologies: [Icons.css, Icons.javascript, Icons.html],
  image: Images.pixelperfect,
  githubLink: "https://github.com/ksmieszek/Pixel-perfect",
  siteLink: "https://ksmieszek.github.io/Pixel-perfect/",
  path: routes.pixelperfect,
  features: [
    "strona jest responsywna(RWD) i była budowana techniką Mobile First",
    "rozbudowane menu",
    "strona posiada wiele interaktywnych elementów",
    "podczas dewelopmentu korzystałem z paczki Browsersync by na bierząco obserwować zmiany na stronie",
  ],
  videos: Videos.pixelperfect,
};

export const projectCodeFastDescription = {
  id: "codefast",
  title: "Code fast",
  description:
    "Ta strona pomaga ćwiczyć szybkość oraz bezbłędność pisania kodu. W każdym momencie możesz wybrać jeden lub wiele języków programowania, których pisownie chcesz poćwiczyć oraz przez jak długo.",
  technologies: [Icons.javascript, Icons.jscharting, Icons.css],
  image: Images.codefast,
  githubLink: "https://github.com/ksmieszek/Code-fast",
  siteLink: "https://ksmieszek.github.io/Code-fast/",
  path: routes.codefast,
  detailedDescription: `Wchodząc na stronę można wybrać jeden lub wiele języków programowania oraz czas trwania treningu. Ćwiczenie rozpoczyna się gdy zaczniemy
          pisać w polu tekstowym. Po zakończeniu sesji pisania kodu zostają wyświetlone jej wyniki. Można też śledzić swój postęp wchodząc do panelu
          gdzie jest zapisana cała nasza historia kodowania.`,
  features: [
    "program przechowuje historię pisania, wybrane języki oraz wybrany czas w Local Storage",
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
  githubLink: "https://github.com/ksmieszek/MyDictionary-frontend",
  siteLink: "https://app-my-dictionary.netlify.app",
  path: routes.mydictionary,
  detailedDescription:
    "By w pełni korzystać z aplikacji należy założyć konto, a następnie dodać co najmniej dwa języki, którymi chcemy się posługiwać. Do zdefiniowanych języków będzie można przypisywać słówka jak i teksty z tłumaczeniami. Dane są przechowywane w MongoDB Atlas i pobierane za pomocą Strapi.",
  features: [
    "operacje CRUD na danych",
    "walidacja formularzy przy pomocy React Hook Form & Yup",
    "przed przesłaniem zdjęcia jest ono kompresowane przez pakiet compressorjs",
    "zakładanie kont i protected routes",
    "podczas oczekiwania na odpowiedź z REST API wyświetla się ekran ładowania",
    "Atomic Design, aplikacja jest responsywna(RWD) i była budowana techniką Mobile First",
    "użycie mechanizmów: Higher-Order Component, Forwarding Refs, Hooks, Lifecycle methods, Portals",
  ],
  videos: Videos.mydictionary,
};

export const projectHotelWebDescription = {
  id: "hotelweb",
  title: "Hotel Web Application",
  description:
    "Wyświetlane na stronie treści są zarządzane przez CMS, możemy też składać rezerwacje które są zapisywane do naszego koszyka zakupowego.",
  technologies: [Icons.materialize, Icons.bootstrap, Icons.dotnetcore],
  image: Images.hotelweb,
  githubLink: "https://github.com/ksmieszek/Hotel-Web-Application",
  path: routes.hotelweb,
  detailedDescription:
    "Aplikacja składa się z trzech projektów: projektu CMS, projektu wyświetlającego dane dla użytkowników oraz podpiętej do nich bazy danych stworzonej metodą Code First. Projekt był realizowany w ramach programu studiów.",
  features: [
    "widoki dla użytkowników stworzone w frameworku Materialize",
    "CMS jest ostylowany za pomocą frameworku Bootstrap",
    "wzorzec projektowy MVC",
    "koszyk przechowujący zakupy",
    "baza danych utworzona za pomocą Entity Framework Code First",
  ],
  videos: Videos.hotelweb,
};

export const projectHotelDesktopDescription = {
  id: "hoteldesktop",
  title: "Hotel Desktop Application",
  githubLink: "https://github.com/ksmieszek/Hotel-Desktop-Application",
  technologies: ["C#", "Entity Framework"],
  path: routes.hoteldesktop,
  detailedDescription: "Projekt był realizowany w ramach programu studiów.",
  features: [
    "wzorzec projektowy MVVM",
    "baza danych utworzona za pomocą Entity Framework Database First",
    "walidacja wprowadzanych danych przez użytkownika",
    "sortowanie i filtrowanie rekordów w bazie",
  ],
  videos: Videos.hoteldesktop,
};

export const projectHotelManagementDescription = {
  id: "hotelmanagement",
  title: "Hotel Management",
  githubLink: "https://github.com/ksmieszek/Hotel-Management",
  technologies: ["Tailwind CSS", "Laravel", "MySQL"],
  path: routes.hotelmanagement,
  detailedDescription: "Projekt był realizowany w ramach programu studiów.",
  features: [
    "aplikacja ostylowana za pomocą Tailwind CSS",
    "logowanie i rejestracja zrealizowane jest za pomocą paczki Laravel Breeze",
    "wzorzec projektowy MVC",
    "baza danych MySQL",
    "walidacja formularzy",
    "wyszukiwanie w tabeli(w widoku Pokoje)",
    "rozwijanie aplikacji przy pomocy Artisan CLI",
  ],
  videos: Videos.hotelmanagement,
};

export const projectPortfolioDescription = {
  id: "portfolio",
  title: "Portfolio",
  githubLink: "https://github.com/ksmieszek/Portfolio",
  detailedDescription:
    "Przejścia pomiędzy podstronami zostały obsłużone przez pakiet React Transition Group, oraz ostylowane przy pomocy GSAP i CSS. ScrollTrigger wpływa na animacje wejścia kolejnych projektów oraz styl elementów nawigacji w tym aktywnego linku.",
  technologies: ["React", "GSAP", "Styled Components"],
  path: routes.portfolio,
  features: ["page transitions", "animacje w GSAP", "Atomic Design, Styled Components, RWD, Mobile First"],
};

export const projectECommerceDescription = {
  id: "ecommerce",
  title: "eCommerce",
  description:
    "Projekt sklepu internetowego z odzieżą. Wyświetlane produkty są filtrowane na podstawie adresu URL, a z kategorii do których te produkty należą generowany jest formularz filtrujący. Produktami oraz menu można zarządzać z panelu admina stworzonego w oddzielnym projekcie.",
  technologies: [Icons.react, Icons.reactRedux, Icons.firebase, Icons.reacthookform, Icons.sass, Icons.materialui],
  image: Images.ecommerce,
  githubLink: "https://github.com/ksmieszek/E-Commerce",
  siteLink: "https://app-e-commerce.netlify.app/",
  additionalGithubLink: "https://github.com/ksmieszek/E-Commerce-Admin-Panel",
  path: routes.ecommerce,
  detailedDescription:
    "Ze sklepu można korzystać będąc jak i nie będąc jak zalogowanym, przy czym zalogować możemy się jedynie za pomocą konta Google. Będąc zalogowanym - produkty znajdujące się w koszyku, adres dostawy oraz oglądane wcześniej produkty przechowywane będą w bazie.\nProduktami oraz menu można zarządzać z panelu admina stworzonego w oddzielnym projekcie.",
  features: [
    "część danych jest przechowywana za pomocą Firebase(produkty, zamówienia, użytkownicy), część za pomocą Redux-Persist(niezalogowani użytkownicy)",
    "przechowywanie dodanych produktów do koszyka, adresu dostawy, wcześniej oglądanych produktów, układu(grid) wyświetlanych produktów",
    "automatycznie generowane pola formularza oraz walidacja  przy pomocy React-Hook-Form&Yup",
    "filtrowanie produktów oraz wypełnianie formularzy na podstawie adresu URL",
    "sterowanie kolejnością oraz układem wyświetlanych produktów",
    "RWD, Mobile First",
    "zaawansowany search bar, multi step form, image sliders",
    "użycie: Redux Toolkit, Scss, CSS Modules, Splide(slider package), Custom Hooks, Context",
  ],
  additionalFeatures: [
    "wyświetlanie i zarządzanie danymi w Firebase",
    "walidacja formularzy przy pomocy React-Hook-Form&Yup",
    "użycie: MaterialUI, Recharts(chart package), Custom Hooks, Context",
  ],
  videos: Videos.ecommerce,
  additionalVideos: Videos.ecommerceAdditional,
};

export const mainProjectsDescriptions = [
  projectECommerceDescription,
  projectMyDictionaryDescription,
  projectPixelPerfectDescription,
  projectCodeFastDescription,
  projectHotelWebDescription,
];

export const otherProjectsDescriptions = [projectHotelManagementDescription, projectHotelDesktopDescription, projectPortfolioDescription];
