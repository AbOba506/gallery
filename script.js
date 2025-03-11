document.addEventListener("DOMContentLoaded", () => {
    const filterContainer = document.querySelector(".gallery-filter");
    const galleryItems = document.querySelectorAll(".gallery-item");

    filterContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("filter-item")) {
            // Удаляем класс "active" у предыдущего активного элемента
            filterContainer.querySelector(".active").classList.remove("active");

            // Добавляем "active" к новому выбранному фильтру
            event.target.classList.add("active");

            const filterValue = event.target.getAttribute("data-filter");

            // Перебираем все элементы галереи
            galleryItems.forEach((item) => {
                if (filterValue === "all" || item.classList.contains(filterValue)) {
                item.classList.remove("hide");
                  item.classList.add("show"); // Показываем элементы соответствующего фильтра
                } else {
                    item.classList.remove("show");
                  item.classList.add("hide"); // Скрываем остальные
                }
            });
        }
    });
}); 