document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const result = document.getElementById('result');

    document.getElementById('subbtn').addEventListener('click', async () => {
        const name = input.value.trim();

        if (!name) return;

        result.textContent = 'Loading...';
        
        try {
            const response = await fetch(`https://api.nationalize.io/?name=${name}`);
            const data = await response.json();
            const country = data.country || [];
            

            result.innerHTML = country.length
                ? `<ul>${country.map(({ country_id, probability }) => {
                    const percent = (probability * 100).toFixed(2);
                    
                    
                    return `
                        <li>
                            <img src="https://flagcdn.com/w80/${country_id.toLowerCase()}.png" width="30" alt="${country_id} flag">
                            ${country_id}
                            <div class="line">
                                <div class="lin" style="width: ${percent}%;"></div>
                            </div>
                            (${percent}%)
                        </li>
                        <hr>
                    `;
                }).join('')}</ul>`

                : 'Natija topilmadi';

        } catch (error) {
            console.log(error)
            result.textContent = 'Error' + error.message;
        }
    });
});

























































































































































































































