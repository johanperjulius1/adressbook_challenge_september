document.addEventListener('DOMContentLoaded', ()=> {
  renderContacts()
  const contactForm = document.getElementById('new-contact-form')
  const toggleFormVisibilityButton = document.getElementById('add-contact')
  contactForm.style.display = 'none'

  toggleFormVisibilityButton.addEventListener('click', () =>{
    if (contactForm.style.display ==='') {
      contactForm.style.display = 'none'
    } else {
      contactForm.style.display = ''
    }
  })
  contactForm.addEventListener('submit', event => {
    event.preventDefault()
    const { name, email, phone, company } = contactForm.elements
  })
})




document.addEventListener('DOMContentLoaded', () => {
	renderContacts()
	const  contactForm = document.getElementById('new-contact-form')
	const  toggleFormVisibilityButton = document.getElementById('add-contact')
	contactForm.style.display = 'none'
 
	toggleFormVisibilityButton.addEventListener('click', () => {
		if (contactForm.style.display === '') {
			contactForm.style.display = 'none'
		} else {
			contactForm.style.display = ''
		}
	})
	
	contactForm.addEventListener('submit', event  => {
		event.preventDefault()
		
		const { name, email, phone, company, notes, twitter } = contactForm.elements