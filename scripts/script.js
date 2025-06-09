/*
git add .
git commit -m "Сообщение"
git push
 */
// В файле: scripts/script.js

document.addEventListener("DOMContentLoaded", () => {
  const showMoreButton = document.querySelector(".show-more-button");
  const eventsGrid = document.querySelector(".events-grid");
  const eventsCards = eventsGrid
    ? eventsGrid.querySelectorAll(".events-cards")
    : [];
  const numInitialVisible = 3; // Количество карточек, которые должны быть видны изначально

  const applyMobileStyles = () => {
    if (window.matchMedia("(max-width: 393px)").matches) {
      if (eventsCards.length > numInitialVisible) {
        for (let i = numInitialVisible; i < eventsCards.length; i++) {
          eventsCards[i].style.display = "none";
        }
        showMoreButton.style.display = "block";
        // Измените эту строку:
        showMoreButton.textContent = "Show more";
        // На эту:
        showMoreButton.textContent =
          "See More"; /* Изменяем текст по умолчанию на "See More" */
        showMoreButton.dataset.state = "hidden";
      } else {
        showMoreButton.style.display = "none";
      }
      for (
        let i = 0;
        i < Math.min(numInitialVisible, eventsCards.length);
        i++
      ) {
        eventsCards[i].style.display = "flex";
      }
    } else {
      eventsCards.forEach((card) => {
        card.style.display = "";
      });
      showMoreButton.style.display = "none";
    }
  };

  applyMobileStyles();
  window.addEventListener("resize", applyMobileStyles);

  if (showMoreButton) {
    showMoreButton.addEventListener("click", (event) => {
      /* Добавляем event в параметры */
      event.preventDefault(); /* Добавляем это, чтобы ссылка не перезагружала страницу */
      if (showMoreButton.dataset.state === "hidden") {
        for (let i = numInitialVisible; i < eventsCards.length; i++) {
          eventsCards[i].style.display = "flex";
        }
        // Измените эту строку:
        showMoreButton.textContent =
          "Hidden"; /* Изменяем текст кнопки на "Hidden" */
        // На эту:
        showMoreButton.textContent = "Hidden";
        showMoreButton.dataset.state = "visible";
      } else {
        for (let i = numInitialVisible; i < eventsCards.length; i++) {
          eventsCards[i].style.display = "none";
        }
        // Измените эту строку:
        showMoreButton.textContent = "Show more";
        // На эту:
        showMoreButton.textContent =
          "See More"; /* Изменяем текст кнопки обратно на "See More" */
        showMoreButton.dataset.state = "hidden";
      }
    });
  }
});

const eventsStore = [
  {
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    description: "Being an INFJ",
    date: new Date(2024, 2, 23, 15),
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w ",
    type: "offline",
    attendees: 99,
    category: "Hobbies and Passions",
    distance: 50,
    isFree: true,
  },
  {
    title:
      "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
    description: "New York AI Users",
    date: new Date(2024, 2, 23, 11, 30),
    image:
      "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    type: "offline",
    attendees: 43,
    category: "Technology",
    distance: 25,
    isFree: true,
  },
  {
    title: "Book 40+ Appointments Per Month Using AI and Automation",
    description: "New Jersey Business Network",
    date: new Date(2024, 2, 16, 14),
    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    category: "Technology",
    distance: 10,
    isFree: true,
  },
  {
    title: "Dump writing group weekly meetup",
    description: "Dump writing group",
    date: new Date(2024, 2, 13, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 77,
    category: "Business",
    distance: 100,
    isFree: true,
  },
  {
    title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
    description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
    date: new Date(2024, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 140,
    category: "Social Activities",
    distance: 74,
    isFree: true,
  },
  {
    title: "All Nations - Manhattan Missions Church Bible Study",
    description: "Manhattan Bible Study Meetup Group",
    date: new Date(2024, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "offline",
    category: "Health and Wellbeing",
    distance: 15,
    isFree: true,
  },
];
