onReady(() => {
    const element = document.querySelector("[data-toggle=sidebar]")
    const sidebar = document.querySelector("aside.sidebar")
    const body = document.body
    const cls = "sidebar-uncollapsed"
    
    // Initialize sidebar state from localStorage
    if (sidebar && localStorage["sidebarVisible"]) {
        sidebar.classList.add(cls)
        body.classList.add("sidebar-overlay")
    }
    
    if (sidebar && element) {
        element.addEventListener("click", () => {
            sidebar.classList.toggle(cls)
            body.classList.toggle("sidebar-overlay")
            localStorage["sidebarVisible"] = sidebar.classList.contains(cls)
                ? "1"
                : ""
        })
    }
    
    // Close sidebar on window resize to desktop width
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768 && sidebar.classList.contains(cls)) {
            sidebar.classList.remove(cls)
            body.classList.remove("sidebar-overlay")
            localStorage["sidebarVisible"] = ""
        }
    })
    
    // Close sidebar when clicking on the overlay
    document.addEventListener("click", (e) => {
        if (sidebar.classList.contains(cls) &&
            !sidebar.contains(e.target) &&
            !element.contains(e.target)) {
            sidebar.classList.remove(cls)
            body.classList.remove("sidebar-overlay")
            localStorage["sidebarVisible"] = ""
        }
    })
})
