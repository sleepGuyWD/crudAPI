let name = document.querySelector('#name')
let choice = document.querySelector('#input').value.toLowerCase()

document.querySelector('#submitButton').addEventListener('click', getWiz())


async function getWiz() {
  try {
    const response = await fetch(`https://crudapi-production.up.railway.app/api/${choice}`);
    const data = await response.json();
    console.log(data);
    
  } catch (error) {
    console.error(error);
  }
}

