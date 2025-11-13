document.addEventListener("DOMContentLoaded", function() {

    // ===== 1. Project Filtering =====
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectItems = document.querySelectorAll(".project-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove 'active' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            // Add 'active' class to the clicked button
            button.classList.add("active");

            const filter = button.dataset.filter;

            projectItems.forEach(item => {
                if (filter === "all") {
                    item.style.display = "flex"; // Show all items
                } else if (item.dataset.category.includes(filter)) {
                    item.style.display = "flex"; // Show items that match filter
                } else {
                    item.style.display = "none"; // Hide items that don't match
                }
            });
        });
    });

    // ===== 2. Project Modal (Popup) =====
    const modal = document.getElementById("project-modal");
    const modalButtons = document.querySelectorAll(".modal-btn");
    const modalClose = document.querySelector(".modal-close");
    const modalBody = document.getElementById("modal-body");

    modalButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modalId = button.dataset.modalId; // e.g., "modal-1"
            const modalContent = document.getElementById(modalId + "-content").innerHTML;
            
            modalBody.innerHTML = modalContent;
            modal.style.display = "flex"; // Show the modal
        });
    });

    // Close the modal when the 'x' is clicked
    modalClose.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close the modal when clicking outside the content area
    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

});