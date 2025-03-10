
// Função para adicionar gatilhos à lista
document.getElementById('trigger-adicionar').addEventListener('click', function() {
    let input = document.getElementById('input-gatilho');
    if (!input.value) return;
    let triggerList = document.getElementById('trigger-list');
    let spanLabel = document.getElementById('default-span');
    if (spanLabel) spanLabel.remove();

    let newRow = document.createElement('tr');
    let newCell = document.createElement('td');
    newCell.textContent = input.value;
    newRow.appendChild(newCell);
    triggerList.appendChild(newRow);
    input.value = '';
});

// Validação antes de redirecionar para a próxima tela
document.getElementById('link-proximo').addEventListener('click', function(event) {
    const data = document.getElementById('d-day').value.trim();
    const triggerList = document.getElementById('trigger-list').getElementsByTagName('td');

    if (!data) {
        alert('Dia D não informado');
        event.preventDefault(); 
        return;
    }


    if (triggerList.length === 0) {
        alert('É necessário informar ao menos um gatilho');
        event.preventDefault(); 
        return;
    }
});