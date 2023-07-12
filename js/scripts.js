// // Функция для добавления/удаления класса 'is-active'
// function toggleClassAndText(elements, className, activeText, inactiveText) {
//   elements.forEach(element => {
//     let spanElement = element.querySelector('span');
//     if (element.classList.contains(className)) {
//       element.classList.remove(className);
//       if (spanElement) {
//         spanElement.textContent = inactiveText;
//       }
//     } else {
//       element.classList.add(className);
//       if (spanElement) {
//         spanElement.textContent = activeText;
//       }
//     }
//   });
// }

// // Функция для удаления класса 'is-active'
// function removeClass(elements, className) {
//   elements.forEach(element => element.classList.remove(className));
// }

// // Функция для добавления класса 'is-active'
// function addClass(element, className) {
//   element.classList.add(className);
// }

// // Находим все кнопки 'tabs-btn'
// let tabsBtn = document.querySelectorAll('.tabs-btn');

// // Находим все элементы с дата-атрибутом 'data-block'
// let dataBlocks = document.querySelectorAll('[data-block]');

// // Находим все родительские элементы 'cust-details-tab__item'
// let items = document.querySelectorAll('.cust-details-tab__item');


// // Отменяем действие по умолчанию для всех кнопок
// tabsBtn.forEach(button => {
//   button.addEventListener('click', event => {
//     event.preventDefault();
//   });
// });

// window.addEventListener('resize', handleWindowSizeChange);
// handleWindowSizeChange();  // вызываем функцию сразу при загрузке страницы

// function handleWindowSizeChange() {
//   let width = document.documentElement.clientWidth;

//   if (width <= 767) {
//     tabsBtn.forEach(btn => {
//       btn.addEventListener('click', (event) => {
//         event.preventDefault();  // Отмена действия по умолчанию
//         toggleClassAndText([btn], 'is-active', 'Активно', 'Неактивно');
//       });
//     });
//   } else if (width > 767) {
//     // Находим первую кнопку и делаем ее активной
//     let firstTabBtn = document.querySelector('.tabs-btn');
//     if (firstTabBtn) {
//       firstTabBtn.classList.add('is-active');
//       let spanElement = firstTabBtn.querySelector('span');
//       if (spanElement) {
//         spanElement.textContent = 'Активно';
//       }
//     }

//     // Находим первый блок и делаем его активным
//     let firstDataBlock = document.querySelector('[data-block]');
//     if (firstDataBlock) {
//       firstDataBlock.classList.add('is-active');
//     }

//     // Находим первый родительский элемент и делаем его активным
//     let firstItem = document.querySelector('.cust-details-tab__item');
//     if (firstItem) {
//       firstItem.classList.add('is-active');
//     }

//     tabsBtn.forEach(btn => {
//       btn.addEventListener('click', (event) => {
//         event.preventDefault();  // Отмена действия по умолчанию
//         let dataActionValue = btn.getAttribute('data-action');

//         // Удаляем активные классы
//         removeClass(tabsBtn, 'is-active');
//         removeClass(dataBlocks, 'is-active');
//         removeClass(items, 'is-active');

//         // Меняем текст кнопки обратно на "Неактивно"
//         tabsBtn.forEach(button => {
//           let spanElement = button.querySelector('span');
//           if (spanElement) {
//             spanElement.textContent = 'Подробно';
//           }
//         });

//         // Добавляем активный класс и меняем текст кнопки
//         addClass(btn, 'is-active');
//         let spanElement = btn.querySelector('span');
//         if (spanElement) {
//           spanElement.textContent = 'Кратко';
//         }

//         let matchedDataBlock = Array.from(dataBlocks).find(block => block.getAttribute('data-block') === dataActionValue);
//         if (matchedDataBlock) {
//           addClass(matchedDataBlock, 'is-active');
//         }

//         let parentItem = btn.closest('.cust-details-tab__item');
//         if (parentItem) {
//           addClass(parentItem, 'is-active');
//         }
//       });
//     });
//   }
// }




// Находим все элементы с классом .tabs-btn
let buttons = document.querySelectorAll('.tabs-btn');

if (document.documentElement.clientWidth < '768') {
  console.log('Small');
  // Для каждой кнопки устанавливаем обработчик события 'click'
  buttons.forEach(button => {
    button.addEventListener('click', function (event) {
      // Отменяем действие по умолчанию
      event.preventDefault();

      // Если кнопка уже активна
      if (button.classList.contains('is-active')) {
        // Убираем класс активности
        button.classList.remove('is-active');

        // Меняем текст кнопки
        button.textContent = 'Подробно';
      } else {
        // Если кнопка не активна, делаем её активной
        button.classList.add('is-active');

        // Меняем текст кнопки
        button.textContent = 'Кратко';
      }
    });
  });

  var sliders = [
    'js-mob-slider-1 .swiper',
    'js-mob-slider-2 .swiper',
    'js-mob-slider-3 .swiper'
  ];

  for (var i = 0; i < sliders.length; i++) {
    new Swiper('.' + sliders[i], {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: '.' + sliders[i].split(' ')[0] + ' .swiper-button-next',
        prevEl: '.' + sliders[i].split(' ')[0] + ' .swiper-button-prev',
      },
    });
  }
} else {
  console.log('BIG');
  // Для каждой кнопки устанавливаем обработчик события 'click'
  buttons.forEach(button => {
    button.addEventListener('click', function (event) {
      // Отменяем действие по умолчанию
      event.preventDefault();

      // Берем значение атрибута data-action
      let action = button.getAttribute('data-action');

      // Ищем соответствующий элемент на странице
      let element = document.getElementById(action);

      // Находим родительский элемент с классом .custom-tabs__item
      let parent = button.closest('.custom-tabs__item');

      // Если кнопка уже активна
      if (button.classList.contains('is-active')) {
        // Убираем класс активности у кнопки и родителя, скрываем связанный элемент
        button.classList.remove('is-active');
        parent.classList.remove('is-active');
        button.textContent = 'Подробно';

        if (element) {
          element.style.display = 'none';
        }
      } else {
        // Сначала удаляем класс активности у всех кнопок и их родителей
        buttons.forEach(otherButton => {
          otherButton.classList.remove('is-active');
          let otherParent = otherButton.closest('.custom-tabs__item');
          if (otherParent) {
            otherParent.classList.remove('is-active');
          }

          otherButton.textContent = 'Подробно';

          let otherAction = otherButton.getAttribute('data-action');
          let otherElement = document.getElementById(otherAction);
          if (otherElement) {
            otherElement.style.display = 'none';
          }
        });

        // Делаем текущую кнопку и её родителя активными, показываем связанный элемент
        button.classList.add('is-active');
        parent.classList.add('is-active');
        button.textContent = 'Кратко';

        if (element) {
          element.style.display = 'block';
        }
      }
    });
  });

  // На странице загрузки делаем первый элемент активным
  window.addEventListener('load', function () {
    if (buttons.length > 0) {
      let firstButton = buttons[0];
      let firstParent = firstButton.closest('.custom-tabs__item');
      firstButton.classList.add('is-active');
      firstParent.classList.add('is-active');
      firstButton.textContent = 'Кратко';

      let firstAction = firstButton.getAttribute('data-action');
      let firstElement = document.getElementById(firstAction);
      if (firstElement) {
        firstElement.style.display = 'block';
      }
    }
  });

  // На странице загрузки делаем первый элемент активным
  window.addEventListener('load', function () {
    if (buttons.length > 0) {
      let firstButton = buttons[0];
      firstButton.classList.add('is-active');
      firstButton.textContent = 'Кратко';

      let firstAction = firstButton.getAttribute('data-action');
      let firstElement = document.getElementById(firstAction);
      if (firstElement) {
        firstElement.style.display = 'block';
      }
    }
  });


  var sliders = [
    'js-slider-1 .swiper',
    'js-slider-2 .swiper',
    'js-slider-3 .swiper'
  ];
  console.log(sliders);

  for (var i = 0; i < sliders.length; i++) {
    new Swiper('.' + sliders[i], {
      spaceBetween: 30,
      slidesPerView: 1,
      navigation: {
        nextEl: '.' + sliders[i].split(' ')[0] + ' .swiper-button-next',
        prevEl: '.' + sliders[i].split(' ')[0] + ' .swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        767: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 3,
        }
      },
    });
  }
}


// техническая часть - УДАЛИТЬ НА ПРОДАКШЕНЕ!
// получить в консоли элемент, по которому кликнули
document.addEventListener('click', e => console.log(e.target));
