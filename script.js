// console.log(divContainer)
const products = [
  {
    title: "laptop",
    Description: "color black",
    Image:
      "https://media.istockphoto.com/id/1394988455/photo/laptop-with-a-blank-screen-on-a-white-background.jpg?s=1024x1024&w=is&k=20&c=1JQYD-7e9EfVR4LCekw-NvYxyX23U81k-TRFJ70SXqY=",
    Price: 3500,
    Quantity: 1,
  },
  {
    title: "telephone",
    Description: "this is phone",
    Image:
      "https://media.istockphoto.com/id/1816109072/photo/iphone-15-and-15-pro-and-15-pro-max-white-blank-3d-rendering-mockup.jpg?s=612x612&w=0&k=20&c=3YJqLf5wZ3IB86dDoZxV5UMizdhH2NrVeTCywtKUzFM=",
    Price: 1500,
    Quantity: 1,
  },
];

const divContainer = document.getElementById("container");

products.map((product) => {
  const div = document.createElement("div");
  div.classList.add("div1");
  const title = document.createElement("h2");
  title.textContent = product.title;

  const Image = document.createElement("img");
  Image.src = product.Image;
  Image.classList.add("images");

  div.appendChild(Image);
  div.appendChild(title);
  divContainer.appendChild(div);

  const Description = document.createElement("p");
  Description.textContent = product.Description;
  Description.classList.add("prg");

  div.appendChild(Description);

  const Price = document.createElement("p");
  Price.textContent = product.Price;
  Price.classList.add("prg");

  div.appendChild(Price);

  const divBotton = document.createElement("div");
  const decrement = document.createElement("button");
  decrement.textContent = "-";
  const Quantity = document.createElement("p");
  Quantity.textContent = product.Quantity;
  Quantity.classList.add("prg");
  const increment = document.createElement("button");
  increment.textContent = "+";

  divBotton.appendChild(decrement);
  divBotton.appendChild(Quantity);
  divBotton.appendChild(increment);
  div.appendChild(divBotton);
});
function getTotal(products) {
  let totalItems = 0;
  products.forEach((product) => {
    totalItems += product.Price * product.Quantity;
  });
  const total = document.getElementById("total");
  total.textContent = totalItems;
}
getTotal(products);
