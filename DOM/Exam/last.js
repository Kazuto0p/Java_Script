function createList(items) {
    const ul = document.createElement("ul");
    items.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
    document.body.appendChild(ul);
  }
  createList(["Apple", "Banana", "Cherry"]);
  