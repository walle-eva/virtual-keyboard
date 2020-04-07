
const EN = [['`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace'],
['Tab','q','w','e','r','t','y','u','i','o','p','[',']','\\','DEL'],
['Caps Lock','a','s','d','f','g','h','j','k','l','\;','\'','Enter'],
['Shift','\\','z','x','c','v','b','n','m','\,','\.','\/','&#8593;','Shift'],
['Ctrl','Win','Alt','Space','Alt','Ctrl','&#8592;','&#8595;','&#8594;']]

const KEYCODE = [['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
['ShiftLeft', 'Backslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']]

const RU = [['`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace'],
['Tab','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','\\','DEL'],
['Caps Lock','ф','ы','в','а','п','р','о','л','д','ж','э','Enter'],
['Shift','\\','я','ч','с','м','и','т','ь','б','ю','\/','&#8593;','Shift'],
['Ctrl','Win','Alt','Space','Alt','Ctrl','&#8592;','&#8595;','&#8594;']]

//множество для подсветки клавиш нажатых с клавиатуры
let pressed = new Set();
//множество для подсветки клавиш нажатых с экрана
let pressedVirtual = new Set();

let lang;
let capital = false;

if(localStorage.getItem('En') == 'true' || localStorage.getItem('En') == null){
    lang = EN;
} else {
    lang = RU;
}

window.onload = function() {
    generateElementsBlock();
    generateElementKey(lang);
    keyPressHandler();
    clickKey();
}

const generateElementsBlock = ()=>{
    let section = document.createElement('section');
    let input = document.createElement('textarea');
    input.classList.add('input');
    let div = document.createElement('div');
    div.classList.add('key-wrapper');

    document.body.append(section);
    section.append(input);
    section.append(div);
}

const generateElementKey = (arrLang) => {
    
    for(let i = 0; i < arrLang.length; i++){
      let div = document.createElement('div');
      div.classList.add('row');
      for (let j = 0; j < arrLang[i].length; j++){
          let p = document.createElement('p');
          p.classList.add('key-elem');
          p.setAttribute('data-key', KEYCODE[i][j])
          p.innerHTML = arrLang[i][j];
          div.append(p);
      }
      let keyWrapper = document.querySelector('.key-wrapper');
      keyWrapper.append(div);
  }
}

const keyPressHandler = () => {
    document.addEventListener('keydown', keyShow);
    changeLanguage('ShiftLeft','ControlLeft');
    document.addEventListener('keyup', (event) => {
        pressed.delete(event.code);
      });
}

const changeLanguage = (...codes) => {
    
        let pressed = new Set();
  
        document.addEventListener('keydown', (event) => {
          pressed.add(event.code);
  
          for (let code of codes) { 
            if (!pressed.has(code)) {
              return;
            }
          }
  
          
          pressed.clear();

          document.querySelector('.key-wrapper').innerHTML = '';
 
          if(lang == EN){
            generateElementKey(RU);
            saveLang(false)
          } else {
            generateElementKey(EN);
            saveLang(true)
          }
        });
  
        document.addEventListener('keyup', function(event) {
          pressed.delete(event.code);
        });
}

const keyShow = (event) => {
    let input = document.querySelector('textarea');
    let code = event.code;
    let keys = document.querySelectorAll('.key-elem');

    if(event.key.length == 1){
        input.innerHTML += event.key;
        input.focus();
    }

    pressed.add(event.code);

    for(let i = 0; i < keys.length; i++){
        keys[i].classList.remove('active');;
        if(pressed.has(keys[i].getAttribute('data-key'))){
            keys[i].classList.add('active');
        }
    }
} 
 
const clickKey = () => {
    let keys = document.querySelector('.key-wrapper');
    keys.addEventListener('click', clickVirtual)
}

const clickVirtual = (event) => {
    let input = document.querySelector('textarea');
    let pos = getCaretPosition (input);
    let keys = document.querySelectorAll('.key-elem'); 

     
    pressedVirtual.add(event.target.getAttribute('data-key'));

     

    if(event.target.closest('.key-elem')){

    if(pressedVirtual.has('CapsLock')){
        event.target.classList.add('active');
        for(let i = 0; i < keys.length; i++){
            if(keys[i].innerHTML.length == 1){
            keys[i].innerHTML = keys[i].innerHTML.toUpperCase();
            } 
        }
    }


    if (event.target.getAttribute(['data-key']) == 'CapsLock') {
        capital = !capital;
    }

    if(event.target.closest('.key-elem') && (event.target.innerHTML.length == 1)){
        input.innerHTML += event.target.innerHTML; 
        setCaretPosition (input, pos + 1);
        
        for(let i = 0; i < keys.length; i++){
            if(keys[i].getAttribute('data-key') != 'CapsLosk'){
                keys[i].classList.remove('active');
            }
        } 
        event.target.classList.add('active');
        
       if(capital == false){
            capitalCancel();
        }
    }
    
    if(event.target.getAttribute(['data-key']) == 'Delete'){
        
        let inputValue = input.innerHTML.split('');
        inputValue.splice(pos, 1)
        input.innerHTML = inputValue.join('');
        setCaretPosition (input, pos)
        input.focus();
    }
    if(event.target.getAttribute(['data-key']) == 'Backspace'){
         
        let inputValue = input.innerHTML.split('');
        inputValue.splice(pos - 1, 1)
        input.innerHTML = inputValue.join('');
        setCaretPosition (input, pos - 1)
        input.focus();
    }

    if(event.target.getAttribute(['data-key']) == 'Tab'){
        input.innerHTML = input.innerHTML + '   ';
        setCaretPosition (input, pos + 3) 
        input.focus();
    }
    
    if(event.target.getAttribute(['data-key']) == 'Enter'){
        let inputValue = input.innerHTML.split('');
        inputValue.splice(pos, 0, '\r\n');
        input.innerHTML = inputValue.join('');
        setCaretPosition (input, input.innerHTML.length) 
        input.focus();
    }

    if (pressedVirtual.has('ShiftLeft') || pressedVirtual.has('ShiftRight')) {
        event.target.classList.add('active')
        for(let i = 0; i < keys.length; i++){
            if(keys[i].innerHTML.length == 1){
            keys[i].innerHTML = keys[i].innerHTML.toUpperCase();
            } 
        }
        

    }

}   
}

const getCaretPosition =  (elem) => {
    var caretPos = 0;

    if (document.selection) { // ie
        elem.focus ();
        var range = document.selection.createRange ();
        elem.moveStart ('character', -elem.innerHTML.length);
        caretPos = range.text.length;
    } else if (elem.selectionStart || elem.selectionStart == '0') { // Mozilla
        caretPos = elem.selectionStart;
    }

    return caretPos;
}


const setCaretPosition =  (elem, caretPos) => {
    if (document.selection) { // ie
        elem.focus ();
        var range = document.selection.createRange ();
        range.moveStart ('character', -elem.innerHTML.length);
        range.moveStart ('character', caretPos);
        range.moveEnd ('character', 0);
        range.select ();
    } else if (elem.selectionStart || elem.selectionStart == '0') { // Mozilla
        elem.selectionStart = caretPos;
        elem.selectionEnd = caretPos;
        elem.focus ();
    }
}

const capitalCancel = () => {
     let keys = document.querySelectorAll('.key-elem')
     capital = false;
     for(let i = 0; i < keys.length; i++){
        if(keys[i].innerHTML.length == 1){
        keys[i].innerHTML = keys[i].innerHTML.toLowerCase();
        } 
    }
    
    pressedVirtual.clear();
}

const saveLang = (bool) => {
    localStorage.setItem('En', bool);
}
