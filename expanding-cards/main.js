// Get all panels
const panels = document.querySelectorAll('.panel')

// Add listeners to panels
panels.forEach(panel => {
   panel.addEventListener('click', (event) => {
      remove_active_panels()
      panel.classList.add('active')
   })
});

// Remove active class from panels
let remove_active_panels = function(){
   panels.forEach(panel => {
      panel.classList.remove('active')
   });
}