
const animais = [
    {
        nome: "Leão",
        especie: "Mamífero",
        habitat: "Savana",
        alimentacao: "Carnívoro"
    },
    {
        nome: "Elefante",
        especie: "Mamífero",
        habitat: "Florestas",
        alimentacao: "Herbívoro"
    },
    {
        nome: "Tubarão",
        especie: "Peixe",
        habitat: "Oceano",
        alimentacao: "Carnívoro"
    },
    {
        nome: "Arara",
        especie: "Ave",
        habitat: "Florestas tropicais",
        alimentacao: "Onívoro"
    }
];

const corpoTabela = document.getElementById("corpoTabela");

for (let animal of animais) {
    const linha = document.createElement("tr");

    linha.innerHTML = `
        <td>${animal.nome}</td>
        <td>${animal.especie}</td>
        <td>${animal.habitat}</td>
        <td>${animal.alimentacao}</td>
    `;

    corpoTabela.appendChild(linha);
}
