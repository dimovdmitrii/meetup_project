const eventsStore = [
  {
    title: "INFJ Personality Type - Coffee Shop Meet & Breet",
    description: "Being an INFJ",
    date: new Date(2024, 2, 23, 15),
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w ",
    type: "online",
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
      "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVnfDB8fHx8fA%3D%3D",
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

document.addEventListener("DOMContentLoaded", () => {
  const friendshipCards = document.querySelectorAll(".friendships-cards");
  friendshipCards.forEach((card) => {
    card.addEventListener("click", () => {
      const link = card.querySelector("a");
      if (link) {
        window.location.href = link.href;
      }
    });
  });

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

  let currentFilters = {
    type: "all",
    distance: "all",
    category: "all",
  };

  function populateDropdowns() {
    const types = ["all", "online", "offline"];
    const typeNames = {
      all: "Any type",
      online: "Online Event",
      offline: "In-Person Event",
    };
    if (typeDropdownContent) {
      typeDropdownContent.innerHTML = "";
      types.forEach((type) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#";
        a.dataset.value = type;
        a.textContent = typeNames[type];
        li.appendChild(a);
        typeDropdownContent.appendChild(li);
      });
    }

    const distances = ["all", "5", "10", "20", "50", "100"];
    if (distanceDropdownContent) {
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
    }

    const categories = [
      "all",
      ...new Set(eventsStore.map((event) => event.category)),
    ];
    if (categoryDropdownContent) {
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
  }

  function renderFilteredEvents() {
    let eventsToRender = eventsStore;

    if (currentFilters.type !== "all") {
      eventsToRender = eventsToRender.filter(
        (event) => event.type === currentFilters.type
      );
    }

    if (currentFilters.distance !== "all") {
      const maxDistance = parseInt(currentFilters.distance);
      eventsToRender = eventsToRender.filter(
        (event) => event.distance <= maxDistance
      );
    }

    if (currentFilters.category !== "all") {
      eventsToRender = eventsToRender.filter(
        (event) => event.category === currentFilters.category
      );
    }

    if (eventsListContainer) {
      eventsListContainer.innerHTML = "";
    } else {
      console.warn(
        "Container with ID 'events-list-container' not found for filtered events. Please check your HTML."
      );
      return;
    }

    if (eventsToRender.length === 0) {
      eventsListContainer.innerHTML =
        '<p style="text-align: center; padding: 20px; color: #555;">No events found matching your criteria.</p>';
      const showMoreButton = document.getElementById("show-more-events-list");
      if (showMoreButton) {
        showMoreButton.style.display = "none";
      }
      return;
    }

    eventsToRender.forEach((eventData) => {
      const card = createEventCard(eventData);
      eventsListContainer.appendChild(card);
    });

    setupEventsListShowMoreHide();
  }

  function toggleDropdown(dropdownContent, button) {
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

  typeDropdownButton?.addEventListener("click", (event) => {
    event.stopPropagation();
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

  [
    typeDropdownContent,
    distanceDropdownContent,
    categoryDropdownContent,
  ].forEach((dropdown) => {
    dropdown?.addEventListener("click", (event) => {
      const clickedLink = event.target.closest("a");
      if (clickedLink) {
        event.preventDefault();

        const filterType = dropdown.id.replace("-dropdown-content", "");
        const filterValue = clickedLink.dataset.value;
        const filterText = clickedLink.textContent;

        currentFilters[filterType] = filterValue;

        const button = document.getElementById(`${filterType}-dropdown-button`);
        if (button) {
          const textNode = Array.from(button.childNodes).find(
            (node) => node.nodeType === Node.TEXT_NODE
          );
          if (textNode) {
            textNode.nodeValue = filterText + " ";
          } else {
            button.innerHTML = `${filterText} <span class="arrow-down"></span>`;
          }
        }

        dropdown.classList.remove("show");
        button?.querySelector(".arrow-down")?.classList.remove("rotated");

        renderFilteredEvents();
      }
    });
  });

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

  const mainLogo = document.getElementById("main-logo");
  if (mainLogo) {
    mainLogo.addEventListener("click", () => {
      if (
        window.location.pathname.endsWith("/index.html") ||
        window.location.pathname.endsWith("/")
      ) {
        return;
      }
      window.location.href = "index.html";
    });
  }

  function setupEventsListShowMoreHide() {
    const container = document.getElementById("events-list-container");
    const button = document.getElementById("show-more-events-list");
    const initialDisplayCount = 3;

    if (!container || !button) {
      console.warn(
        "[setupEventsListShowMoreHide] Контейнер #events-list-container или кнопка #show-more-events-list не найдены."
      );
      return;
    }

    const cards = Array.from(container.querySelectorAll(".events-list-card"));
    let showingAll = false;

    function applyVisibility() {
      const isMobile = window.innerWidth <= 425;

      if (cards.length <= initialDisplayCount) {
        button.style.display = "none";
        cards.forEach((card) => {
          card.style.display = "";
        });
        return;
      }

      if (!isMobile) {
        cards.forEach((card) => {
          card.style.display = "";
        });
        button.style.display = "none";
        showingAll = true;
        return;
      }

      button.style.display = "";

      if (showingAll) {
        button.textContent = "Hide";
        cards.forEach((card) => {
          card.style.display = "";
        });
      } else {
        button.textContent = "Show More";
        cards.forEach((card, index) => {
          if (index >= initialDisplayCount) {
            card.style.display = "none";
          } else {
            card.style.display = "";
          }
        });
      }
    }

    button.addEventListener("click", (event) => {
      event.preventDefault();
      showingAll = !showingAll;
      applyVisibility();
    });

    applyVisibility();
  }

  function setupGridShowMoreHide(containerId, buttonId, initialDisplayCount) {
    const container = document.getElementById(containerId);
    const button = document.getElementById(buttonId);

    if (!container || !button) {
      return;
    }

    const cards = Array.from(container.querySelectorAll(".events-cards"));
    let showingAll = false;

    function applyVisibility() {
      const isSmallScreen = window.innerWidth <= 425;

      if (cards.length <= initialDisplayCount) {
        button.style.display = "none";
        cards.forEach((card) => {
          card.style.display = "";
        });
        return;
      }

      if (!isSmallScreen) {
        cards.forEach((card) => {
          card.style.display = "";
        });
        button.style.display = "none";
        showingAll = true;
        return;
      }

      button.style.display = "";

      if (showingAll) {
        button.textContent = "Hide";
        cards.forEach((card) => {
          card.style.display = "";
        });
      } else {
        button.textContent = "Show More";
        cards.forEach((card, index) => {
          if (index >= initialDisplayCount) {
            card.style.display = "none";
          } else {
            card.style.display = "";
          }
        });
      }
    }

    button.addEventListener("click", (event) => {
      event.preventDefault();
      showingAll = !showingAll;
      applyVisibility();
    });

    setTimeout(applyVisibility, 0);
  }

  // Новая логика для карты
  const interactiveMapContainer = document.getElementById(
    "interactive-map-container"
  );
  const mapThumbnail = document.getElementById("map-thumbnail");
  const leafletMapDiv = document.getElementById("leaflet-map");
  const browseMapButton = document.getElementById("browse-map-btn");
  const closeMapButton = document.getElementById("close-map-btn");

  let mapInstance = null;

  if (browseMapButton && mapThumbnail && leafletMapDiv && closeMapButton) {
    browseMapButton.addEventListener("click", (event) => {
      event.preventDefault();

      mapThumbnail.style.display = "none";
      browseMapButton.style.display = "none";

      leafletMapDiv.style.display = "block";
      closeMapButton.style.display = "flex";

      if (!mapInstance) {
        const newYorkLat = 40.7128;
        const newYorkLng = -74.006;
        const zoomLevel = 13;

        mapInstance = L.map("leaflet-map").setView(
          [newYorkLat, newYorkLng],
          zoomLevel
        );

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(mapInstance);

        L.marker([newYorkLat, newYorkLng])
          .addTo(mapInstance)
          .bindPopup("New York, NY")
          .openPopup();
      }

      mapInstance.invalidateSize();
    });

    closeMapButton.addEventListener("click", (event) => {
      event.preventDefault();

      leafletMapDiv.style.display = "none";
      closeMapButton.style.display = "none";

      mapThumbnail.style.display = "block";
      browseMapButton.style.display = "flex";
    });
  }

  populateDropdowns();
  renderFilteredEvents();

  setupGridShowMoreHide("events-near-grid-container", "show-more-near", 3);
  setupGridShowMoreHide(
    "upcoming-events-grid-container",
    "show-more-upcoming",
    3
  );

  window.addEventListener("resize", () => {
    if (document.getElementById("events-list-container")) {
      renderFilteredEvents();
    }
    setupGridShowMoreHide("events-near-grid-container", "show-more-near", 3);
    setupGridShowMoreHide(
      "upcoming-events-grid-container",
      "show-more-upcoming",
      3
    );
  });
});
