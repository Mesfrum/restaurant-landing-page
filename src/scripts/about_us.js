export function about_us_elememts(about_us_tab_contents,map_link) {
  about_us_tab_contents.textContent =''
  let structure = document.createElement("div");
  structure.classList.add("flexbox_about_us");
  structure.style.display = "flexbox";
  structure.style.flexFlow = "column wrap";

  let info = document.createElement("div");
  info.classList.add("info");
  info.textContent = `Contact us at`;
  
  let number = document.createElement("div");
  number.classList.add('number')
  number.textContent = '1234567893'+'\r\n~'

  let address = document.createElement("div");
  address.classList.add('address')
  address.textContent = 'Pushkarani, Krishnapura, Karnataka 583239';
  info.appendChild(number)
  info.appendChild(address)


  let map_container = document.createElement("div");
  map_container.classList.add("map");
  // let map_link = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d240.48255591252982!2d76.459992!3d15.3373958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb77f76dfa86db3%3A0xf7307c8c668626f7!2z4LKV4LOD4LK34LON4LKjIOCyuOCyguCypOCzhuCyrOCzgOCypuCyvyDgspXgs4rgsrM!5e0!3m2!1sen!2sin!4v1680008688310!5m2!1sen!2sin"
  let map = document.createElement("iframe");
  // map.defer = true;
  map.setAttribute('defer', 'defer')
  map.src = map_link;
  map.width = 350;
  map.height = 400;
  map.allowFullscreen = "";
  map.loading = "lazy";
  map.style.border = 0;
  map.referrerpolicy="no-referrer-when-downgrade" ;
  

  map_container.appendChild(map);
  structure.appendChild(info);
  structure.appendChild(map_container);

  about_us_tab_contents.appendChild(structure);
  return about_us_tab_contents;
}
