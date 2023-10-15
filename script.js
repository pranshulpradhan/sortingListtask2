let ascending = true;

// Function to generate a random list
function generateRandomList() {
    const list = document.getElementById('sortable-list');
    list.innerHTML = ''; 
    const elements = [];

    for (let i = 0; i < 10; i++) {
        const listItem = document.createElement('li');
        listItem.innerText = Math.floor(Math.random() * 100); 
        list.appendChild(listItem);
        elements.push(listItem);
    }

    return elements;
}

// Function to sort the list
function sortList(ascending) {
    return function() {
        const list = document.getElementById('sortable-list');
        const elements = Array.from(list.children);

        elements.sort((a, b) => {
            const valueA = parseFloat(a.innerText);
            const valueB = parseFloat(b.innerText);

            if (ascending) {
                return valueA - valueB;
            } else {
                return valueB - valueA;
            }
        });

        list.innerHTML = ''; 
        elements.forEach(element => {
            list.appendChild(element);
        });
    };
}

// Function to toggle between ascending and descending
function toggleSort() {
    ascending = !ascending;
    sortList(ascending)();
}

// Function to clear the sort
function clearSort() {
    generateRandomList();
}

// Generate the initial random list
generateRandomList();

// Add event listeners to the buttons
const sortAscendingButton = document.getElementById('sort-ascending-button');
sortAscendingButton.addEventListener('click', sortList(true));

const sortDescendingButton = document.getElementById('sort-descending-button');
sortDescendingButton.addEventListener('click', sortList(false));

const clearSortButton = document.getElementById('clear-sort-button');
clearSortButton.addEventListener('click', clearSort);
