// Твой массив данных о событиях
const eventsStore = [
  {
    title: "INFJ Personality Type - Coffee Shop Meet & Breet",
    description: "Being an INFJ",
    date: new Date(2024, 2, 23, 15),
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w ",
    type: "online", // 'online' или 'offline'
    category: "Hobbies and Passions",
    distance: 50,
  },
  {
    title:
      "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
    description: "New York AI Users",
    date: new Date(2024, 2, 23, 11, 30),
    image:
      "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    type: "offline",
    attendees: 99,
    category: "Technology",
    distance: 25,
  },
  {
    title: "Book 40+ Appointments Per Month Using AI and Automation",
    description: "New Jersey Business Network",
    date: new Date(2024, 2, 16, 14),
    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 43,
    spotsLeft: 2,
    category: "Technology",
    distance: 10,
  },
  {
    title: "Dump writing group weekly meetup",
    description: "Dump writing group",
    date: new Date(2024, 2, 13, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    category: "Business",
    distance: 100,
  },
  {
    title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
    description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
    date: new Date(2024, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 77,
    category: "Social Activities",
    distance: 74,
  },
  {
    title: "All Nations - Manhattan Missions Church Bible Study",
    description: "Manhattan Bible Study Meetup Group",
    date: new Date(2024, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVnfDB8fHx8fA%3D%3D",
    type: "offline",
    attendees: 140,
    category: "Health and Wellbeing",
    distance: 15,
  },
];

const eventsListContainer = document.querySelector(".events-list");

function formatDate(date) {
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    timeZoneName: "shortOffset",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

function createEventCard(eventData) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("events-list-card");

  const image = document.createElement("img");
  image.src = eventData.image;
  image.alt = eventData.title;

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("list-card-info");

  const dateListCardDiv = document.createElement("div");
  dateListCardDiv.classList.add("date-list-card");
  const dateSpan = document.createElement("span");
  dateSpan.classList.add("date-card");
  dateSpan.textContent = formatDate(eventData.date);
  dateListCardDiv.appendChild(dateSpan);

  const title = document.createElement("h2");
  title.classList.add("title");
  title.textContent = eventData.title;

  const categoryParagraph = document.createElement("p");
  categoryParagraph.classList.add("category");
  // Если eventData.distance равно 0 (например, для онлайн-событий), не показываем "(0 km)"
  categoryParagraph.textContent = `${eventData.category} ${
    eventData.distance > 0 ? `(${eventData.distance} km)` : ""
  }`;

  infoDiv.appendChild(dateListCardDiv);
  infoDiv.appendChild(title);
  infoDiv.appendChild(categoryParagraph);

  if (eventData.type === "online") {
    const onlineDiv = document.createElement("div");
    onlineDiv.classList.add("online-event-block");
    const onlineImg = document.createElement("img");
    onlineImg.src = "./assetc/svg/camera-online-event.svg";
    onlineImg.alt = "online-event-icon";
    onlineImg.classList.add("online-event-icon");
    const onlineSpan = document.createElement("span");
    onlineSpan.textContent = "Online Event";
    onlineSpan.classList.add("online-event-text");
    onlineDiv.appendChild(onlineImg);
    onlineDiv.appendChild(onlineSpan);
    infoDiv.appendChild(onlineDiv);
  }

  if (eventData.attendees || eventData.spotsLeft) {
    const attendeesInfoParagraph = document.createElement("p");
    attendeesInfoParagraph.classList.add("attendees-and-spots-info");

    let attendeesText = "";
    if (eventData.attendees) {
      attendeesText = `${eventData.attendees} attendees`;
    }

    if (eventData.spotsLeft) {
      const spotsLeftSpan = document.createElement("span");
      spotsLeftSpan.classList.add("spots-left");
      spotsLeftSpan.textContent = `${eventData.spotsLeft} spots left`;

      if (attendeesText) {
        attendeesInfoParagraph.appendChild(
          document.createTextNode(attendeesText + " ")
        );
      }
      attendeesInfoParagraph.appendChild(spotsLeftSpan);
    } else if (attendeesText) {
      attendeesInfoParagraph.textContent = attendeesText;
    }

    if (
      attendeesInfoParagraph.textContent.trim() !== "" ||
      attendeesInfoParagraph.querySelector(".spots-left")
    ) {
      infoDiv.appendChild(attendeesInfoParagraph);
    }
  }

  cardDiv.appendChild(image);
  cardDiv.appendChild(infoDiv);

  return cardDiv;
}

// --- Главная логика приложения, обернутая в DOMContentLoaded ---
document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Интерактив для кнопки "Browse in map" ---
  const browseMapBtn = document.querySelector(".browse-map-btn");
  if (browseMapBtn) {
    browseMapBtn.addEventListener("click", () => {
      // Используем "New York, NY" как пример, так как это указано в твоем HTML
      const location = "New York, NY";
      // Обрати внимание на правильный URL для Google Maps
      const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        location
      )}`;
      window.open(googleMapsUrl, "_blank");
    });
  }

  // --- 2. Интерактив для фильтрации событий ---

  // Получаем ссылки на элементы DOM для фильтров
  const typeDropdownButton = document.getElementById("type-dropdown-button");
  const typeDropdownContent = document.getElementById("type-dropdown-content");
  const distanceDropdownButton = document.getElementById(
    "distance-dropdown-button"
  );
  const distanceDropdownContent = document.getElementById(
    "distance-dropdown-content"
  );
  const categoryDropdownButton = document.getElementById(
    "category-dropdown-button"
  );
  const categoryDropdownContent = document.getElementById(
    "category-dropdown-content"
  );

  // Объект для хранения текущих выбранных фильтров
  let currentFilters = {
    type: "all",
    distance: "all",
    category: "all",
  };

  // Функция для динамического заполнения выпадающих списков
  function populateDropdowns() {
    // Типы событий
    const types = ["all", "online", "offline"];
    const typeNames = {
      all: "Any type",
      online: "Online Event",
      offline: "In-Person Event",
    };
    typeDropdownContent.innerHTML = ""; // Очищаем текущие элементы
    types.forEach((type) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "#";
      a.dataset.value = type;
      a.textContent = typeNames[type];
      li.appendChild(a);
      typeDropdownContent.appendChild(li);
    });

    // Дистанции (можно настроить по своим нуждам)
    const distances = ["all", "5", "10", "20", "50", "100"]; // Добавил 100 для твоего примера
    distanceDropdownContent.innerHTML = "";
    distances.forEach((distance) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "#";
      a.dataset.value = distance;
      a.textContent =
        distance === "all" ? "Any distance" : `Up to ${distance} km`;
      li.appendChild(a);
      distanceDropdownContent.appendChild(li);
    });

    // Категории (получаем уникальные из eventsStore)
    const categories = [
      "all",
      ...new Set(eventsStore.map((event) => event.category)),
    ];
    categoryDropdownContent.innerHTML = "";
    categories.forEach((category) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "#";
      a.dataset.value = category;
      a.textContent = category === "all" ? "Any category" : category;
      li.appendChild(a);
      categoryDropdownContent.appendChild(li);
    });
  }

  // Функция для рендеринга карточек событий (обновлена для фильтров)
  function renderFilteredEvents() {
    let eventsToRender = eventsStore; // Начинаем со всех событий

    // Фильтрация по типу
    if (currentFilters.type !== "all") {
      eventsToRender = eventsToRender.filter(
        (event) => event.type === currentFilters.type
      );
    }

    // Фильтрация по дистанции
    if (currentFilters.distance !== "all") {
      const maxDistance = parseInt(currentFilters.distance);
      // Для онлайн-событий, у которых distance может быть 0,
      // они будут отображаться, если фильтр "Any distance" или "Up to X km" больше 0.
      // Если фильтр 5, а у события 0, оно покажется. Если фильтр "5", а у события 10, не покажется.
      eventsToRender = eventsToRender.filter(
        (event) => event.distance <= maxDistance
      );
    }

    // Фильтрация по категории
    if (currentFilters.category !== "all") {
      eventsToRender = eventsToRender.filter(
        (event) => event.category === currentFilters.category
      );
    }

    eventsListContainer.innerHTML = ""; // Очищаем контейнер перед рендерингом

    // Ограничение на количество карточек на мобильных (ширина <= 679px)
    const isMobile = window.innerWidth <= 679;
    const finalEventsToRender = isMobile
      ? eventsToRender.slice(0, 3)
      : eventsToRender;

    if (finalEventsToRender.length === 0) {
      eventsListContainer.innerHTML =
        '<p style="text-align: center; padding: 20px; color: #555;">No events found matching your criteria.</p>';
      return;
    }

    finalEventsToRender.forEach((eventData) => {
      const card = createEventCard(eventData);
      eventsListContainer.appendChild(card);
    });
  }

  // Функция для переключения видимости выпадающего списка
  function toggleDropdown(dropdownContent, button) {
    // Закрываем все другие открытые выпадающие списки
    document
      .querySelectorAll(".dropdown-content.show")
      .forEach((openDropdown) => {
        if (openDropdown !== dropdownContent) {
          openDropdown.classList.remove("show");
          openDropdown.previousElementSibling
            .querySelector(".arrow-down")
            ?.classList.remove("rotated");
        }
      });

    dropdownContent.classList.toggle("show");
    button.querySelector(".arrow-down")?.classList.toggle("rotated");
  }

  // Обработчики кликов для кнопок выпадающих списков (открытие/закрытие)
  typeDropdownButton?.addEventListener("click", (event) => {
    event.stopPropagation(); // Предотвращаем закрытие при клике на кнопку
    toggleDropdown(typeDropdownContent, typeDropdownButton);
  });
  distanceDropdownButton?.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleDropdown(distanceDropdownContent, distanceDropdownButton);
  });
  categoryDropdownButton?.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleDropdown(categoryDropdownContent, categoryDropdownButton);
  });

  // Обработчики кликов для элементов выпадающих списков (выбор фильтра)
  [
    typeDropdownContent,
    distanceDropdownContent,
    categoryDropdownContent,
  ].forEach((dropdown) => {
    dropdown?.addEventListener("click", (event) => {
      const clickedLink = event.target.closest("a");
      if (clickedLink) {
        event.preventDefault(); // Предотвращаем переход по ссылке

        const filterType = dropdown.id.replace("-dropdown-content", ""); // type, distance, category
        const filterValue = clickedLink.dataset.value;
        const filterText = clickedLink.textContent;

        currentFilters[filterType] = filterValue; // Обновляем выбранный фильтр

        // Обновляем текст на кнопке
        const button = document.getElementById(`${filterType}-dropdown-button`);
        if (button) {
          // Ищем текстовый узел или span, чтобы обновить текст, сохраняя стрелку
          const textNode = Array.from(button.childNodes).find(
            (node) => node.nodeType === Node.TEXT_NODE
          );
          if (textNode) {
            textNode.nodeValue = filterText + " "; // Обновляем текстовый узел
          } else {
            // Если текст не в текстовом узле напрямую (например, обернут в span),
            // можно использовать другой подход, например, заменить первый childNode
            // или обернуть текст кнопки в <span>, чтобы он легко обновлялся.
            // Для простоты сейчас:
            button.innerHTML = `${filterText} <span class="arrow-down"></span>`;
          }
        }

        // Закрываем выпадающий список
        dropdown.classList.remove("show");
        button?.querySelector(".arrow-down")?.classList.remove("rotated");

        renderFilteredEvents(); // Применяем фильтры и обновляем отображение
      }
    });
  });

  // Закрываем выпадающие списки при клике вне их
  document.addEventListener("click", (event) => {
    if (
      typeDropdownButton &&
      !typeDropdownButton.contains(event.target) &&
      !typeDropdownContent.contains(event.target)
    ) {
      typeDropdownContent.classList.remove("show");
      typeDropdownButton
        .querySelector(".arrow-down")
        ?.classList.remove("rotated");
    }
    if (
      distanceDropdownButton &&
      !distanceDropdownButton.contains(event.target) &&
      !distanceDropdownContent.contains(event.target)
    ) {
      distanceDropdownContent.classList.remove("show");
      distanceDropdownButton
        .querySelector(".arrow-down")
        ?.classList.remove("rotated");
    }
    if (
      categoryDropdownButton &&
      !categoryDropdownButton.contains(event.target) &&
      !categoryDropdownContent.contains(event.target)
    ) {
      categoryDropdownContent.classList.remove("show");
      categoryDropdownButton
        .querySelector(".arrow-down")
        ?.classList.remove("rotated");
    }
  });

  // --- 3. Клик по главному логотипу для перехода на index.html ---
  const mainLogo = document.getElementById("main-logo"); // Используем ID
  if (mainLogo) {
    mainLogo.addEventListener("click", () => {
      window.location.href = "index.html"; // Переход на главную страницу
    });
  }

  // --- Инициализация: Рендерим события и заполняем дропдауны при загрузке страницы ---
  populateDropdowns(); // Сначала заполняем дропдауны
  renderFilteredEvents(); // Затем рендерим события

  // Добавляем слушатель события изменения размера окна для обновления рендеринга
  window.addEventListener("resize", renderFilteredEvents);
});
