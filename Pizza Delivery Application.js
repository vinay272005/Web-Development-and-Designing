document.getElementById('pizzaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const base = document.getElementById('base').value;
    const sauce = document.getElementById('sauce').value;
    const cheese = document.getElementById('cheese').value;
    const veggiesOptions = document.getElementById('veggies').selectedOptions;
    const veggies = Array.from(veggiesOptions).map(option => option.value);

    const summary = `
      <h3>Your Custom Pizza:</h3>
      <p><strong>Base:</strong> ${base}</p>
      <p><strong>Sauce:</strong> ${sauce}</p>
      <p><strong>Cheese:</strong> ${cheese}</p>
      <p><strong>Veggies:</strong> ${veggies.join(', ')}</p>
    `;

    document.getElementById('summary').innerHTML = summary;
  });