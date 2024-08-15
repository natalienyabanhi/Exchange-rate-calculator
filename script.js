const zarInput = document.getElementById("zar-input");
        const convertButton = document.getElementById("convert-button");
        const currencyTableBody = document.getElementById("currency-table-body");

        function populateTable() {
            const zarAmount = parseFloat(zarInput.value);
            const exchangeRates = {
                USD: 18.24,
                EUR: 19.89,
                GBP: 23.60,
                JPY: 0.12,
                AUD: 12.22,
                CAD: 13.31,
                CHF: 20.56,
                CNY: 2.51,
                INR: 0.22,
                BRL: 3.37,
            };

            // Clear the table body before populating
            currencyTableBody.innerHTML = "";

            for (const currency in exchangeRates) {
                if (exchangeRates.hasOwnProperty(currency)) {
                    const rate = exchangeRates[currency];
                    const convertedAmount = zarAmount * rate;

                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${currency}</td>
                        <td>${rate.toFixed(2)}</td>
                        <td>${convertedAmount.toFixed(2)}</td>
                    `;
                    currencyTableBody.appendChild(row);
                }
            }
        }

        convertButton.addEventListener("click", function(event) {
            event.preventDefault();
            populateTable();
        });
