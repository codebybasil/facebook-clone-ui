let moreBtn = document.getElementById("seeMoreBtn");

let lessBtn = document.getElementById("seeLessBtn");

// Items to be hidden/shown
let hiddenItems = document.getElementById("moreMenuItems");

// See More click
moreBtn.onclick = function() {
    hiddenItems.style.display = "block";   // Show items
    moreBtn.style.display = "none";        // Hide See More.
    lessBtn.style.display = "block";       // Show See Less.
}

// See Less click
lessBtn.onclick = function() {
    hiddenItems.style.display = "none";    // Hide items.
    moreBtn.style.display = "block";       // Show See More.
    lessBtn.style.display = "none";        // Hide See Less.

}