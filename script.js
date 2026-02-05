//Вывод текста в косоль
const getTitleValue = document.querySelector('.choice-product');
getTitleValue.addEventListener('mouseover', function() {
  console.log('Курсор перешел на заголовок');
});

//Перекраска кнопки
const recolorButton = document.getElementById('recolor-button');
let stateStatus = 0;
recolorButton.addEventListener('click', () => {
  if (stateStatus===0){
    recolorButton.classList.remove('aqua-color-button');
    recolorButton.classList.add('brown-color-button');
    stateStatus = 1;
  }
  else{
    recolorButton.classList.remove('brown-color-button');
    recolorButton.classList.add('aqua-color-button');  
    stateStatus=0;
  }
});