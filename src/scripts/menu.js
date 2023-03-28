export function menu_elememts(menu_tab_contents) {
  menu_tab_contents.textContent = "";

  let food_items = [
    [
      "Idli",
      100,
      "A soft rice based delicay cooked in steam popular in the souhern states of India, served with side of rich coconut chutney and a lentil based sambhar.",
    ],
    [
      "Vada",
      100,
      "A donut shaped riced based delicay, fried to crisp and served with the sides of coconut chutney and sambhar. A popular snack throughout the indian subcontinent.",
    ],
    [
      "Dosa",
      100,
      "A riced based flat and crip bread, pan fried and served with the same sides of cocnut chutney and sambhar.",
    ],
    [
      "Veg Thali",
      100,
      "A platter consisting of all the vegetarian items popular from south india. Tamrind rice, Lemon rice,Biryani, White rice, Dal, vegetable curries, raaita, papad and desert.",
    ],
    [
      "Non-veg Thali",
      100,
      "A platter consisting of all the non-vegetarian items popular in souther india, Includes Chicken Biryani, Andhra fried chicken, chicken, curry, fried fish, fish curry, white rice and desert.",
    ],
  ];


  let food_structure = document.createElement("div");
  food_structure.classList.add("flexbox");
  food_structure.style.display = "flexbox";
  food_structure.style.flexFlow = "column wrap";

  let i = -1;
  food_items.forEach((food) => {
    i++;
    let flex_item = document.createElement("div");
    flex_item.classList.add(`flex-${i}`);

    let flex_food_name = document.createElement("div");
    flex_food_name.classList.add(`food-name`);
    flex_food_name.textContent = `${food[0]}`;

    let flex_food_description = document.createElement("div");
    flex_food_description.classList.add(`food-description`);
    flex_food_description.textContent = `${food[2]}`+ '\r\n~'

    flex_item.appendChild(flex_food_name);
    flex_item.appendChild(flex_food_description);
    food_structure.appendChild(flex_item);
  });

  menu_tab_contents.appendChild(food_structure);
  return menu_tab_contents;
}

