// Твой массив данных о событиях (уточнения для Online Event у первого события)
const eventsStore = [
  {
    title: "INFJ Personality Type - Coffee Shop Meet & Breet",
    description: "Being an INFJ",
    date: new Date(2024, 2, 23, 15),
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w ",
    type: "online", // Оставляем offline, если ты хочешь, чтобы у него НЕ было "Online Event"
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
    type: "online", // Это событие онлайн
    attendees: 43,
    spotsLeft: 2, // Это событие онлайн
    category: "Technology",
    distance: 10,
  },
  {
    title: "Dump writing group weekly meetup",
    description: "Dump writing group",
    date: new Date(2024, 2, 13, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online", // Это событие онлайн
    category: "Business",
    distance: 100,
  },
  {
    title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
    description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
    date: new Date(2024, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online", // Это событие онлайн
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
  categoryParagraph.textContent = `${eventData.category} (${eventData.distance} km)`;

  // --- НАЧАЛО ИЗМЕНЕНИЙ В JS ---

  // Порядок добавления элементов в infoDiv:
  infoDiv.appendChild(dateListCardDiv); // Дата
  infoDiv.appendChild(title); // Заголовок
  infoDiv.appendChild(categoryParagraph); // Категория

  // Создаем блок для "Online Event"
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
    // Добавляем Online Event СРАЗУ ПОСЛЕ категории
    infoDiv.appendChild(onlineDiv);
  }

  // Создаем блок для "attendees / spots left"
  // Добавляем его всегда, если есть данные, а видимость регулируем CSS
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

    // Добавляем параграф только если в нем есть контент
    if (
      attendeesInfoParagraph.textContent.trim() !== "" ||
      attendeesInfoParagraph.querySelector(".spots-left")
    ) {
      // Добавляем Attendees/Spots Left после Online Event (если есть) или после категории
      infoDiv.appendChild(attendeesInfoParagraph);
    }
  }
  // --- КОНЕЦ ИЗМЕНЕНИЙ В JS ---

  cardDiv.appendChild(image);
  cardDiv.appendChild(infoDiv);

  return cardDiv;
}

// Ограничение на количество карточек на мобильных
function renderEvents() {
  eventsListContainer.innerHTML = ""; // Очищаем контейнер перед рендерингом
  const isMobile = window.innerWidth <= 679;
  const eventsToRender = isMobile ? eventsStore.slice(0, 3) : eventsStore; // Ограничиваем до 3 на мобильных

  eventsToRender.forEach((eventData) => {
    const card = createEventCard(eventData);
    eventsListContainer.appendChild(card);
  });
}

// Вызываем рендеринг при загрузке страницы
renderEvents();

// Добавляем слушатель события изменения размера окна для обновления рендеринга
window.addEventListener("resize", renderEvents);
