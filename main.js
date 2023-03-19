let name = document.querySelector('#name')

document.querySelector('#submitButton').addEventListener('click', getWiz)


async function getWiz() {
  const wiz = document.querySelector('#input').value.toLowerCase()
  try {
    const response = await fetch(`https://crudapi-production.up.railway.app/api/${wiz}`);
    const data = await response.json();
    console.log(data);
    
  } catch (error) {
    console.error(error);
  }
}

