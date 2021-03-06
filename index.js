
document.getElementById('email-collector').addEventListener('submit', event =>{
    event.preventDefault();

    let ourFormData = new FormData(event.target);   
    let userFirstName = ourFormData.get('firstName');
    let userEmailAddress = ourFormData.get('emailAddress');
    let updatedHtml = `
    <h2>Congratulations, ${userFirstName}!</h2>
    <p>You're on your way to becoming a BBQ Master!</p>
    <p class="fine-print">You will get weekly BBQ tips sent to: ${userEmailAddress}</p>
    <p class="fine-print">
    We'll never share your information without your permission</p>
    `;

    let updatedMainContent = document.getElementById('Main-Content');

    updatedMainContent.innerHTML = updatedHtml;
})