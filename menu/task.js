subMenus = document.querySelectorAll('.menu_sub')

// for (let i = 0; i < subMenus.length; i++) {
//         item = subMenus[i].previousElementSibling;
//         console.log(item);
//         console.log(subMenus[i]);
//         item.addEventListener('click', function() {
//             subMenus[i].className == 'menu menu_sub' ? subMenus[i].className = 'menu menu_sub menu_active' : subMenus[i].className = 'menu menu_sub';
//             return false;
//           });
// } Не понимаю, в чём ошибка, вроде бы синтаксис не нарушал: меню раскрывается, но страница перезагружается - return false не работает.

for (let i = 0; i < subMenus.length; i++) {
  item = subMenus[i].previousElementSibling;
  item.onclick = () => {
      subMenus[i].className == 'menu menu_sub' ? subMenus[i].className = 'menu menu_sub menu_active' : subMenus[i].className = 'menu menu_sub';
      return false;
}};