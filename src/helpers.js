function choice(items){
    const randomIndex = Math.floor(Math.random() * items.length);
    const item = items[randomIndex];
    return item;
};

function remove(items, item){
    for(let i of items) {
        if(i === item) {
            const index = items.indexOf(item);
            items.splice(index, 1);
        };
    };
    return items;
};

export { choice, remove };