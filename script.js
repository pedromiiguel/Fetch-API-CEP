const inputCep = document.querySelector('[name=cep]')



inputCep.addEventListener('blur', (e) => {

        const inputValue = inputCep.value.replace("-", "")

        const options = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        }
        fetch(`https://viacep.com.br/ws/${inputValue}/json/`, options)
            .then(response => {
                response.json()
                    .then(data => showData(data))
            })

})

function showData(data) {
    for (const campo in data) {
        if (document.querySelector("[name=" + campo + "]")) {
            document.querySelector("[name=" + campo + "]").value = data[campo]
        }
    }
}

